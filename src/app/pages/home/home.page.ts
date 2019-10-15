import { Component } from '@angular/core';

class Page {
    name: string;
    icon: string
    url: string;
}

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    pages: Array<Page>;

    constructor() {
        this.pages = [
            // { name: "Home Page", icon: "home", url: "/home" },
            { name: "Ionic Selectable Exmaple", icon: "cube", url: "/ionic-selectable" },
            { name: "Radio Group Example", icon: "radio-button-on", url: "/radio" },
            { name: "Login and Role-based Authentication Example", icon: "lock", url: "/login" },
        ];
    }
}
