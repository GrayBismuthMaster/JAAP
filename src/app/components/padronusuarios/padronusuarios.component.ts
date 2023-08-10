import { Component, OnInit } from '@angular/core';
import { viewerType } from 'ngx-doc-viewer';

@Component({
  selector: 'app-padronusuarios',
  templateUrl: './padronusuarios.component.html',
  styleUrls: ['./padronusuarios.component.css']
})
export class PadronusuariosComponent implements OnInit {
  selectedType = 'pptx'; //'docx';
  viewer: viewerType = 'url'; 
  doc: string = 'https://files.fm/f/zga74ucc2';
  doc2 : string = 'https://files.fm/f/w6ye24bzd'; // belisario quevedo
  doc3 : string = 'https://files.fm/f/qyccbxup4'; // brazales
  doc4 : string = 'https://files.fm/f/m9kck8r3h'; // chisalo de toacaso
  doc5 : string = 'https://files.fm/f/4qekmwbh3'; // chitan alaquez
  doc6 : string = 'https://files.fm/f/9ax763eyx';
  doc7 : string = 'https://files.fm/f/erm5kgh9s';
  doc8 : string = 'https://files.fm/f/un69zfnsb';
  doc9 : string = 'https://files.fm/f/cd7kmmnr2';
  doc10 : string = 'https://files.fm/f/7mr4s3n3j';
  doc11 : string = 'https://files.fm/f/cvtse53f5';
  doc12 : string = 'https://files.fm/f/9te7mg68m';
  doc13 : string = 'https://files.fm/f/bzzh9v78f';
  doc14 : string = 'https://files.fm/f/99sf5gbce';
  doc15 : string = 'https://files.fm/f/nqy2m5vyt';
  doc16 : string = 'https://files.fm/f/f5mkhjzjx';
  doc17 : string = 'https://files.fm/f/ber5vdv64';
  doc18 : string = 'https://files.fm/f/epy78fr9r';
  doc19 : string = 'https://files.fm/f/brjsndxn4';
  doc20 : string = 'https://files.fm/f/4a9g2epnr';
  doc21 : string = 'https://files.fm/f/jq82q7hpy';
  doc22 : string = 'https://files.fm/f/ezs66k668';
  doc23 : string = 'https://files.fm/f/fdzaep3g6';
  doc24 : string = 'https://files.fm/f/728cws7vt';
  doc25 : string = 'https://files.fm/f/dpckzpfqu';
  doc26 : string = 'https://files.fm/f/4yrrr95un';
  doc27 : string = 'https://files.fm/f/xac62b64a';
  doc28 : string = 'https://files.fm/f/zv7fvs73d'; // PATUTAN
  doc29 : string = 'https://files.fm/f/unk8zppaj'; // PILACOTO
  doc30 : string = 'https://files.fm/f/r5kbvk3yy'; // PILACUMBI
  doc31 : string = 'https://files.fm/f/4k5nqhfze'; // REGIONAL ORIENTE
  doc32 : string = 'https://files.fm/f/hdeybpxyu'; // REGIONAL RIO BLANCO
  doc33 : string = 'https://files.fm/f/7gq7wgtj7'; // REGIONAL SAN PEDRO
  doc34 : string = 'https://files.fm/f/bnd36zekg'; // SAN AGUSTION DE CALLO 
  doc35 : string = 'https://files.fm/f/st8jwtmrg'; // SAN BUENAVENTURA
  doc36 : string = 'https://files.fm/f/mxkmewj23'; // SAN FRANCISCO DE QUISHUAR
  doc37 : string = 'https://files.fm/f/5m78pe2bq'; // SAN FRANCISCO DEL CHASQUI
  doc38 : string = 'https://files.fm/f/vm9mxxxx9'; // SAN FRANCSISCO 
  doc39 : string = 'https://files.fm/f/xryggg8fv'; // SAN JOSÉ DE POALÓ
  doc40 : string = 'https://files.fm/f/d4cqfh9wc'; // SNA JUAN DE POMERILLOS
  doc41 : string = 'https://files.fm/f/adh8fmmp4'; // SAN JUAN SARAPAMBA
  doc42 : string = 'https://files.fm/f/sazz2kvvv'; // SAN LUIS DE YACUPUMBO
  doc43 : string = 'https://files.fm/f/8ekzk3kqm'; // SAN MIGUEL CUCHUCO ALTO
  doc44 : string = 'https://files.fm/f/7kwwatf5q'; // SAN PABLO DE TENERIA, LAS PLAYAS Y PALO ALTO
  doc45 : string = 'https://files.fm/f/6pgxuracx'; // SAN VICENTE DE LUTO 
  doc46 : string = 'https://files.fm/f/b3j2raan9'; // SANTA ROSA DE PICHUL
  doc47 : string = 'https://files.fm/f/jcg6zdqf4'; // Samana
  doc48 : string = 'https://files.fm/f/n5squ3ch3'; // SEIS BARRIOS FACE
  doc49 : string = 'https://files.fm/f/xamfbfub8'; // TAÑALO
  doc50 : string = 'https://files.fm/f/6pxtmwzyg'; // TOACASO
  doc51 : string = 'https://files.fm/f/dm64nkh7q'; // UNABANA PALOPO
  doc52 : string = 'https://files.fm/f/hvjzus69c'; // WINTZA
  doc53 : string = 'https://files.fm/f/znzy7xpqc'; // ZUMBALICA

  constructor() { }

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' });
  }

}
