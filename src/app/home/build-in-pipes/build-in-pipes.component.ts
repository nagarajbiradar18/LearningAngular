import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-build-in-pipes',
  templateUrl: './build-in-pipes.component.html',
  styleUrls: ['./build-in-pipes.component.css']
})
export class BuildInPipesComponent implements OnInit {

  title = 'my-first-app';  
  todaydate = new Date();  
  jsonval = {name: 'Alex', age: '25', address:{a1: 'Paris', a2: 'France'}};  
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',  
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];  
    

  constructor() { }

  ngOnInit() {
    console.log("title ", typeof(this.title))
  }

}
