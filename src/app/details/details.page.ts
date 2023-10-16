import { Component, OnInit } from '@angular/core';
import { ImmoService } from '../immmob-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage  {

  selectedImmob: any;

  constructor(
    private route: ActivatedRoute,
    private immoService: ImmoService // Replace 'ImmoService' with your service name
  ) {}

 
}