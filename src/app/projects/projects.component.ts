import { Component, OnInit } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';

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


}
