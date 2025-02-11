/* eslint-disable prefer-template */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // eslint-disable-next-line operator-linebreak
  private readonly url =
    'https://raw.githubusercontent.com/UzbekMinGeoTraining/dan-esri-gis/refs/heads/main/src/assets/data/reservoirs.geojson';

  constructor(private readonly http: HttpClient) {}

  getReservoirData(): Observable<any> {
    return this.http.get<any>(this.url + 'reservoirs.geojson');
  }
}
