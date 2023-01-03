import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(restuarants:any[],filterString:string,propName:string) {
    const result:any=[];
    if(!restuarants || filterString==''|| propName==''){
      return restuarants
    }
    restuarants.forEach((restuarant:any)=>{
      if (restuarant[propName].trim().toLowerCase().includes(filterString)){
        result.push(restuarant)
      }
    })
    return result;
  }

}
