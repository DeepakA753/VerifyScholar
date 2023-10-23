import { Component } from '@angular/core';

export class States{
  constructor(
    public name : string
  ){

  }
}

@Component({
  selector: 'app-scholarships',
  templateUrl: './scholarships.component.html',
  styleUrls: ['./scholarships.component.css']
})
export class ScholarshipsComponent {
  states = [
    new States('Andhra Pradesh'),
    new States('Arunachal Pradesh'),
    new States('Assam'),
    new States('Bihar'),
    new States('Chhattisgarh'),
    new States('Goa'),
    new States('Gujarat'),
    new States('Haryana'),
    new States('Himachal Pradesh'),
    new States('Jharkhand'),
    new States('Karnataka'),
    new States('Kerala'),
    new States('Madhya Pradesh'),
    new States('Maharashtra'),
    new States('Manipur'),
    new States('Meghalaya'),
    new States('Mizoram'),
    new States('Nagaland'),
    new States('Odisha'),
    new States('Punjab'),
    new States('Rajasthan'),
    new States('Sikkim'),
    new States('Tamil Nadu'),
    new States('Telangana'),
    new States('Tripura'),
    new States('Uttarkhand'),
    new States('Uttar Pradesh'),
    new States('West Bengal')
  ]
}
