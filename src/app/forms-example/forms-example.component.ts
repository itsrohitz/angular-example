import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-example',
  templateUrl: './forms-example.component.html',
  styleUrls: ['./forms-example.component.css']
})
export class FormsExampleComponent {
  firstName: string = '';
  lastName: string = '';
  password:string='';
  errorStyles = {
    color: 'red',
    fontWeight: 'bold',
    backgroundColor: 'lightyellow'}
    email:string=''
  submit(form:NgForm){
    console.log(form);

  }
}
