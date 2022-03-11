import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
    selector: 'app-employee-form',
    templateUrl: './employee-form.component.html',
    styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit
{

    model = new Employee(
        '',
        '',
        false,
        ''
    );

    alphaSpace = /[0-9-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/ig;

    constructor() { }

    ngOnInit(): void
    {
    }

    isAlphaSpace(str: string)
    {
        return this.alphaSpace.test(str);
    }
}
