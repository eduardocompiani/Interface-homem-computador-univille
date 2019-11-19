import { Component, OnInit } from '@angular/core';
import { sponsors } from '../../data/sponsors';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {

  public sponsors = sponsors;

  constructor() { }

  ngOnInit() {
  }

}
