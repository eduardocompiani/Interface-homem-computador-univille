import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sponsor-item',
  templateUrl: './sponsor-item.component.html',
  styleUrls: ['./sponsor-item.component.css']
})
export class SponsorItemComponent implements OnInit {

  @Input() sponsor: any;
  
  constructor() { }

  ngOnInit() {
  }

}
