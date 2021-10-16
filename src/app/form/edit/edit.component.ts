import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { S1Service } from 'src/app/s1.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  form:FormGroup=new FormGroup({
    title:new FormControl('',[Validators.required]),
    author:new FormControl('',[Validators.required])
  })
  constructor(private s1:S1Service,private route:ActivatedRoute,public rt:Router) { }

  ngOnInit(): void {
  this.s1.getPerticularId(this.route.snapshot.params.id).subscribe((d)=>{
      this.form=new FormGroup({
       title:new FormControl(d['title']),
         author:new FormControl(d['author'])
     })
     })
    console.log(this.route.snapshot.params.id)

  }
  edit(){
    this.s1.edit(this.route.snapshot.params.id,this.form.value).subscribe((e)=>{
     console.log(e)
    })
    this.rt.navigate(['/form'])
  }


}
