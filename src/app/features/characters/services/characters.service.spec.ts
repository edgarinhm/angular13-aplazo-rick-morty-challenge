import { TestBed, waitForAsync, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CharactersService } from './characters.service';
import { ApiPayload } from '../interfaces/api-payload.interface';

describe('CharactersService', () => {
  let service: CharactersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharactersService],
    });
    service = TestBed.inject(CharactersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it(`should fetch posts ids 1,183 as an Observable`, waitForAsync(
    inject([HttpTestingController, CharactersService], () => {
      const postItem = [
        {
          id: 1,
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: {
            name: 'Earth (C-137)',
            url: 'https://rickandmortyapi.com/api/location/1',
          },
          location: {
            name: 'Earth (Replacement Dimension)',
            url: 'https://rickandmortyapi.com/api/location/20',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          episode: [
            'https://rickandmortyapi.com/api/episode/1',
            'https://rickandmortyapi.com/api/episode/2',
            // ...
          ],
          url: 'https://rickandmortyapi.com/api/character/1',
          created: '2017-11-04T18:48:46.250Z',
        },
        {
          id: 183,
          name: 'Johnny Depp',
          status: 'Alive',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: {
            name: 'Earth (C-500A)',
            url: 'https://rickandmortyapi.com/api/location/23',
          },
          location: {
            name: 'Earth (C-500A)',
            url: 'https://rickandmortyapi.com/api/location/23',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/183.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/8'],
          url: 'https://rickandmortyapi.com/api/character/183',
          created: '2017-12-29T18:51:29.693Z',
        },
      ];

      service.characterById('1,183').subscribe((posts: any) => {
        expect(posts.length).toBe(2);
      });

      let req = httpMock.expectOne(
        'https://rickandmortyapi.com/api/character/[1,183]'
      );

      expect(req.request.method).toBe('GET');
      req.flush(postItem);
      httpMock.verify();
    })
  ));

  it(`should fetch posts 29 post of rick with status alive as an Observable`, waitForAsync(
    inject([HttpTestingController, CharactersService], () => {
      service
        .findCharacters(1, 'rick&status=alive')
        .subscribe((posts: ApiPayload) => {
          expect(posts.results.length).toBe(29);
        });
    })
  ));
});
