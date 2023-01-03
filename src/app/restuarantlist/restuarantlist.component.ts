import { Component, OnInit } from '@angular/core';
import { RestuarantApiService } from '../services/restuarant-api.service';

@Component({
  selector: 'app-restuarantlist',
  templateUrl: './restuarantlist.component.html',
  styleUrls: ['./restuarantlist.component.css']
})
export class RestuarantlistComponent implements OnInit {
  restuarantLists:any;
  lDate:any
  filterString:any="";
  

  constructor(private restApi:RestuarantApiService) { }

  ngOnInit(): void {
    //asynchronous
    this.restApi.allRestuarantList()
    .subscribe((result)=>{
      console.log(result);
      this.restuarantLists=result
      
    })
    // this.lDate = new 
    //to get search term for service
  this.restApi.search.subscribe((data)=>{
      this.filterString=data
      console.log(this.filterString);
      
    })
  }

}
