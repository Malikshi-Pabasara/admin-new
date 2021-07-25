import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Spareshop } from '../spareshop-list/spareshop';
import { SpareshopListService } from '../spareshop-list/spareshop-list.service';



@Component({
  selector: 'app-spareshop-profile',
  templateUrl: './spareshop-profile.component.html',
  styleUrls: ['./spareshop-profile.component.css']
})
export class SpareshopProfileComponent implements OnInit {
  userId!: string;
  spareshop?: Spareshop;

  constructor(
    private spareshopListService: SpareshopListService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (paramMap.has('id')) {
        let id = paramMap.get('id');

        this.spareshopListService.onSelectShop(id)
        .subscribe((spareshop$:any)=>{
          console.log(spareshop$['spareshop']);
          
          this.spareshop = spareshop$['spareshop']
        })
      }
    });
  }

  spareshopDetails() {
    this.router.navigate(['/spare']);
  }
  updateShop(id:any){
    this.router.navigate(['/create-spare', id])
  }

}
