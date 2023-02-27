import { Component, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { saveAs } from 'file-saver';
import { ApiClientService } from 'src/app/services/api-client/api-client.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  @Input() post!: Post;
  rootUrl = 'http://localhost:4000/file/'

  constructor (private api: ApiClientService) {}

  handleDownload (fileName: string) {
    this.api.getFile(fileName).subscribe(data => saveAs(data, fileName));
  }
}
