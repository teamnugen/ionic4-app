import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    users = [
        { email: "admin", pwd: "admin", checked: true },
        { email: "user", pwd: "user", checked: false },
    ]

    userCredential = {
        email: "",
        pwd: ""
    }


    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() { }

    radioGroupChange(event) {
        this.userCredential = this.users.map(({ email, pwd }) => ({ email, pwd })).find(item => item.email === event.detail.value);
        console.log("this.userCredential: ", this.userCredential);
    }

    signIn() {
        this.authService.signIn(this.userCredential).subscribe(user => {
            console.log('===> After login: ', user);
            let role = user['role'];

            if (role === "ADMIN") {
                this.router.navigateByUrl('/admin-dashboard');
            }
            else if (role === "USER") {
                this.router.navigateByUrl('/user-dashboard');
            }
        });
    }
}
