import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-user-dashboard',
    templateUrl: './user-dashboard.page.html',
    styleUrls: ['./user-dashboard.page.scss'],
})
export class UserDashboardPage implements OnInit {

    constructor(private authService: AuthService) { }

    ngOnInit() {
    }

    signOut() {
        this.authService.signOut();
    }

}
