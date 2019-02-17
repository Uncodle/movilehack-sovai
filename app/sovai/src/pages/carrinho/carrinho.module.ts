import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { CarrinhoPage } from './carrinho';

@NgModule({
  declarations: [
    CarrinhoPage,
  ],
  imports: [
    IonicPageModule.forChild(CarrinhoPage),
    TranslateModule.forChild()
  ],
  exports: [
    CarrinhoPage
  ]
})
export class CarrinhoPageModule { }
