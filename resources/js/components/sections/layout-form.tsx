import { ChevronRightIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { Form } from '@inertiajs/react';
import type { FormDataConvertible } from 'node_modules/@inertiajs/core/types/types';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { contact } from '@/routes';
import { getWidthClasses } from '@/utils/utils';
import InputSelect from '../ui/input-select';
import Title from '../ui/title';

interface ContactFormErrors {
    name?: string;
    email?: string;
    phone?: string;
    service?: string;
    message?: string;
}

const LayoutForm = ({ withCTA = true }: { withCTA?: boolean }) => {
    const [service, setService] = useState<string | null>(null);

    const transformable = (data: Record<string, FormDataConvertible>): Record<string, FormDataConvertible> => {
        data.service = service;
        return data;
    };

    const hasErrorField = (field: keyof ContactFormErrors, errors: ContactFormErrors) => {
        return errors && Object.prototype.hasOwnProperty.call(errors, field);
    };

    const hasUnexpectedError = (errors: ContactFormErrors) => {
        return errors && Object.prototype.hasOwnProperty.call(errors, 'unexpected');
    };

    return (
        <section
            className={cn('space-y-10 pt-10', {
                'border-t-2 border-gray-renovacom': withCTA,
            })}
            id="contacto"
        >
            {withCTA && (
                <div className={cn(getWidthClasses(), 'text-center')}>
                    <Title className="mx-auto xl:max-w-5/6">Hablemos y coordinemos una reunión</Title>
                </div>
            )}

            <div
                className="bg-cover bg-center py-10"
                style={{
                    backgroundImage: "url('/assets/background-form.png')",
                }}
            >
                <div className={cn(getWidthClasses(), 'flex items-center justify-end')}>
                    <Form
                        transform={transformable}
                        method="post"
                        action={contact.post().url}
                        resetOnSuccess
                        onSuccess={() => setService(null)}
                        className="w-full space-y-6 rounded-3xl border border-white bg-gray-renovacom p-5 lg:w-1/2 lg:p-10"
                        options={{
                            preserveScroll: true,
                        }}
                    >
                        {({ errors, processing, wasSuccessful }) => (
                            <>
                                {/* Error */}
                                {Object.keys(errors).length > 0 && (
                                    <div className="animate-in fade-in slide-in-from-top-2 rounded-2xl border border-red-400/30 bg-red-500/10 p-4 duration-300">
                                        <div className="flex items-start gap-3">
                                            <ExclamationTriangleIcon className="mt-0.5 size-5 shrink-0 text-red-400" />
                                            <div className="space-y-2">
                                                <p className="font-medium text-red-300">
                                                    {(hasUnexpectedError(errors) &&
                                                        'Ocurrió un error inesperado, por favor intenta nuevamente más tarde') ||
                                                        'Por favor, revisa los campos marcados e inténtalo de nuevo'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Success */}
                                {wasSuccessful && (
                                    <div className="animate-in fade-in slide-in-from-top-2 rounded-2xl border border-green-renovacom/30 bg-green-renovacom/10 p-4 duration-300">
                                        <div className="flex items-start gap-3">
                                            <ExclamationTriangleIcon className="mt-0.5 size-5 shrink-0 text-green-renovacom" />
                                            <div className="space-y-2">
                                                <p className="font-medium text-green-renovacom">
                                                    ¡Gracias por contactarnos! Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes
                                                    posible.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Nombre y Email */}
                                <div className="grid gap-6 lg:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-white">Nombre *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Juan Pérez"
                                            className={cn(
                                                'rounded-full border border-white bg-transparent px-5 py-4 text-white placeholder-white/70 transition-colors focus:border-green-renovacom focus:outline-none',
                                                {
                                                    'border-red-400': hasErrorField('name', errors),
                                                },
                                            )}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-white">Email Corporativo *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="ejemplo@email.com"
                                            className={cn(
                                                'rounded-full border border-white bg-transparent px-5 py-4 text-white placeholder-white/70 transition-colors focus:border-green-renovacom focus:outline-none',
                                                {
                                                    'border-red-400': hasErrorField('email', errors),
                                                },
                                            )}
                                        />
                                    </div>
                                </div>

                                {/* Teléfono y Servicio */}
                                <div className="grid gap-6 lg:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-white">Teléfono *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="+56 9 1234 5678"
                                            className={cn(
                                                'rounded-full border border-white bg-transparent px-5 py-4 text-white placeholder-white/70 transition-colors focus:border-green-renovacom focus:outline-none',
                                                {
                                                    'border-red-400': hasErrorField('phone', errors),
                                                },
                                            )}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="text-white"
                                            htmlFor="service"
                                        >
                                            Servicio *
                                        </label>
                                        <InputSelect
                                            id="service"
                                            value={service}
                                            onChange={setService}
                                            options={[
                                                { value: 'Inspección Solar', label: 'Inspección Solar' },
                                                { value: 'Inspección Eólica', label: 'Inspección Eólica' },
                                                { value: 'Otros servicios', label: 'Otros servicios' },
                                            ]}
                                            className={cn({
                                                'border-red-400': hasErrorField('service', errors),
                                            })}
                                        />
                                    </div>
                                </div>

                                {/* Mensaje */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-white">Mensaje *</label>
                                    <textarea
                                        name="message"
                                        placeholder="Déjanos un mensaje con los detalles de tu consulta técnica."
                                        rows={6}
                                        className={cn(
                                            'resize-none rounded-3xl border border-white bg-transparent px-5 py-4 text-white placeholder-white/70 transition-colors focus:border-green-renovacom focus:outline-none',
                                            { 'border-red-400': hasErrorField('message', errors) },
                                        )}
                                    />
                                </div>

                                {/* Botón */}
                                <div className="flex justify-start pt-4">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className={cn(
                                            'font-regular flex w-fit items-center rounded-full border-2 border-green-renovacom bg-green-renovacom px-5 py-3.5 tracking-wide text-black-renovacom transition-all hover:border-black-renovacom hover:bg-white xl:text-xl',
                                            { 'cursor-not-allowed opacity-50': processing },
                                        )}
                                    >
                                        Hablemos
                                        <ChevronRightIcon className="-mr-1 ml-2 size-5" />
                                    </button>
                                </div>
                            </>
                        )}
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default LayoutForm;
