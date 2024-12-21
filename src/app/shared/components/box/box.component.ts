import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

   //Structural Directives
  //  to hide box using ngClass 
    isShow : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  // onHideShow(){
  //   this.isShow = !this.isShow
  // }

}
