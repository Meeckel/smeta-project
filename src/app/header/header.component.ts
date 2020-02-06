import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  logoSrc = '../../assets/images/n_logo.png';

  headerNav = [
    {href: '#', title: 'О сервисе'},
    {href: '#', title: 'Договор'},
    {href: '#', title: 'Тарифы'},
    {href: '#', title: 'Оплата'},
    {href: '#', title: 'Базы'},
    {href: '#', title: 'Справка'},
  ];
}
