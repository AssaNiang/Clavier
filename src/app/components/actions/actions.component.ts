import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent {
@Output()removeEvent= new EventEmitter<string>();
addRemove(value:string){
  this.removeEvent.emit(value);
}
@Output() resetEvent=new EventEmitter<string>();
addReset(value:string){
  this.resetEvent.emit(value);
}
@Output()checkEvent= new EventEmitter<string>();
addCheck(value:string){
  this.checkEvent.emit(value);
}
}
