import { Component } from '@angular/core';
import {  FormControl, ReactiveFormsModule , Validators ,FormBuilder,FormArray} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.css'
})
export class ProfileEditorComponent {

  // profileForm = new FormGroup({
  //   firstName:new FormControl('',Validators.required),
  //   lastName:new FormControl(''),
  //   address: new FormGroup({
  //     street:new FormControl(''),
  //     city:new FormControl(''),
  //     state:new FormControl(''),
  //     pinCode:new FormControl('')
  //   })
  
  constructor(private formBuilder:FormBuilder){}

    profileForm = this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName: [''],
      address: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        pinCode: [''],
      }),
    });
  
  onSubmit(){
    console.warn(this.profileForm.value)
  }

  // const names=new FormArray([new FormControl("Alex")])
  
  
}
