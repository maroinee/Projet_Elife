import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from '../../servicePost/comment.service';
import { PostUser } from '../../../../models/PostUser';
import { AuthService } from '../../../../basic/services/auth/auth.service';
import { Post } from '../../servicePost/post.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  postId: number;
  postData: PostUser | null = null;
  comments: any[] = [];
  commentForm: FormGroup;
  currentUser: any;

  constructor(
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private postService:  Post 
  ) {
    this.postId = +this.activatedRoute.snapshot.params['id']; // Assurez-vous que postId est un nombre
    this.commentForm = this.fb.group({
      postedBy: [{ value: '', disabled: true }, Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getPostById();
    this.getCommentsByPost();
    this.currentUser = this.authService.getCurrentUser();
    this.commentForm.patchValue({ postedBy: this.currentUser.name });
  }

  getPostById() {
    this.postService.getPostById(this.postId).subscribe(
      (res: PostUser) => {
        this.postData = res;
      },
      error => {
        this.snackBar.open('Error fetching post', 'OK');
      }
    );
  }

  getCommentsByPost() {
    this.commentService.getCommentsByPostId(this.postId).subscribe(
      (res: any[]) => {
        this.comments = res;
      },
      error => {
        this.snackBar.open('Error fetching comments', 'OK');
      }
    );
  }

  likePost() {
    this.postService.likePost(this.postId).subscribe(
      () => {
        this.snackBar.open('Post liked successfully', 'OK');
        this.getPostById();
      },
      error => {
        this.snackBar.open('Error liking post', 'OK');
      }
    );
  }

  publishComment() {
    if (this.commentForm.valid) {
      const { content } = this.commentForm.value;
      this.commentService.createComment(this.postId, content).subscribe(
        () => {
          this.snackBar.open('Comment published successfully', 'OK');
          this.getCommentsByPost();
          this.commentForm.reset();
          this.commentForm.patchValue({ postedBy: this.currentUser.name });
        },
        error => {
          this.snackBar.open('Error publishing comment', 'OK');
        }
      );
    } else {
      this.snackBar.open('Please enter a comment', 'OK');
    }
  }
}
