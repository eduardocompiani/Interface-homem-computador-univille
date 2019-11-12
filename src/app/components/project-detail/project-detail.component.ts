import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  @Input() project: any = {
    code: 0,
    name: "",
    author: "",
    price: "",
    place: "",
    projectDate: "",
    locked: false,
    description: ""
  };

  constructor() { }

  ngOnInit() {
  }

}
