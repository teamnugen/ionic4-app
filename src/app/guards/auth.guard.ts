import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { take, map } from "rxjs/operators";
import { AuthService } from '../services/auth/auth.service';
import { AlertController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthService, private alertController: AlertController) { }

    canActivate(route: ActivatedRouteSnapshot) {
        const expectedRole = route.data.role;
        console.log('expected: ', expectedRole);

        return this.authService.user.pipe(
            take(1),
            map(user => {
                console.log("log: ", user);
                if (user && ('ADMIN' === user['role'] || expectedRole === undefined)) {
                    return true;
                }
                this.showAlert();
                return this.router.parseUrl('/login');
            })
        )
    }

    async showAlert() {
        let alert = await this.alertController.create({
            header: "Unauthorized",
            message: "You're not authorized to access that page.",
            buttons: ['OK', 'Cancel']
        });
        alert.present();
    }

}
