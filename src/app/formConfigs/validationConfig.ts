import { Validators } from '@angular/forms';
export class ValidationConfig {
    /**
     * @description Form object of login page of sign-in module
     *
     * @static
     * @returns {{ [key: string]: any; }}
     * @memberof ValidationConfig
     */
    static getLoginConfig(): { [key: string]: any; } {
        return {
            email: ['test@gmail.com', [Validators.email, Validators.required]],
            password: ['123456', [Validators.required]],
            keepMeLogin: [true, [Validators.required]]
        };
    }

    static getSignUpConfig(): { [key: string]: any; } {
        return {
            userName: [null, [Validators.required]],
            email: [null, [Validators.email, Validators.required]],
            mobile: [null, [Validators.required]],
            password: [null, [Validators.required, Validators.minLength(6)]],
            confirmPassword: [null, [Validators.required, Validators.minLength(6)]]
        };
    }
}
