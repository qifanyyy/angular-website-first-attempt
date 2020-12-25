import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverid = 10;
  serverstatus = '???/????';
  serverName = '';
  userName = '';
  serverifCreated = 'server is not created';
  allowNewServer = false;
  servers = ['Testserver', 'Testserver 2'];
  constructor() {
    setTimeout(() => {this.allowNewServer = true; },  200);
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  getServerStatus(){
    return this.serverstatus;
  }
  // tslint:disable-next-line:typedef
  onCreateServer(){
    document.getElementById('first').innerHTML += '<br />' + this.serverifCreated;
    this.serverifCreated = 'server is creared';
  }
  // tslint:disable-next-line:typedef
  onUpdateServe(event: Event){
    console.log(event);
    this.allowNewServer = true;
    this.servers.push(this.serverName);
    this.serverName = ( event.target as HTMLInputElement).value;
  }
  // tslint:disable-next-line:typedef
  onUsername(){
    return this.userName;
  }

}
