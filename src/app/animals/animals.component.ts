import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
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
      content: 'Segunda pagina'
    });
    // ... and so on
  }
}
