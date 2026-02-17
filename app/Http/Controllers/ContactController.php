<?php

namespace App\Http\Controllers;

use App\Enum\ErrorKeys;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Throwable;

class ContactController extends Controller
{

    public function __invoke(Request $request)
    {

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'service' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        try {

            $externalRequest = Http::timeout(30)->post(config('services.growthzilla.endpoint'), $validated);

            if ($externalRequest->clientError() || $externalRequest->serverError()) {
                $externalRequest->throw();
            }

            Contact::create($validated);

            return;
        } catch (Throwable $e) {

            Log::error('Error while sending contact form: ' . $e->getMessage(), [
                'exception' => $e,
                'request_data' => $validated,
                'ip' => $request->ip(),
                'user_agent' => $request->userAgent(),
                'url' => $request->fullUrl(),
            ]);

            return back()->withErrors('Ocurrió un error inesperado', ErrorKeys::UNEXPECTED->value);
        }
    }
}
