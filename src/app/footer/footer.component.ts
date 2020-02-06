import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  footerNav = [
    {href: '#', title: 'О сервисе'},
    {href: '#', title: 'Договор'},
    {href: '#', title: 'Тарифы'},
    {href: '#', title: 'Оплата'},
    {href: '#', title: 'Базы'},
    {href: '#', title: 'Справка'},
    {href: '#', title: 'Smeta.RU'},
    {href: '#', title: 'Нормонавигатор'},
    {href: '#', title: 'Смета НЦС'},
  ];
}
