// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-add-restuarant',
//   templateUrl: './add-restuarant.component.html',
//   styleUrls: ['./add-restuarant.component.css']
// })
// export class AddRestuarantComponent implements OnInit {
// id:any
//   constructor() { }

//   ngOnInit(): void {
//   }
// //userdefined function
// addRestuarant(){
// let addProduct={
//   id:this.id

// }
// console.log(addProduct);

// }
// }

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { RestuarantApiService } from '../services/restuarant-api.service';

@Component({
  selector: 'app-addrestuarant',
  templateUrl: './add-restuarant.component.html',
  styleUrls: ['./add-restuarant.component.css']
})
export class AddRestuarantComponent implements OnInit {
  id:any
rName:any
neighborhood:any
photograph:any
Monday:any
Tuesday:any
Wednesday:any
Thursday:any
Friday:any
Saturday:any
Sunday:any
lat:any
lng:any
rvname:any
date:any
rating:any
comments:any
cuisine_type:any
address:any
reviews:any
  constructor(private restApi:RestuarantApiService,private router:Router) { }

  ngOnInit(): void {
  }
  //user defined function
  addRestuarant(){
   let addProduct={
    id:parseInt(this.id),
    name:this.rName,
    neighborhood:this.neighborhood,
    photograph:this.photograph,
    address:this.address,
    

    latlng:{
      lat:this.lat,
      lng:this.lng

    },
    cuisine_type:this.cuisine_type,
    operating_hours:{
      Monday:this.Monday,
      Tuesday:this.Tuesday,
      Wednesday:this.Wednesday,
      Thursday:this.Thursday,
      Friday:this.Friday,
      Saturday:this.Saturday,
      Sunday:this.Sunday

    },
    reviews:[{
rvname:this.rvname,
date:this.date,
rating:parseInt(this.rating),
comments:this.comments

    }]
   }
console.log(addProduct);
this.restApi.addRestuarant(addProduct)
.subscribe(()=>{
  alert('new Restuarant added successfully')
  this.router.navigateByUrl('')
})


  }
  
}





