import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {

  title = 'pipeApp';



  persons = [

    {

      id: 1,

      name: 'Hardik Savani',

      gender: 0,

      website: 'itsolutionstuff.com'

    },

    {

      id: 2,

      name: 'Kajal Patel',

      gender: 1,

      website: 'nicesnippets.com'

    },

    {

      id: 3,

      name: 'Harsukh Makawana',

      gender: 0,

      website: 'laracode.com'

    }

  ]


  constructor() { }

  ngOnInit() {
  }

}
