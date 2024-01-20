
import { StringSchema, DateSchema } from 'yup';

declare module 'yup' {
    export interface StringSchema {
        extMobilePhone(message: string): StringSchema;
        extEmail(message: string): StringSchema;
    }

    export interface DateSchema {
        extBirthDate(message?: string): DateSchema;
    }
}
