import { Component, LOCALE_ID, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { DecimalPipe, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet
              , HeaderComponent
              , FooterComponent
              , DecimalPipe
              , NgxMaskDirective
              , NgxMaskPipe]
})

export class AppComponent {
  title = 'avaliacao-angular';



   constructor()
  {
  console.log('Iniciando o Construtor')
  }

  ngOnInit()
  {
    console.log('Iniciando o OnInit')
  }

}

