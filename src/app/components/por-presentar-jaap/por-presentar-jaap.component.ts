import { Component, OnInit } from '@angular/core';
import { viewerType } from 'ngx-doc-viewer';

@Component({
  selector: 'app-por-presentar-jaap',
  templateUrl: './por-presentar-jaap.component.html',
  styleUrls: ['./por-presentar-jaap.component.css']
})
export class PorPresentarJaapComponent implements OnInit {
  selectedType = 'pptx'; //'docx';
  viewer: viewerType = 'url'; // The viewerType value you want to use
  doc: string = 'https://files.fm/f/bevm4r96c';
  doc2: string = 'https://files.fm/f/x4tas8hx4';
  doc3: string = 'https://files.fm/f/4g4f3zvzb';
  doc4: string = 'https://files.fm/f/fbcppkrw5';
  constructor() { }

  ngOnInit(): void {
  }

}
