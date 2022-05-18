import { TestBed, waitForAsync, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { EpisodesService } from './episodes.service';
import { ApiPayload } from '../interfaces/api-payload.interface';

describe('EpisodesService', () => {
  let service: EpisodesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EpisodesService],
    });
    service = TestBed.inject(EpisodesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it(`should fetch posts ids 1,183 as an Observable`, waitForAsync(
    inject([HttpTestingController, EpisodesService], () => {
      const postItem = [
        {
          id: 10,
          name: 'Close Rick-counters of the Rick Kind',
          air_date: 'April 7, 2014',
          episode: 'S01E10',
          characters: [
            'https://rickandmortyapi.com/api/character/1',
            'https://rickandmortyapi.com/api/character/2',
            // ...
          ],
          url: 'https://rickandmortyapi.com/api/episode/10',
          created: '2017-11-10T12:56:34.747Z',
        },
        {
          id: 28,
          name: 'The Ricklantis Mixup',
          air_date: 'September 10, 2017',
          episode: 'S03E07',
          characters: [
            'https://rickandmortyapi.com/api/character/1',
            'https://rickandmortyapi.com/api/character/2',
            // ...
          ],
          url: 'https://rickandmortyapi.com/api/episode/28',
          created: '2017-11-10T12:56:36.618Z',
        },
      ];

      service.findEpisodeById('10,28').subscribe((posts: any) => {
        expect(posts.length).toBe(2);
      });

      let req = httpMock.expectOne(
        'https://rickandmortyapi.com/api/episode/[10,28]'
      );

      expect(req.request.method).toBe('GET');
      req.flush(postItem);
      httpMock.verify();
    })
  ));

  it(`should fetch posts 1 post of episode S01E10 as an Observable`, waitForAsync(
    inject([HttpTestingController, EpisodesService], () => {
      service
        .findEpisodes(1, 'Close Rick-counters of the Rick Kind')
        .subscribe((posts: ApiPayload) => {
          expect(posts.results.length).toBe(1);
          expect(posts.results[0].episode).toBe('S01E10');
        });
    })
  ));
});
