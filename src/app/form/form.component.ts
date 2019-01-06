import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from '../data.service';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  doctor = new Doctor;


  constructor(private dataService: DataService) { }

  ngOnInit() { }

  newDoctor() {
    this.dataService.addDoctor(this.doctor).subscribe(() => console.log("Doctor added"));
  }
}
