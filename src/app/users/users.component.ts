import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    this.setMetaTags();
  }
  setMetaTags() {
    this.titleService.setTitle('Prueba Seo');

    // Set meta tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'keywords',
      content: 'inmobiliaria,renta,venta'
    });
    this.meta.updateTag({
      name: 'description',
      content:
        'Inmobiliaria Cobian Venta y renta de casas en Puebla. inmobiliariacobian@gmail.com. Bienvenidos a Inmobiliaria Cobian.'
    });
    // ... and so on
  }
}
