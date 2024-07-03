import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Post } from '../servicePost/post.service';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchByNameComponent {
  result:any=[];
  lieux:any="";

  constructor(private postService:Post,
    private snackBar:  MatSnackBar
  ){}

  searchByName(){
    this.postService.searchByLieux(this.lieux ).subscribe(res=>{
      this.result=res;
      console.log(this.result);
      
    },error=>{
      this.snackBar.open("Something went wrong !!!","ok")
    })

  }

}
