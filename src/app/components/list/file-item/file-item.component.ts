import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.css']
})
export class FileItemComponent implements OnInit {

  @Input() file: any;

  constructor() { }

  ngOnInit() {
  }

}
