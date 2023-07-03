import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  FormData!: FormGroup;

  constructor(private builder: FormBuilder,private contact:ContactService) { }

  ngOnInit() {
    this.FormData = this.builder.group({
     user:new FormControl('',[Validators.required]),
     subject:new FormControl('',[Validators.required]),
     email:new FormControl('',[Validators.required,Validators.email]),
     textArea:new FormControl('',Validators.required)
    });
  }

  onSubmit(FormData:FormGroup)
  {
     console.log(FormData);
     this.contact.PostMessage(FormData)
     .subscribe(response=>{
      location.href='https://mailthis.to/confirm'
      console.log(response)
     },error=>{
      console.warn(error.responseText)
      console.log({error})
     })
  }

}
