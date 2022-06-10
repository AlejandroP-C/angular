import { Component, Input, OnInit } from '@angular/core';
import { RaceTrack } from 'src/app/interfaces/race-track';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  
  @Input() racetrack: RaceTrack | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
