import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planojunta',
  templateUrl: './planojunta.component.html',
  styleUrls: ['./planojunta.component.css']
})
export class PlanojuntaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' });
  }

}
