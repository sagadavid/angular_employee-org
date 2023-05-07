import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'david saga';
  address: string = 'svale';
  //property binding
  isOn = true;
  isOff = false;
  src2 =
    'https://images.unsplash.com/photo-1683220643085-1fa0ad87a1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80';
  genislik = 500;
  //property binding
  textid = 'demoId'; //a property now
  //class binding
  // myClasses = 'colorCode heighting';//string usage, value defined in css file
  // myClasses = ['colorCode','heighting'];//alternative usage
  myClasses = { colorCode: this.isOn, heighting: this.feiler() }; //selective usage of classes
  //style binding from component
  componentStyle = 'color:green; font:italic';

  getName(data: number): string {
    if (data > 0) return 'address is ' + this.address + data;
    else {
      return 'no address to return';
    }
  }

  employees = ['you', 'me', 'someone else'];
  employee = {
    title: 'software developer',
    name: 'saga',
    src: 'https://images.unsplash.com/photo-1682686579688-c2ba945eda0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    alt: 'profile picture',
  };

  paaKlikkLagre(): void {
    alert('LagreKnappen er klikkket paa');
    alert('navnet er oppdatert til ... ');
    this.name = '... ingentin';
  }

  overst(): void {
    this.name = 'det var david saga';
  }

  forandring(): void {
    this.name = 'tekst forandret';
  }

  feiler(): boolean {
    return false;
  }
}
