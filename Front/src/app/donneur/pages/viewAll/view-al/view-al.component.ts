import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';

import { Post } from './../../servicePost/post.service';
import { PostUser } from '../../../../models/PostUser';

@Component({
  selector: 'app-view-al',
  templateUrl: './view-al.component.html',
  styleUrls: ['./view-al.component.scss']
})
export class ViewAlComponent implements OnInit {
  allPosts: PostUser[] = [];

  constructor(
    private postService: Post,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe(
      (res: PostUser[]) => {
        console.log(res);
        this.allPosts = res;
      },
      error => {
        this.snackBar.open('Something went wrong while fetching posts!', 'OK');
      }
    );
  }
}

