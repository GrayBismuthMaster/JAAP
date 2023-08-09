import { Component, OnInit } from '@angular/core';
import { viewerType } from 'ngx-doc-viewer';

@Component({
  selector: 'app-sensibilizacionuno',
  templateUrl: './sensibilizacionuno.component.html',
  styleUrls: ['./sensibilizacionuno.component.css']
})
export class SensibilizacionunoComponent implements OnInit {
  selectedType = 'pptx'; //'docx';
  // doc = 'https://file-examples.com/wp-content/uploads/2017/02/file-sample_100kB.docx';\
  //doc = 'https://files.fm/down.php?i=sdymh2y6';

  // https://github.com/guigrpa/docx-templates#readme
  doc: string = 'https://files.fm/f/gd9pfjkwc';// The URL of the document you want to display
  viewer: viewerType = 'url'; // The viewerType value you want to use

  constructor() { }

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' });
  }

}
