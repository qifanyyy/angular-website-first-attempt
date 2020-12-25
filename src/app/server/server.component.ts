import {Component} from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent{
  serverStatus = 'OFFLINE';
  buttonClicked = false;
  Log = [];
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'OFFLINE' : 'ONLINE';
  }
  // tslint:disable-next-line:typedef
  getServerStatus(){
    return this.serverStatus;
  }
  // tslint:disable-next-line:typedef
  onGetColor(){
      return this.serverStatus === 'ONLINE' ? 'green' : 'blue';
  }
  // tslint:disable-next-line:typedef
  onGetTextColor(){
    if (this.serverStatus === 'OFFLINE'){
      return 'lightpink';
    }
  }
  // tslint:disable-next-line:typedef
  LogItem: any;
  onToggleDisplay(){
    this.buttonClicked = !this.buttonClicked;
    this.Log.push(this.Log.length + 1);
  }
}
