import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RaceTrack } from 'src/app/interfaces/race-track';
import { RacetracksService } from 'src/app/services/racetracks.service';

@Component({
  selector: 'app-racetrack-detail',
  templateUrl: './racetrack-detail.component.html',
  styleUrls: ['./racetrack-detail.component.css']
})
export class RacetrackDetailComponent implements OnInit {

  racetracks: RaceTrack[] = [];
  racetrack: RaceTrack[] = [];

  constructor(private route: ActivatedRoute, private sService: RacetracksService) { }

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('id');

    this.sService.getRaceTracks().subscribe(

      s => {

        this.racetracks = s;

        console.log(s.filter(racetrack => racetrack.raceTrackID === id));

        this.racetrack = s.filter(racetrack => racetrack.raceTrackID === id);
        
      }
      
    );
  
  }
  
}
