import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flow } from './flow';


@Injectable({
  providedIn: 'root'
})
export class S1Service {
url="http://localhost:3000/posts"
  constructor(private http:HttpClient) { }
  GetData():Observable<Flow>{
    return this.http.get<Flow>(this.url,{responseType:"json"})
  }
  post(shsh:Flow):Observable<Flow>{
    return this.http.post<Flow>(this.url+'/',shsh,{responseType:"json"})
  }
  getPerticularId(id:number):Observable<Flow>{
    return this.http.get<Flow>(this.url+'/'+id)
  }
  edit(id:number,data:any){
    return this.http.put(this.url+'/'+id,data)
  }
  delete(id:number){
    return this.http.delete(this.url+'/'+id)
  }


}
