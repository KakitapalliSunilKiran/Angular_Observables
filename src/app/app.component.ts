import { Component } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { Employee } from './Employee';
import { DataserviceService } from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ObservablePoc';
   x:string=''
   y:string=''
   z:string=''

   constructor(private employeeService:DataserviceService){}

   arr: string[]=[];
   printArray:Employee[]=[];
  myObservable1=new Observable((observer1)=>{

    console.log("I am in Observable")
    setTimeout(()=>{observer1.next("1");},1000)
   
    setTimeout(()=>{observer1.next("2");},2000)
    
     setTimeout(()=>{observer1.next("9");},3000)

    // setTimeout(()=>{observer1.error(new Error('Something went wrong'))},4000)
    setTimeout(()=>{observer1.complete();},3500)
       setTimeout(()=>{observer1.next("4");},4000)
         setTimeout(()=>{observer1.next("5");},5000)
  })

  
  myObservable2=Observable.create((observer1:any)=>{

    console.log("I am in Observable")
    setTimeout(()=>{observer1.next("11");},1000)
   
    setTimeout(()=>{observer1.next("22");},2000)
    
     setTimeout(()=>{observer1.next("99");},3000)

    // setTimeout(()=>{observer1.error(new Error('Something went wrong'))},4000)
    setTimeout(()=>{observer1.complete();},3500)
       setTimeout(()=>{observer1.next("4");},4000)
         setTimeout(()=>{observer1.next("5");},5000)
  })

  arr1=[10,20,30,40];
  str="sunil";

  myObservable3=of(this.arr1,this.str,"55","11");

  myObservable4=from(this.arr1)

  // Observable=> Youtube when ever someone is uploading a new video subscriber get notifiction

  //Observable will emit the data and subscriber will receive the data

  ngOnInit(){
    
    this.myObservable4.subscribe((data:any)=>{
      // this.x=data+""
      // this.y=data+""
      // this.z=data+""
      this.arr.push(data+"");

      console.log(data);
    },(error:any)=>{
      alert(error.message);
    },()=>{
      alert("Obserable has completed all the values")
    });

    this.employeeService.getData().subscribe((data)=>{
       this.printArray=data;
    });
  }

}


