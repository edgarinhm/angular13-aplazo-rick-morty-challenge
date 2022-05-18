import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiPayload } from '../interfaces/api-payload.interface';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  private BASE_URL = `${environment.API_URL}location`;

  constructor(private http: HttpClient) {}

  findLocations(page: number = 1, name: string = ''): Observable<ApiPayload> {
    return this.http.get<ApiPayload>(
      this.BASE_URL + `?page=${page}&name=${name}`,
      {}
    );
  }

  findLocationById(id: string = ''): Observable<Location> {
    return this.http.get<Location>(this.BASE_URL + `/[${id}]`, {});
  }
}
