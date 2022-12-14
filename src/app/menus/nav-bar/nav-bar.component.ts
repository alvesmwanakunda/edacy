import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  encapsulation:ViewEncapsulation.None,
  host:{class:'app-nav-bar'}
})
export class NavBarComponent implements OnInit {

  isMenuSize:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu(){

    if(this.isMenuSize){
      this.isMenuSize=false
    }else{
      this.isMenuSize=true
    }
  }

}
