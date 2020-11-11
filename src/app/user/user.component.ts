import { Component, OnInit } from '@angular/core';
import { UserListService } from '../services/user-list.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public getData: any;
  constructor(private userList:UserListService) { }

  ngOnInit() {
    
   this.userList.getAllUsers()
    .subscribe(
      (data) => {
        this.getData = data;
        console.log("todos data", data);
      },
      error => {
        console.error("getAllTodos Error:", error);
      },
      () => {
        console.info("Completed execution of getAllTodos");
      });
  }

}
