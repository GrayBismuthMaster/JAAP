import { Component, OnInit } from '@angular/core';
import { viewerType } from 'ngx-doc-viewer';

@Component({
  selector: 'app-sensibilizacionuno',
  templateUrl: './sensibilizacionuno.component.html',
  styleUrls: ['./sensibilizacionuno.component.css']
})
export class SensibilizacionunoComponent implements OnInit {
  selectedType = 'pptx'; //'docx';
  doc: string = 'https://files.fm/f/gd9pfjkwc';// The URL of the document you want to display
  doc2 : string = "https://files.fm/f/azrc66s23";
  viewer: viewerType = 'url'; // The viewerType value you want to use

  constructor() { }

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' });
  }

}
