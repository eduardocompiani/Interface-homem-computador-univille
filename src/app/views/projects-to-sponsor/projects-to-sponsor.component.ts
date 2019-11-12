import { Component, OnInit } from '@angular/core';
import { projects } from '../../data/projects.js';

@Component({
  selector: 'app-projects-to-sponsor',
  templateUrl: './projects-to-sponsor.component.html',
  styleUrls: ['./projects-to-sponsor.component.css']
})
export class ProjectsToSponsorComponent implements OnInit {

  public projects = projects;
  
  constructor() { }

  ngOnInit() {
  }

}
