import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string='david saga';
  address:string='svale'

  textid = 'demoId';//a property now

  // myClasses = 'colorCode heighting';//string usage, value defined in css file
  // myClasses = ['colorCode','heighting'];//alternative usage
  myClasses = {'colorCode':true,'heighting':false};//selective usage of classes
  getName(data:number):string{
    if (data > 0)
return 'address is '+ this.address+data;
else {
return 'no address to return';
}}
employees=['you', 'me', 'someone else'];
employee={
  title:'software developer', 
  name:'saga',
  src:'https://images.unsplash.com/photo-1682686579688-c2ba945eda0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  alt:'profile picture'
}

paaKlikkLagre():void{
  alert('LagreKnappen er klikkket paa');
  alert('navnet er oppdatert til ... ')
  this.name ='... ingentin'
}

overst():void{
  this.name="det var david saga"
}

forandring():void{
this.name="tekst forandret"

}

}
