import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  country = 'ENG';
  path = 'assets/united-kingdom.png';
  countryArray = [
    { path: 'assets/united-kingdom.png', country: 'ENG' },
    // { path: 'assets/united-states.png', country: 'US' },
    { path: 'assets/china.png', country: 'CHI' },
  ];
  btnchange(c: { path: string; country: string }) {
    this.country = c.country;
    this.path = c.path;
    console.log('success');
  }
}
