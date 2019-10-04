/**
 * NPM: https://www.npmjs.com/package/ionic-selectable
 * Demo: https://stackblitz.com/edit/ionic-selectable-basic?file=pages/home/home.html
 * Doc: https://github.com/eakoriakin/ionic-selectable/wiki
 */

import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Skill } from 'src/app/model/skills';
import { LANGUAGES } from "./mock-data"

@Component({
    selector: 'app-ionic-selectable',
    templateUrl: './ionic-selectable.page.html',
    styleUrls: ['./ionic-selectable.page.scss'],
})
export class IonicSelectablePage implements OnInit {

    skills: Skill[];
    selectedSkills: Array<Skill>;

    constructor() {
        this.skills = LANGUAGES;
    }

    ngOnInit() { }

    onSkillChange(event: { component: IonicSelectableComponent, value: any }) {
        console.log('selected skill(s):', event.value);
    }

}
