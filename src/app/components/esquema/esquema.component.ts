import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esquema',
  templateUrl: './esquema.component.html',
  styleUrls: ['./esquema.component.css']
})
export class EsquemaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' });
  }

}
