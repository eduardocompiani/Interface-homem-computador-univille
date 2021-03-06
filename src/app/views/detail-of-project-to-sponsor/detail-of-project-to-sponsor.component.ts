import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { projects } from '../../data/projects.js';

@Component({
  selector: 'app-detail-of-project-to-sponsor',
  templateUrl: './detail-of-project-to-sponsor.component.html',
  styleUrls: ['./detail-of-project-to-sponsor.component.css']
})
export class DetailOfProjectToSponsorComponent implements OnInit {

  public project: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    let filter: Array<any> = projects.filter((proj: any) => proj.code == id);
    this.project = filter[0];
  }

}
