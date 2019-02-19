import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, tokenStorage, router) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.email = new FormControl('', [Validators.required]);
        this.password = new FormControl('', Validators.required);
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
        }
    };
    LoginComponent.prototype.validate = function () {
        var _this = this;
        console.log(this.form);
        this.loginInfo = {
            "email": this.email.value,
            "password": this.password.value
        };
        this.authService.attemptAuth(this.loginInfo).subscribe(function (data) {
            console.log("data  is ", data);
            console.log("token is  ", data.accessToken);
            _this.tokenStorage.saveToken(data.accessToken);
            _this.tokenStorage.saveUsername(data.email);
            _this.isLoginFailed = false;
            _this.isLoggedIn = true;
            // this.reloadPage();
        }, function (error) {
            console.log(error);
            _this.errorMessage = error.error.message;
            _this.isLoginFailed = true;
        });
    };
    LoginComponent.prototype.reloadPage = function () {
        window.location.reload();
    };
    LoginComponent.prototype.signup = function () {
        this.router.navigate(["/signup"]);
    };
    LoginComponent.prototype.home = function () {
        this.router.navigate(["/home"]);
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, TokenStorageService, Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map