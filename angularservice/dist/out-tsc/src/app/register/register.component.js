import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../auth/signup-info';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, route) {
        this.authService = authService;
        this.route = route;
        this.form = {};
        this.errorMessage = '';
        this.FirstName = new FormControl('', [Validators.required]);
        this.LastName = new FormControl('');
        this.email = new FormControl('', [Validators.required, Validators.email]);
        this.password = new FormControl('', [Validators.required]);
        this.confirm = new FormControl('', [Validators.required]);
        this.toppings = new FormControl();
        this.toppingList = ['DataBinding', 'Pipes', 'Forms', 'Navigation', 'TypeScript', 'Testing', 'FundamentalArchitecture', ''];
    }
    RegisterComponent.prototype.getErrorFnameMessage = function () {
        return this.FirstName.hasError('required') ? 'You must enter a value' : '';
    };
    RegisterComponent.prototype.getpassErrorMessage = function () {
        return this.password.hasError('required') ? 'You must enter a value' : '';
    };
    RegisterComponent.prototype.getconfirmErrorMessage = function () {
        if (this.password.value != this.confirm.value) {
            return "Password Not Matching";
        }
    };
    RegisterComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        console.log(this.form);
        this.signupInfo = new SignUpInfo(this.email.value, this.password.value, this.FirstName.value, this.LastName.value, this.toppings.value);
        this.authService.signUp(this.signupInfo).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
            _this.errorMessage = error.error.message;
        });
    };
    RegisterComponent.prototype.backToLogin = function () {
        this.route.navigate(["/auth/login"]);
    };
    RegisterComponent = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map