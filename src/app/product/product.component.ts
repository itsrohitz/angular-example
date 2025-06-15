import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, forkJoin, from, map, merge, of, pipe, pluck } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private fb : FormBuilder, private router:Router, private productService:ProductService){}
  value:string=''
  ngOnInit(): void {
   this.abc();
   this.getForm();
  }
  goHome() {
    this.router.navigate(['form']);
    of(1,2,3,4,5).pipe(
      map((item)=>{return item*2}),
      filter((item:any)=>{return item>2})
    ).subscribe(item=>console.log(item));

    of(1,2,3,4,5).pipe(
      map(item=>item*2),
      filter(item=> item>2)
    ).subscribe(item=>console.log(item));

  }

  getValue(val:any){
    console.log(val.currentTarget);
    this.productService.getProduct().pipe(
  map((items:any)=>items.map((item:any) => item.id)),
).
subscribe((item:any)=>{
  console.log(item);
 }) 

 const a =  this.productService.getProduct();
 const b = this.productService.get1();
 forkJoin([a,b]).pipe(
  filter((item:any)=>item.id<5)
 ).
 subscribe((item)=>{
  console.log(item);
 })
  }
  lastname:string = '';
  searchControl = new FormControl('');
  items = ['Apple', 'Banana', 'Cherry', 'Date'];
  filteredItems: string[] = this.items;
  abc(){
  this.searchControl.valueChanges
  .pipe(
  debounceTime(300),
  distinctUntilChanged()
  )
  .subscribe(value => {
  this.filteredItems = this.items.filter(item =>
  item.toLowerCase().includes(value?.toLowerCase() || '')
  );
  });
}

signin!:FormGroup;
// get itemss() {
//   return this.signin.get('itemss') as FormArray;
//  }
getForm(){
  this.signin = this.fb.group({
    fname: ['', Validators.required],
    lname: ['', Validators.required],
    itemss: this.fb.array([])
  })
}
get itemss(): FormArray {
  return this.signin.get('itemss') as FormArray;
}

// Function to add a new set of fields to the form
addItem() {
  const newGroup = this.fb.group({
    class: ['', Validators.required],
    grade: ['', Validators.required]
  });

  this.itemss.push(newGroup);
}
}

