import { Component, OnInit } from '@angular/core';
import { RaceTrack } from 'src/app/interfaces/race-track';
import { RacetracksService } from 'src/app/services/racetracks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  racetracks: RaceTrack[] = [];

  constructor(private sService: RacetracksService) { }
  
  ngOnInit(): void {

    this.sService.getRaceTracks().subscribe(

      s => {
        
        this.racetracks = s; console.log(s);
      
      }
      
    );

  }

}
