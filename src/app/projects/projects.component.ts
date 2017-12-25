import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  modal1: boolean = false;

  constructor() { }


  ngOnInit() {
    console.log("projects init")
  }

  showModal1() {
    this.modal1 = true;
    console.log("asdfasdf", this.modal1);
  }

}
