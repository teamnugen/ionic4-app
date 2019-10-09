/**
 * https://www.freakyjolly.com/ionic-4-add-radio-lists-in-radio-group-example-and-tutorial/
 */

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { IonRadioGroup } from '@ionic/angular';



@Component({
    selector: 'app-radio',
    templateUrl: './radio.page.html',
    styleUrls: ['./radio.page.scss'],
})
export class RadioPage implements OnInit {

    campaignForm: FormGroup;

    recipientTypes = [
        { text: "No", checked: true },
        { text: "Yes", checked: false },
    ];


    selectcategory: any;
    selectcategory1: any;


    // @ViewChild('radioGroup', {static: false}) radioGroup: IonRadioGroup;

    defaultSelectedRadio = "radio_2";

    //Get value on ionChange on IonRadioGroup
    selectedRadioGroup: any;

    //Get value on ionSelect on IonRadio item
    selectedRadioItem: any;

    radio_list = [
        {
            id: '1',
            name: 'radio_list',
            value: 'radio_1',
            text: 'One',
            disabled: false,
            checked: false,
            color: 'primary'
        }, {
            id: '2',
            name: 'radio_list',
            value: 'radio_2',
            text: 'Two',
            disabled: false,
            checked: true,
            color: 'secondary'
        }, {
            id: '3',
            name: 'radio_list',
            value: 'radio_3',
            text: 'Three',
            disabled: false,
            checked: false,
            color: 'danger'
        },
    ];

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.campaignForm = this.formBuilder.group({
            name: new FormControl('Test'),
            recipientType: new FormControl('No'),
            // topic: new FormControl('', Validators.required),
            // activityType: new FormControl('')
        });
    }

    reset() {
        console.log("reset form");

        // this.selectedRadioGroup = [];
        // this.campaignForm.reset();
        this.campaignForm.controls['name'].setValue('Blah');
        this.campaignForm.controls['recipientType'].setValue('No');
    }

    onSubmit(event) {
        console.log("onSubmit event: ", event);
    }

    radioGroupChange(event) {
        console.log("radioGroupChange", event.detail);
        this.selectedRadioGroup = event.detail;
    }

    radioSelect(event) {
        console.log("radioSelect", event.detail);
        this.selectedRadioItem = event.detail;
    }


    // radioFocus() {
    //     console.log("radioFocus");
    // }
    // radioBlur() {
    //     console.log("radioBlur");
    // }


    codeSelected($event: any) {
        console.log("event: ", $event);

        switch (this.selectcategory) {
            case "1":
                this.selectcategory = "Category 1";
                break;
            case "2":
                this.selectcategory = "Category 2";
                break;
            case "3":
                this.selectcategory = "Category 3";
                break;
        }

        console.log("this.selectcategory: ", this.selectcategory);

    }
}
