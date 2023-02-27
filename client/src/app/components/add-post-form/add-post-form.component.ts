import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiClientService } from 'src/app/services/api-client/api-client.service';

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrls: ['./add-post-form.component.css']
})
export class AddPostFormComponent {

  addPostForm = this.fb.group({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    fileUpload: new FormControl(),
  })

  constructor (private fb: FormBuilder, private api: ApiClientService) {}

  handleSubmit () {
    if (this.addPostForm.valid) {
      this.api.postFiles(this.addPostForm.value.fileUpload).subscribe({
        next: res => {
          const { title, description } = this.addPostForm.value;
          this.api.addNewPost(title!, description!, res.fileNames).subscribe({
            next: res => {
              this.addPostForm.reset();
            }
          })
        }
      })
    }
  }
}
