import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from '../../interfaces/episode.interface';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { selectAllEpisodes } from '../../state/store/episodes.store';
import { EpisodesPageActions } from '../../state/actions';
import { SearchPageActions } from 'src/app/features/search/components/state/actions';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.scss'],
})
export class EpisodesListComponent implements OnInit {
  episodes$: Observable<Episode[]>;

  constructor(private store: Store, private router: Router) {
    this.episodes$ = store.select(selectAllEpisodes);
  }

  ngOnInit(): void {
    this.store.dispatch(EpisodesPageActions.enter());
    this.store.dispatch(
      SearchPageActions.activeCollectionLoaded({
        activeCollection: 'episode',
      })
    );
  }

  showDetails(episode: Episode): void {
    this.store.dispatch(
      EpisodesPageActions.selectEpisode({
        activeEpisodeId: episode.id,
      })
    );
    this.router.navigate(['/episodes/characters']);
  }
}
