import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiPayload } from '../interfaces/api-payload.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private BASE_URL = `${environment.API_URL}`;

  constructor(private http: HttpClient) {}

  searchByName(
    collection: string | null,
    name: string = '',
    page: number = 1
  ): Observable<ApiPayload> {
    return this.http.get<ApiPayload>(
      `${this.BASE_URL}/${collection}?page=${page}&name=${name}`,
      {}
    );
  }
}
