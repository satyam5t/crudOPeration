import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class S2Service {

  constructor() { }
  data=new Subject()

}
