import { z } from 'zod';

export const changePasswordScheme = z.object({
    oldPassword: z.string().min(1, { message: "Altes Passwort ist erforderlich" }),
    password: z.string().min(1, { message: "Neues Passwort ist erforderlich" }).min(8, { message: "Passwort muss mindestens 8 Zeichen lang sein" }),
    confirmPassword: z.string().min(1, { message: "Passwortbestätigung ist erforderlich" }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwörter stimmen nicht überein",
    path: ["confirmPassword"],
});