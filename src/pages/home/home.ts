import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {FilterExamplePage} from '../filter-example/filter-example'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  filterExample = FilterExamplePage;

  pendingOperation: string = null
  result: number = 0
  display: string = "0"
  numberIsClicked: boolean = false
  periodIsClicked: boolean = false
  
  constructor(public navCtrl: NavController) {}

  private executeOp(){
      var operand = Number(this.display).valueOf()
        
      // Check if there is a pending operation
      switch(this.pendingOperation) {

        case "×":
          this.result *= operand
          break
        case "÷":
          this.result /= operand
          break        
        case "-":
          this.result -= operand
          break
        case "+":
          this.result += operand
          break
        case "√":
          this.result = Math.sqrt(operand)
          break
        case "π":
          this.result = Math.PI
          break
        case "%":
          this.result = operand / 100
          break
        default:
          this.result = operand
      }
      this.display = String(this.result)
      this.pendingOperation = null
      this.numberIsClicked = false
      this.periodIsClicked = false
    }
  
  // Click events button handlers
   click(event){
      var id = event.target.attributes.id

      if (!this.numberIsClicked) {
        if (id.nodeValue != "0"){
          if (id.nodeValue == ".") {
            this.display = "0."
            this.periodIsClicked = true
          } else {
            this.display = id.nodeValue
          }
          this.numberIsClicked = true
        } else {

        }

      } else {
        if (id.nodeValue == ".") {
          if (this.periodIsClicked) {
            return
          }
          this.periodIsClicked = true
        }
        this.display = this.display+id.nodeValue;
      }
    }
    
    operation(event) {
      this.executeOp()
      this.pendingOperation = event.target.attributes.id.nodeValue
    }

    unaryOperation(event) {
      this.pendingOperation = event.target.attributes.id.nodeValue
      this.executeOp()
    }

    show(event){
      this.executeOp()
      this.pendingOperation = null
    }

    /**
     * Clears the display and the stored computed values
     */
    allClear(event) {
      this.display = "0"
      this.result = 0
      this.numberIsClicked = false
      this.periodIsClicked = false
      this.pendingOperation = null
    }
}
