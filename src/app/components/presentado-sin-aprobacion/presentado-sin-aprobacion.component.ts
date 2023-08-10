import { Component, OnInit } from '@angular/core';
import { viewerType } from 'ngx-doc-viewer';

@Component({
  selector: 'app-presentado-sin-aprobacion',
  templateUrl: './presentado-sin-aprobacion.component.html',
  styleUrls: ['./presentado-sin-aprobacion.component.css']
})
export class PresentadoSinAprobacionComponent implements OnInit {

  selectedType = 'pptx'; //'docx';
  // doc = 'https://file-examples.com/wp-content/uploads/2017/02/file-sample_100kB.docx';\
  //doc = 'https://files.fm/down.php?i=sdymh2y6';

  // https://github.com/guigrpa/docx-templates#readme
 viewer: viewerType = 'url'; // The viewerType value you want to use
 doc: string = 'https://files.fm/f/8ssbmvphz';
 doc2: string = 'https://files.fm/f/a8tnk975z';
 doc3: string = 'https://files.fm/f/s8xa8fq3y';
 doc4: string = 'https://files.fm/f/b6bag228g';
 doc5: string = 'https://files.fm/f/59u2hav7j';
 doc6: string = 'https://files.fm/f/8x2arvzgq';
 doc7: string = 'https://files.fm/f/7ptjwpeaw';
 doc8: string = 'https://files.fm/f/azujq72f9';
 doc9: string = 'https://files.fm/f/m3t8kvs4k';
 doc10: string = 'https://files.fm/f/25asm7vp7';
 doc11: string = 'https://files.fm/f/55q52nzgx';
 doc12 : string = 'https://files.fm/f/aqrxacavd';
 doc13 : string = 'https://files.fm/f/wuhskfa4n';
 doc14 : string = 'https://files.fm/f/g7rj728qm';
 doc15 : string = 'https://files.fm/f/2gue7hzhz';
 doc16 : string = 'https://files.fm/f/3fadvzm8r';
 doc17 : string = 'https://files.fm/f/tpt2xmmk3';
  constructor() { }

  ngOnInit(): void {
  }

}
