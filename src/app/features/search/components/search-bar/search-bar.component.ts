import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SearchPageActions } from '../state/actions';
import { selectActiveCollection } from '../state/store/search.store';
import { SearchService } from '../../services/search.service';
import { CharactersApiActions } from 'src/app/features/characters/state/actions';
import { LocationsApiActions } from 'src/app/features/locations/state/actions';
import { EpisodesApiActions } from 'src/app/features/episodes/state/actions';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent implements OnInit {
  currenTCollection: string | null;

  constructor(private store: Store, private searchService: SearchService) {
    this.currenTCollection = '';
    store.select(selectActiveCollection).subscribe((collection) => {
      this.currenTCollection = collection;
    });
  }

  ngOnInit() {
    this.store.dispatch(SearchPageActions.enter());
  }

  search(query: string) {
    this.searchService
      .searchByName(this.currenTCollection, query)
      .subscribe((filterCollection) => {
        if (this.currenTCollection === 'character') {
          this.store.dispatch(
            CharactersApiActions.charactersLoaded({
              characters: [...filterCollection.results],
            })
          );
        } else if (this.currenTCollection === 'location') {
          this.store.dispatch(
            LocationsApiActions.locationsLoaded({
              locations: [...filterCollection.results],
            })
          );
        } else if (this.currenTCollection === 'episode') {
          this.store.dispatch(
            EpisodesApiActions.episodesLoaded({
              episodes: [...filterCollection.results],
            })
          );
        }
      });
  }
}
