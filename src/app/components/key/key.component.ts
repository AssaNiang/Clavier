import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent {
  @Input() itemkey!:string;
  
  @Output() newItemEvent= new EventEmitter<string>(); 
  addNewItemKEY(valuekey:string){
    this.newItemEvent.emit(valuekey);
  }
  
}
