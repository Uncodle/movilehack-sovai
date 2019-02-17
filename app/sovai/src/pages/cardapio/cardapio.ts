import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cardapio',
  templateUrl: 'cardapio.html'
})
export class CardapioPage {

  constructor(public navCtrl: NavController) { }

  openPromo() {
    this.navCtrl.push('PromoPage');
  }

  openComida( ) {
    this.navCtrl.push('CardapioPage');
  }

  openBebida() {
    this.navCtrl.push('CardapioPage');
  }

  openCombo() {
    this.navCtrl.push('CardapioPage');
  }
}
