import { Component, OnInit } from '@angular/core';
import { viewerType } from 'ngx-doc-viewer';

@Component({
  selector: 'app-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  styleUrls: ['./doc-viewer.component.css']
})
export class DocViewerComponent implements OnInit {

  selectedType = 'pptx'; //'docx';
  // doc = 'https://file-examples.com/wp-content/uploads/2017/02/file-sample_100kB.docx';\
  //doc = 'https://files.fm/down.php?i=sdymh2y6';

  // https://github.com/guigrpa/docx-templates#readme
  doc: string = 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjdouyVlrSAAxVpLUQIHcbIB2sQFnoECBsQAQ&url=https%3A%2F%2Fusmp.edu.pe%2Frecursoshumanos%2Fcapacitacion%2Ffiles%2Fsesion6-10.pptx&usg=AOvVaw1Skbfun7wIF3WM2vbWIGZi&opi=89978449';// The URL of the document you want to display
  viewer: viewerType = 'google';; // The viewerType value you want to use

  constructor() {
  }
  ngOnInit() {
  }

}