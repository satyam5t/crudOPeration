import { Component, OnInit } from '@angular/core';
import { FormControl,  FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Flow } from 'src/app/flow';

import { S1Service } from 'src/app/s1.service';
import { S2Service } from 'src/app/s2.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {

  constructor(private s1:S1Service,public rt:Router) { }
AddUser:Flow=new Flow();

  ngOnInit(): void {


  }


  form:FormGroup=new FormGroup({
    title:new FormControl('',[Validators.required]),
    author:new FormControl('',[Validators.required])
  })
  save(){
    if(this.form.valid===true){
    this.AddUser.title=this.form.value.title;
    this.AddUser.author=this.form.value.author;
    this.s1.post(this.AddUser).subscribe((d)=>{
      this.AddUser=d,
      this.AddUser.author=d.author,
      this.AddUser.title=d.title,
      this.form.reset();
    })
  }
this.rt.navigate(['/form'])

  }

  reset(){
    this.form.reset()
  }
}
