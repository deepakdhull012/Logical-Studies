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
            // tslint:disable-next-line:max-line-length
            email: [null, [Validators.email]],
            password: [null,[Validators.required]]
        }
    }
}