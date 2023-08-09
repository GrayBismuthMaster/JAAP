import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapaafectacion',
  templateUrl: './mapaafectacion.component.html',
  styleUrls: ['./mapaafectacion.component.css']
})
export class MapaafectacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' });
  }

}
