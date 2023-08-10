import { Component, OnInit } from '@angular/core';
import { viewerType } from 'ngx-doc-viewer';

@Component({
  selector: 'app-aprobados',
  templateUrl: './aprobados.component.html',
  styleUrls: ['./aprobados.component.css']
})
export class AprobadosComponent implements OnInit {
  selectedType = 'pptx'; //'docx';
  // doc = 'https://file-examples.com/wp-content/uploads/2017/02/file-sample_100kB.docx';\
  //doc = 'https://files.fm/down.php?i=sdymh2y6';

  // https://github.com/guigrpa/docx-templates#readme
  doc: string = 'https://files.fm/f/9acnuep73';// The URL of the document you want to display
  viewer: viewerType = 'url'; // The viewerType value you want to use
  doc2 : string = "https://files.fm/f/gcbtg2hnv";
  doc3 : string = "https://files.fm/f/zknm8fece";
  doc4 : string = "https://files.fm/f/sguttva8r";
  doc5 : string = "https://files.fm/f/zff7dy5s4";
  doc6 : string = "https://files.fm/f/ea6tsntdh";
  doc7 : string = "https://files.fm/f/q2m28r8yf";
  doc8 : string = "https://files.fm/f/nb2fy6s6a";
  doc9 : string = "https://files.fm/f/fe7bcywe4";
  constructor() { }

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' });
  }

}
