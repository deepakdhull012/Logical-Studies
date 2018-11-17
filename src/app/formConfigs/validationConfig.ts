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
            email: [null, [Validators.pattern(RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))]],
            password: [null,[Validators.required]]
        }
    }
}