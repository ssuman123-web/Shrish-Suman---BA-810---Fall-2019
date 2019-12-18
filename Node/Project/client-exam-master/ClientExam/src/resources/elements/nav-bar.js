import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { AuthService } from 'aurelia-auth';

@inject(Router, AuthService)
export class NavBar {
    constructor(router, auth) {
        this.authenticated = false;
        this.router = router;
        this.auth = auth;
        this.loginError = '';
        this.email = "";
        this.password = "";

    }

    attached() {
        $('.navbar-nav a').on('click', function () {
            $('.navbar-nav').find('li.active').removeClass('active');
            $(this).parent('li').addClass('active');
        });
    }

    login() {
        //   console.log(this.email);
        //   console.log(this.password);
        //  this.authenticated = true;
        //  this.router.navigate('home');
        return this.auth.login(this.email, this.password)
            .then(response => {
                this.userObj = response.user;
                sessionStorage.setItem("userObj", JSON.stringify(this.userObj));
                this.loginError = "";
                this.authenticated = this.auth.isAuthenticated();
                this.router.navigate('home');
            })
            .catch(error => {
                console.log(error);
                this.authenticated = false;
                this.loginError = "Invalid credentials.";
            });

    }
   
    
    logout() {
        // this.authenticated = false;
        //  this.router.navigate('landing');
        this.auth.logout();
        sessionStorage.removeItem('userObj');
        this.authenticated = this.auth.isAuthenticated();

    }
    bind() {
        this.authenticated = this.auth.isAuthenticated();
    }
}
