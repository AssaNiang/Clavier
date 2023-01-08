import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent {
  
@Output()removeEvent= new EventEmitter<string>();
addRemove(){
  this.removeEvent.emit();
}
@Output() resetEvent=new EventEmitter<string>();
addReset(){
  this.resetEvent.emit();
}
@Output()checkEvent= new EventEmitter<string>();
addCheck(){
  this.checkEvent.emit();
}
}
