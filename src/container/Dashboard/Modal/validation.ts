import { Yup } from '@/_lib/yup';
import { AnySchema } from 'yup';

export const userValidationSchema = (): AnySchema => {
    return Yup.object({
        name: Yup.string()
            .trim()
            .required('User name is required')
            .max(50, 'Too many symbols'),
        user_type: Yup.string()
            .trim()
            .required('User type is required')
            .max(50, 'Too many symbols'),
    });
};
export const transferValidationSchema = (): AnySchema => {
    return Yup.object({
        source_acct: Yup.string()
            .trim()
            .required('Source acct is required')
            .max(50, 'Too many symbols'),
        destination: Yup.string().trim()
            .required()
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(10, 'Must be exactly 10 digits')
            .max(10, 'Must be exactly 10 digits'),
        amount: Yup.string()
            .trim()
            .required('Amount type is required')
            .max(50, 'Too many symbols'),
    });
};

export const airtimeValidationSchema = (): AnySchema => {
    return Yup.object({
        source_acct: Yup.string()
            .trim()
            .required('Source acct is required')
            .max(50, 'Too many symbols'),
        network_provider: Yup.string()
            .trim()
            .required('Network provider is required')
            .max(50, 'Too many symbols'),

        amount: Yup.string()
            .trim()
            .required('Amount type is required')
            .max(50, 'Too many symbols'),
        phone_number: Yup.string()
            .extMobilePhone('Invalid contact phone number')
            .nullable(),
    });
};