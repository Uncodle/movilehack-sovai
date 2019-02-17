import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { CardapioPage } from './cardapio';

@NgModule({
  declarations: [
    CardapioPage,
  ],
  imports: [
    IonicPageModule.forChild(CardapioPage),
    TranslateModule.forChild()
  ],
  exports: [
    CardapioPage
  ]
})
export class CardapioPageModule { }
