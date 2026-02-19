export type * from './auth';
export type * from './models';

import type { Auth } from './auth';

export type SharedData = {
    name: string;
    auth: Auth;
    layout: {
        linkedin?: string;
        instagram?: string;
        email?: string;
        phone?: string;
        phone_whatsapp?: string;
    };
    [key: string]: unknown;
};
