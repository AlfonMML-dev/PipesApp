import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

import { FieldsetModule } from 'primeng/fieldset';


//Cambiar el locale de la app
import localeEsHN from '@angular/common/locales/es-HN';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData( localeEsHN );
registerLocaleData( localeFr );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,   
    AppRouterModule,
    SharedModule,
    VentasModule,
    FieldsetModule 
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-HN'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
