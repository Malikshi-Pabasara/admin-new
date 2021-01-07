import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mechanic } from '../mechanic-list/mechanic';
import { MechanicListService } from '../mechanic-list/mechanic-list.service';



@Component({
  selector: 'app-mechanic-profile',
  templateUrl: './mechanic-profile.component.html',
  styleUrls: ['./mechanic-profile.component.css']
})
export class MechanicProfileComponent implements OnInit {
  userId!: string;
  mechanic?: Mechanic;

  constructor(
    private mechanicListService: MechanicListService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (paramMap.has('id')) {
        let id = paramMap.get('id');

        this.mechanicListService.onSelectMechanic(id).subscribe(mechanic$=>{
          this.mechanic = mechanic$
        })
      }
    });
  }

  mechanicDetails() {
    this.router.navigate(['/mechanic']);
  }
}
