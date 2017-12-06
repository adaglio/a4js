import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [DataService]
})
export class UserComponent implements OnInit {

  name: string;
  email: string;
  address: Address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.name = 'Aldo Dall\'Aglio';
    this.email = 'aldo@daglio.org';
    this.address = {
      street: 'Offenbacher Str.',
      city: 'Berlin',
      state: 'Germany'
    };
    this.hobbies = ['Music', 'Climbing'];
    this.showHobbies = false;


    // this returns an Observable
    this.dataService.getPosts().subscribe(posts => {
      this.posts = posts;
    });

  }





  toggleHobbies() {
    this.showHobbies = this.showHobbies === false;

  }

  addHobby(hobby: string) {
    this.hobbies.push(hobby);
  }

  deleteHobby(i: number) {
    this.hobbies.splice(i, 1);
  }


}



interface Address {
  street: string;
  city: string;
  state: string;
}


interface Post {
  id: number;
  title: string;
  body: string;
}
