import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public logo = `assets/dananzLogo.svg`;
  public socials = [
    'assets/icon/facebook.png',
     'assets/icon/instagram.png',
     'assets/icon/tiktok.png',
     'assets/icon/youtube.png',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
