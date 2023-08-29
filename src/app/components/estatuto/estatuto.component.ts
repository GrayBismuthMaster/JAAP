import { Component, OnInit } from '@angular/core';
import { viewerType } from 'ngx-doc-viewer';

@Component({
  selector: 'app-estatuto',
  templateUrl: './estatuto.component.html',
  styleUrls: ['./estatuto.component.css']
})
export class EstatutoComponent implements OnInit {

  selectedType = 'pptx'; //'docx';
  viewer: viewerType = 'url'; 
  doc: string = "https://files.fm/f/ucb9n6e6q";
  doc2 : string = "https://files.fm/f/9jjgdguan";
  
  constructor() { }

  ngOnInit(): void {
  }

}
