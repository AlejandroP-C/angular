import { Component, Input, OnInit } from '@angular/core';
import { RaceTrack } from 'src/app/interfaces/race-track';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() racetrack: RaceTrack | undefined;

  constructor() { }

  ngOnInit(): void {  }

}