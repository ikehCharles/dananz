import { Component, OnInit } from '@angular/core';
import { SiteNav } from 'src/app/models/common';
import { Nav } from './menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public logo = `assets/dananzLogo.svg`

  public siteNav:SiteNav[] = Nav;

  public menuShown:boolean = false

  constructor() { }

  public goTo(param:string){
    console.warn(param);

    
  }

  public showNav(){
    this.menuShown = !this.menuShown;
  }

  ngOnInit(): void {
  }

}
