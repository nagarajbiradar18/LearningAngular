import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input('loggedInP') loggedIn;
@Output() close: EventEmitter<any> = new EventEmitter();

  constructor() { }

 

  ngOnInit() {

   
  }

  sendDate(){
    this.close.emit("I'm Child")
    console.log("sendData Clicked")
  }

}
