import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  country = 'Eng';
  path = 'assets/united-kingdom.png';
  countryArray = [
    { path: 'assets/united-kingdom.png', country: 'Eng' },
    // { path: 'assets/united-states.png', country: 'US' },
    { path: 'assets/china.png', country: 'Chi' },
  ];
  btnchange(c: { path: string; country: string }) {
    this.country = c.country;
    this.path = c.path;
    console.log('success');
  }
}
