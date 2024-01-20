import { Yup } from '@/_lib/yup';
import { AnySchema } from 'yup';

export const signInValidationSchema = (): AnySchema => {
    return Yup.object({
        email: Yup.string()
            .email()
            .extEmail('Invalid email format')
            .required('Email address is required'),
        password: Yup
            .string()
            .required('Password is required')
            .min(8, "Your password must be longer than 8 characters.")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            ),
    });
};
