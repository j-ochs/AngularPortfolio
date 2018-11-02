import { Component, Input } from '@angular/core';

@Component({
    selector: 'project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.css']
  })
  export class ProjectCardComponent {

    // TODO: import all text and src links from external translations file
    @Input() public title: string;
    @Input() public description: string;
    @Input() public date: String; // TODO: ISO date (YYYY-MM)
    @Input() public imageSrc: string;

    constructor() {}

}
