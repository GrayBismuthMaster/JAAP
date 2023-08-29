import { Component, OnInit } from '@angular/core';
import { viewerType } from 'ngx-doc-viewer';

@Component({
  selector: 'app-plan-contingencia',
  templateUrl: './plan-contingencia.component.html',
  styleUrls: ['./plan-contingencia.component.css']
})
export class PlanContingenciaComponent implements OnInit {

  selectedType = 'pptx'; //'docx';
  viewer: viewerType = 'url'; 
  doc: string = "https://files.fm/f/n8cdsjqu9";
  constructor() { }

  ngOnInit(): void {
  }

}
