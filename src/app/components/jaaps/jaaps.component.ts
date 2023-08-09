import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jaaps',
  templateUrl: './jaaps.component.html',
  styleUrls: ['./jaaps.component.css']
})
export class JaapsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' });
  }

}
