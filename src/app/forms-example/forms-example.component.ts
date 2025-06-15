import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forms-example',
  templateUrl: './forms-example.component.html',
  styleUrls: ['./forms-example.component.css']
})
export class FormsExampleComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  password:string='';
  valuee='hello';
  errorStyles = {
    color: 'red',
    fontWeight: 'bold',
    backgroundColor: 'lightyellow'
  }
  
    email:string=''
    signform!:FormGroup;
constructor(private fb : FormBuilder, private router:Router){}

ngOnInit(): void {
  this.submitform();
}

  submitform(){
    this.signform = this.fb.group({
      name:['', Validators.required],
      lastName:['', Validators.required],
      password:['', Validators.required],
      confirmPassword:['', Validators.required],
      items: this.fb.array([])
    }, { validators: this.wordMatchValidator })
  }

  login(){
    console.log(this.signform.value);

  }
  submit(form:NgForm){
    this.router.navigate(['product']);
    console.log(form);
  }
  naviagetProduct(){
   this.router.navigate(['product']);
  }

   get items() {
    return this.signform.get('items') as FormArray;
   }
   addItem() {
    return (this.signform.get('items') as FormArray).push(this.fb.control(''));
   // this.items.push(this.fb.control(''));
   }
   
   wordMatchValidator(group: FormGroup): ValidationErrors | null {
    const pass = this.signform.get('password')?.value;
    const confirm = group?.get('confirmPassword')?.value;
    return pass === confirm ? null : { mismatch: true };
   }

    obs = new Observable((ob:any)=>{
      

   })

 
}
