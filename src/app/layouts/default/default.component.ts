import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  openSideBar : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler(open : any){
    this.openSideBar = !this.openSideBar;
  }

}
