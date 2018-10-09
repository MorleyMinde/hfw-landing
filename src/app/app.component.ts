import { Component } from '@angular/core';
import {Response, Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(
    private http: Http
  ) {
  }

  apps;
  user;
  level;
  ngOnInit() {
    this.http.get("../../../api/me.json?fields=name,userCredentials[userRoles[*]],organisationUnits[level],userGroups[id]").subscribe((results)=>{
      this.user = results.json();
      var redirected = true;
      //var redirected = false;
      this.user.organisationUnits.forEach((organisationUnit:any)=>{
        this.level = organisationUnit.level;
        //if((organisationUnit.level == 2 || organisationUnit.level == 3))
        {
          this.user.userGroups.forEach((userGroup:any)=>{
            if(userGroup.id == "fxyLXZ10TXC"){
              redirected = false;
            }
          })
          /*this.user.userCredentials.userRoles.forEach((userRole:any)=>{

          })*/
        }
      })
      if(!redirected){
        this.http.get("../../../dhis-web-commons/menu/getModules.action").subscribe((results)=>{
          this.apps = results.json().modules;
        })
      }else{
        window.location.href = "../../../dhis-web-dashboard-integration/index.action"
      }
    })
  }
  openUrl(app){
    window.location.href = app.defaultAction;
  }
}
