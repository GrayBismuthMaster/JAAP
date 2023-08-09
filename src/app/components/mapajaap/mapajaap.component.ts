import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapajaap',
  templateUrl: './mapajaap.component.html',
  styleUrls: ['./mapajaap.component.css']
})

export class MapaJaapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' });
  }

}
