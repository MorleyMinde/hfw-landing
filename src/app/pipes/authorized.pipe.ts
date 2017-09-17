import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authorized'
})
export class AuthorizedPipe implements PipeTransform {

  transform(value: any, user?: any): any {
    var authorized = [];
    value.forEach((app)=>{
      //if(["Dashboard","Pivot Table","Data Visualizer","GIS","Data Entry","Data Quality","","dhis-web-menu-management"].indexOf(app.displayName) == -1){
      if(["Messaging","Browser Cache Cleaner","Data Quality"].indexOf(app.displayName) > -1){
        let found = false;
        user.userCredentials.userRoles.forEach((userRole:any)=>{
          userRole.authorities.forEach((authority)=>{
            if((authority == "M_" + app.name || authority == "See " + app.name || authority == "ALL") && !found){
              authorized.push(app);
              found = true;
            }
          })
        })
      }
    })
    return authorized;
  }

}
