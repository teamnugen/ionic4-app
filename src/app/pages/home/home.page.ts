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
            { name: "Home Page", icon: "home", url: "/home" },
            { name: "Ionic Selectable", icon: "cube", url: "/ionic-selectable" },
        ];
    }

}
