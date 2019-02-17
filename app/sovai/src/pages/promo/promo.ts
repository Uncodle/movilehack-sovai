import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-promo',
  templateUrl: 'promo.html'
})
export class PromoPage {
 

  constructor(public navCtrl: NavController) { }
  qtd: number = 0;
  qtd2: number = 0;
  qtd3: number = 0;
  qtd4: number = 0;
  qtd5: number = 0;

  total: number = 0;

  mais(){
    this.qtd++;
    this.total = ((this.qtd * 3) + (this.qtd2 * 10) + (this.qtd3 * 8) + (this.qtd4 * 13) + (this.qtd5 * 12));
  }
  menos(){
    if(this.qtd == 0){
      return;
    }
    this.qtd--;
    this.total = ((this.qtd * 3) + (this.qtd2 * 10) + (this.qtd3 * 8) + (this.qtd4 * 13) + (this.qtd5 * 12));
  }

  mais2(){
    this.qtd2++;
    this.total = ((this.qtd * 3) + (this.qtd2 * 10) + (this.qtd3 * 8) + (this.qtd4 * 13) + (this.qtd5 * 12));
  }
  menos2(){
    if(this.qtd2 == 0){
      return;
    }
    this.qtd2--;
    this.total = ((this.qtd * 3) + (this.qtd2 * 10) + (this.qtd3 * 8) + (this.qtd4 * 13) + (this.qtd5 * 12));
  }

  mais3(){
    this.qtd3++;
    this.total = ((this.qtd * 3) + (this.qtd2 * 10) + (this.qtd3 * 8) + (this.qtd4 * 13) + (this.qtd5 * 12));
  }
  menos3(){
    if(this.qtd3 == 0){
      return;
    }
    this.qtd3--;
    this.total = ((this.qtd * 3) + (this.qtd2 * 10) + (this.qtd3 * 8) + (this.qtd4 * 13) + (this.qtd5 * 12));
  }

  mais4(){
    this.qtd4++;
    this.total = ((this.qtd * 3) + (this.qtd2 * 10) + (this.qtd3 * 8) + (this.qtd4 * 13) + (this.qtd5 * 12));
  }
  menos4(){
    if(this.qtd4 == 0){
      return;
    }
    this.qtd4--;
    this.total = ((this.qtd * 3) + (this.qtd2 * 10) + (this.qtd3 * 8) + (this.qtd4 * 13) + (this.qtd5 * 12));
  }

  mais5(){
    this.qtd5++;
    this.total = ((this.qtd * 3) + (this.qtd2 * 10) + (this.qtd3 * 8) + (this.qtd4 * 13) + (this.qtd5 * 12));
  }
  menos5(){
    if(this.qtd5 == 0){
      return;
    }
    this.qtd5--;
    this.total = ((this.qtd * 3) + (this.qtd2 * 10) + (this.qtd3 * 8) + (this.qtd4 * 13) + (this.qtd5 * 12));
  }
}
