import { outputAst } from '@angular/compiler';
import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  code: string[] = [];
  // code: string = "";
  keyboard: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  addnewKEY(newkey: string) {
    this.code.push(newkey)

  }
  addRemove() {
    this.code.pop();
    console.log(this.code);
  }
  addReset() {
    this.code = [];
  }
  addCheck() {
  // return this.code =["A","S","S","A"] ?alert("bien joué"): alert("essaye encore");
  }
}
