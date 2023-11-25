import { Component } from '@angular/core';
import { Observable } from 'rxjs';

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

   arr: string[]=[];
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

  // Observable=> Youtube when ever someone is uploading a new video subscriber get notifiction

  //Observable will emit the data and subscriber will receive the data

  ngOnInit(){
    
    this.myObservable1.subscribe((data)=>{
      // this.x=data+""
      // this.y=data+""
      // this.z=data+""
      this.arr.push(data+"");

      console.log(data);
    },(error)=>{
      alert(error.message);
    },()=>{
      alert("Obserable has completed all the values")
    });
  }

}


