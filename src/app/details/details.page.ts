import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImmobService, Immob } from '../immmob-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  property!: Immob; // Initializing as undefined

  constructor(
    private route: ActivatedRoute,
    private immobService: ImmobService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.immobService.getImmobById(id).then((property: Immob) => {
          this.property = property;
        }).catch((error: any) => { // Specify the type for the error parameter
          console.error(error);
        });
      } else {
        console.error('ID is null');
      }
    });
  }
}
