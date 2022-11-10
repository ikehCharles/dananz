import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

public images:string[] = [
  'assets/sample1.png',
  'assets/sample2.png',
  'assets/sample3.svg',
  'assets/sample4.png',
  'assets/sample5.png',
]

  constructor() { }

  ngOnInit(): void {
  }

}
