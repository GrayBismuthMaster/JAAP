import { Component, OnInit } from '@angular/core';
import { viewerType } from 'ngx-doc-viewer';

@Component({
  selector: 'app-sensibilizacionseis',
  templateUrl: './sensibilizacionseis.component.html',
  styleUrls: ['./sensibilizacionseis.component.css']
})
export class SensibilizacionseisComponent implements OnInit {

  selectedType = 'pptx'; //'docx';
  doc: string = 'https://files.fm/f/aa9zpa74z';
  doc2 : string = "https://files.fm/f/z6m5ddrkt";
  doc3 : string = "https://files.fm/f/vmpbjbbtt";
  doc4 : string = "https://files.fm/f/6txjqhszq";
  viewer: viewerType = 'url'; // The viewerType value you want to use
  constructor() { }

  ngOnInit(): void {
  }

}
