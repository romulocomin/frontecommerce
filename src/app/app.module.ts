import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID    } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { CartComponent } from './cart/cart.component';
import { SharedModule } from './shared/shared.module';
import {LocationStrategy, HashLocationStrategy, registerLocaleData} from '@angular/common'
import localePt from '@angular/common/locales/pt';
import { CardProductComponent } from './card-product/card-product.component';
import { LoginComponent } from './login/login.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardProductComponent,
    CartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule.forRoot()
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
