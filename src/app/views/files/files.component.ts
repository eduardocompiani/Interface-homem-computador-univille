import { Component, OnInit } from '@angular/core';
import { files } from '../../data/files.js';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  public files = files;

  constructor() { }

  ngOnInit() {
  }

}
