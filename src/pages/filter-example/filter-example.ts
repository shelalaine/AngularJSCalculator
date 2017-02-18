import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TranslateService} from 'ng2-translate';

/*
  Generated class for the FilterExample page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-filter-example',
  templateUrl: 'filter-example.html'
})
export class FilterExamplePage {

  public instructions = [
      "This calculator supports the following operations:\n \
                    - Addition ('+') \n \
                    - Subtraction ('-') \n \
                    - Multiplication ('x') \n \
                    - Division ('÷')"
      ,
      "Kani nga calculator nag suporta sa aning mga operasyon:\n\
                    - Addition ('+') \n \
                    - Subtraction ('-') \n \
                    - Multiplication ('x') \n \
                    - Division ('÷')",


  ];
  languages: string[] = ["en", "ceb"]
  language: number
  languageStrSelected = "en"
  instruction:string = this.instructions[this.languages.indexOf(this.languageStrSelected)]
  translate: TranslateService
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              translate:TranslateService) {
                
                this.translate = translate
                translate.setDefaultLang('en')
              }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterExamplePage');
  }

  setInstruction(value) {
      // this.instruction = this.instructions[this.languages.indexOf(value)]
      this.translate.setDefaultLang(value)
  }

}
