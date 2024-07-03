import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../servicePost/post.service';
import { PostUser } from '../../../models/PostUser';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private fb: FormBuilder, private postService: Post, private router: Router) {
    this.postForm = this.fb.group({
      name: ['', Validators.required],
      lieux: ['', Validators.required],
      tlf: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      content: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Vous pouvez écouter les changements dans les champs du formulaire si nécessaire
    this.postForm.valueChanges.subscribe((value) => {
      console.log('Form value changed:', value);
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      const formData = this.postForm.value;
  
      const newPost: PostUser = {
        id: 0, // ou null, selon ce que votre backend attend
        name: formData.name,
        content: formData.content,
        lieux: formData.lieux,
        email: formData.email,
        postedby: 'Anonymous',
        date: new Date(),
        likeCount: 0,
        viewCount: 0,
        tags: []
      };
      
      this.postService.createPost(newPost).subscribe(
        (response: PostUser) => {
          console.log('Post created successfully', response);
          this.postForm.reset();
          this.router.navigate(['/view-al']);
        },
        error => {
          console.error('Error creating post', error);
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }
}
