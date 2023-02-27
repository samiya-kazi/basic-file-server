import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { ApiClientService } from 'src/app/services/api-client/api-client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts : Post[] = [];

  constructor (private api: ApiClientService) {}

  ngOnInit(): void {
    this.api.getPosts().subscribe({
      next: posts => this.posts = posts
    })
  }
}
