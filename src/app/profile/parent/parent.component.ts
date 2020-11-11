import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
loggedInParent = false;

fromChildVar: string = '';

  ngOnInit() {
  }

  displayfromChild(txt:string){

    this.fromChildVar = txt;
    
    console.log("From Child: ", txt)
  }
}
