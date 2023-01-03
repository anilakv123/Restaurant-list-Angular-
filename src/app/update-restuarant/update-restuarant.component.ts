import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { RestuarantApiService } from '../services/restuarant-api.service';

@Component({
  selector: 'app-addrestuarant',
  templateUrl: './update-restuarant.component.html',
  styleUrls: ['./update-restuarant.component.css']
})
export class UpdateRestuarantComponent implements OnInit {
//   id:any
// rName:any
// neighborhood:any
// photograph:any
// Monday:any
// Tuesday:any
// Wednesday:any
// Thursday:any
// Friday:any
// Saturday:any
// Sunday:any
// lat:any
// lng:any
// rvname:any
// date:any
// rating:any
// comments:any
// cuisine_type:any
// address:any
// reviewArray:any=[]

restId:any;
restBody:any;
  restApi: any;
  reviews: any=[];

constructor(private activateRoute:ActivatedRoute , private restService:RestuarantApiService,private router:Router) { }
ngOnInit(): void {
  


this.activateRoute.params.subscribe((data)=>{
  this.restId = data['id']
  console.log(this.restId);
  
  
})
//api call
this.restService.viewRestuarant(this.restId)
.subscribe((result)=>{
  this.restBody = result
 console.log(this.restBody);
 
 })
}
updateRestuarant(form:any){
  let updateRestuarant={
    id:parseInt(form.value.id),
    name:form.value.rName,
    neighborhood:form.value.neighborhood,
    photograph:form.value.photograph,
    address:form.value.address,
    

    latlng:{
      lat:form.value.lat,
      lng:form.value.lng

    },
    cuisine_type:form.value.cuisine_type,
    operating_hours:{
      Monday:form.value.Monday,
      Tuesday:form.value.Tuesday,
      Wednesday:form.value.Wednesday,
      Thursday:form.value.Thursday,
      Friday:form.value.Friday,
      Saturday:form.value.Saturday,
      Sunday:form.value.Sunday

    },
    reviews:[{
rvname:form.value.rvname,
date:form.value.date,
rating:parseInt(form.value.rating),
comments:form.value.comments

    }]
   }
console.log(updateRestuarant);
this.restService.updateRestuarant(this.restId,updateRestuarant)
.subscribe((data)=>{
  alert('Restuarant Details Updated successfully!!')
  this.router.navigateByUrl('')
})


  }
  
}







 