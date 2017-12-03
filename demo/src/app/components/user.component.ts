import {Component} from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostService]
})
export class UserComponent {

  name: string;
  email: string;
  address: Address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];


  constructor(private postService: PostService) {
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
    this.postService.getPosts().subscribe(posts => {
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
