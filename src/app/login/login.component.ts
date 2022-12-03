import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event:any){
    console.log("picture",event.target.files[0]);
  }

  onFileSelectedMovie(event:any){
    console.log("movie",event.target.files[0]);
  }

}
