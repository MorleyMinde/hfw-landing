import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isRole'
})
export class IsRolePipe implements PipeTransform {

  transform(user: any, id): any {
    let retValue = false;
    user.userCredentials.userRoles.forEach((userRole)=>{
      if(userRole.id == id){
        retValue = true;
      }
    })
    return retValue;
  }

}
