import {Component} from '@angular/core'

@Component({
    selector:'server-section',
    templateUrl:'./server.component.html',
    styleUrls:['./server.component.css']
})
export class ServerComponent {
    username = 'Karthik';
activateAdd=false;
constructor() {
   // setTimeout(() => {
      //this.activateAddServer = true;  
   // }, 3000);
}

enableAdd() {
    this.activateAdd = false;
}
addUsername() {
this.username = "";
this.activateAdd = true;
}
}