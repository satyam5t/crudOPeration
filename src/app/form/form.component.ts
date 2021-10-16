import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { S1Service } from '../s1.service';
import { S2Service } from '../s2.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private s1:S1Service,public rt:Router,private s2:S2Service) { }

  ngOnInit(): void {
     this.s1.GetData().subscribe((d)=>this.dataSource=d)
  
  }
  displayedColumns:string[]=['title','author','id']
dataSource:any;

save(){
  this.rt.navigate(["/save"])
}
}
