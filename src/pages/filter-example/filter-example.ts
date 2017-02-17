import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
                    - Division ('÷')"
  ];
  languages: string[] = ["English", "Cebuano"]
  language: number
  languageStrSelected = "English"
  instruction:string = this.instructions[this.languages.indexOf(this.languageStrSelected)]
  
  public sushi = new Array(
    { name: 'Cali Roll', fish: 'Crab', tastiness: 2 },
    { name: 'Philly', fish: 'Tuna', tastiness: 4 },
    { name: 'Tiger', fish: 'Eel', tastiness: 7 },
    { name: 'Rainbow', fish: 'Variety', tastiness: 6 }
  );
  public items;

  public sortType     = 'name'; // set the default sort type
  public sortReverse  = false;  // set the default sort order
  public searchFish   = '';     // set the default search/filter term
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = this.sushi
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterExamplePage');
  }

  //filter based on the input 
  filterItems(){
        this.items = this.sushi.filter((item) => {
            return item.name.toLowerCase().indexOf(this.searchFish.toLowerCase()) > -1;
        });     
 
    }

    showItem(){
      
    }

    setInstruction(value) {
        this.instructions[this.languages.indexOf(value)]
    }

}
