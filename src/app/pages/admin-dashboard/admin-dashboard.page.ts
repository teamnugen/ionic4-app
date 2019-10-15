import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.page.html',
    styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {

    constructor(private authService: AuthService) { }

    ngOnInit() {
    }

    signOut() {
        this.authService.signOut();
    }
}
