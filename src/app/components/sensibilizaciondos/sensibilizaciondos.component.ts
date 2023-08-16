import { Component, OnInit } from '@angular/core';
import { viewerType } from 'ngx-doc-viewer';

@Component({
  selector: 'app-sensibilizaciondos',
  templateUrl: './sensibilizaciondos.component.html',
  styleUrls: ['./sensibilizaciondos.component.css']
})
export class SensibilizaciondosComponent implements OnInit {
  
  selectedType = 'pptx'; //'docx';
  doc: string = 'https://files.fm/f/njd55z8f9';// The URL of the document you want to display
  doc2: string = 'https://files.fm/f/tvs3t6bw7';
  viewer: viewerType = 'url'; // The viewerType value you want to use

  constructor() { }

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' });
  }

}
