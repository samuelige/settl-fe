import * as yup from 'yup';
import { StringSchema, DateSchema } from 'yup';

import parsePhoneNumberFromString from 'libphonenumber-js';
import isEmail from 'validator/lib/isEmail';

yup.addMethod<StringSchema>(
    yup.string,
    'extMobilePhone',
    function extMobilePhone(errorMessage: string): StringSchema {
        return this.test('isMobileValid', errorMessage, (value) => {
            if (value) {
                const phoneNumber = parsePhoneNumberFromString(value);
                if (phoneNumber) {
                    return phoneNumber.isValid();
                } else {
                    return false;
                }
            } else {
                return true;
            }
        });
    }
);

yup.addMethod<StringSchema>(
    yup.string,
    'extEmail',
    function extEmail(errorMessage: string): StringSchema {
        return this.test('isEmailValid', errorMessage, (value) => {
            if (value) {
                return isEmail(value);
            } else {
                return true;
            }
        });
    }
);


export { yup as Yup };
