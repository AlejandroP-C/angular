import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RaceTrack } from '../interfaces/race-track';

@Injectable({
  providedIn: 'root'
})
export class RacetracksService {

  constructor( private http: HttpClient) { }

  url = "https://projecteangular-7effc-default-rtdb.firebaseio.com/racetrack";

  public getRaceTracks(): Observable<RaceTrack[]> {

    return this.http.get<{ [key: string]: RaceTrack }>(this.url + ".json").pipe(

      map(sObjecte => Object.entries(sObjecte)),
      map(
        sArray => sArray.map(
          s => {
            return s[1];
          }
        )
      )
    )

  }
  

}