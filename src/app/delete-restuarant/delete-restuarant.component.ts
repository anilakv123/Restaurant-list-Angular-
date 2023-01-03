import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestuarantApiService } from '../services/restuarant-api.service';

@Component({
  selector: 'app-delete-restuarant',
  templateUrl: './delete-restuarant.component.html',
  styleUrls: ['./delete-restuarant.component.css']
})
export class DeleteRestuarantComponent implements OnInit {
  // apiService: any;
  restId: any;
  // router: any;

  constructor(private activatedRoute:ActivatedRoute,private apiService:RestuarantApiService,private router:Router) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
    (data)=> {
      this.restId = data['id']

      console.log(this.restId)
    }
    )

   this.apiService.deleteRestuarant(this.restId)
   .subscribe(()=>{
    alert('Requested Restuarant details deleted succesfully...')
    this.router.navigateByUrl('')
   })

  }

}
