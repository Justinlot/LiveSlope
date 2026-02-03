import { z } from 'zod';

export const registerScheme = z.object({
    username: z.string().min(1, { message: "Benutzername ist erforderlich" }),
    password: z.string().min(1, { message: "Passwort ist erforderlich" }).min(8, { message: "Passwort muss mindestens 8 Zeichen lang sein" }),
    confirmPassword: z.string().min(1, { message: "Passwortbestätigung ist erforderlich" }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwörter stimmen nicht überein",
    path: ["confirmPassword"],
})