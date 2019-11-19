import { Component, OnInit } from '@angular/core';
import { projects } from '../../data/projects.js';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {

  public projects = projects;
  
  constructor() { }

  ngOnInit() {
  }

}
