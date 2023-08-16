import { Component, OnInit } from '@angular/core';
import { viewerType } from 'ngx-doc-viewer';

@Component({
  selector: 'app-sensibilizacionsiete',
  templateUrl: './sensibilizacionsiete.component.html',
  styleUrls: ['./sensibilizacionsiete.component.css']
})
export class SensibilizacionsieteComponent implements OnInit {

  selectedType = 'pptx'; //'docx';
  doc: string = 'https://files.fm/f/4kac39sq9';
  doc2 : string = "https://files.fm/f/g89strwmg";
  viewer: viewerType = 'url'; // The viewerType value you want to use
  constructor() { }

  ngOnInit(): void {
  }


}
