import { TestBed, waitForAsync, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { LocationsService } from './locations.service';
import { ApiPayload } from '../interfaces/api-payload.interface';

describe('LocationsService', () => {
  let service: LocationsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LocationsService],
    });
    service = TestBed.inject(LocationsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it(`should fetch posts ids 1,183 as an Observable`, waitForAsync(
    inject([HttpTestingController, LocationsService], () => {
      const postItem = [
        {
          id: 3,
          name: 'Citadel of Ricks',
          type: 'Space station',
          dimension: 'unknown',
          residents: [
            'https://rickandmortyapi.com/api/character/8',
            'https://rickandmortyapi.com/api/character/14',
            // ...
          ],
          url: 'https://rickandmortyapi.com/api/location/3',
          created: '2017-11-10T13:08:13.191Z',
        },
        {
          id: 21,
          name: 'Testicle Monster Dimension',
          type: 'Dimension',
          dimension: 'Testicle Monster Dimension',
          residents: [
            'https://rickandmortyapi.com/api/character/7',
            'https://rickandmortyapi.com/api/character/436',
          ],
          url: 'https://rickandmortyapi.com/api/location/21',
          created: '2017-11-18T19:41:01.605Z',
        },
      ];

      service.findLocationById('3,21').subscribe((posts: any) => {
        expect(posts.length).toBe(2);
      });

      let req = httpMock.expectOne(
        'https://rickandmortyapi.com/api/location/[3,21]'
      );

      expect(req.request.method).toBe('GET');
      req.flush(postItem);
      httpMock.verify();
    })
  ));

  it(`should fetch posts 1 post of location Citadel of Ricks as an Observable`, waitForAsync(
    inject([HttpTestingController, LocationsService], () => {
      service
        .findLocations(1, 'Citadel of Ricks')
        .subscribe((posts: ApiPayload) => {
          expect(posts.results.length).toBe(1);
          expect(posts.results[0].type).toBe('Space station');
        });
    })
  ));
});
