import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestuarantApiService } from '../services/restuarant-api.service';

@Component({
  selector: 'app-view-restuarant',
  templateUrl: './view-restuarant.component.html',
  styleUrls: ['./view-restuarant.component.css']
})
export class ViewRestuarantComponent implements OnInit {
  restId:any
  restBody:any
  constructor(private activateRoute:ActivatedRoute,private restSevice:RestuarantApiService) { }
  


  

  //restName="Resto Cafe Cochin"

  ngOnInit(): void {
    //asynchronous 
    this.activateRoute.params.subscribe((data)=>{
      this.restId = data['id']
      console.log(this.restId);
      
    })
    //api call
    this.restSevice.viewRestuarant(this.restId)
    .subscribe((result)=>{
      this.restBody = result
     console.log(this.restBody);
     
     })
  }

}


//   constructor() { }

//   ngOnInit(): void {
    
//   }

// }
