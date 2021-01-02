import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Spareshop } from '../spareshop-list/spareshop';
import { SpareshopListService } from '../spareshop-list/spareshop-list.service';

export interface user {
  id: string;
  name: '';
  email: '';
  password: '';
}

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

        this.spareshop = this.spareshopListService.getSelectedSpareshop(id)
      }
    });
  }

  spareshopDetails() {
    this.router.navigate(['/spare']);
  }

}
