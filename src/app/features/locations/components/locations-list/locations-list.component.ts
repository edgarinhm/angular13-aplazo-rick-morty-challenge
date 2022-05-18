import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Location } from '../../interfaces/locations.interface';
import { LocationsPageActions } from '../../state/actions';
import { selectAllLocations } from '../../state/store/locations.store';
import { SearchPageActions } from 'src/app/features/search/components/state/actions';
import { CharactersPageActions } from 'src/app/features/characters/state/actions';
import { getResidentsIds } from '../../../../core/utils/get-residents-ids';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.scss'],
})
export class LocationsListComponent implements OnInit {
  locations$: Observable<Location[]>;

  constructor(private store: Store, private router: Router) {
    this.locations$ = store.select(selectAllLocations);
  }

  ngOnInit() {
    this.store.dispatch(LocationsPageActions.enter());
    this.store.dispatch(
      SearchPageActions.activeCollectionLoaded({
        activeCollection: 'location',
      })
    );
  }

  showDetails(location: Location): void {
    this.store.dispatch(
      LocationsPageActions.selectLocation({
        activeLocationId: location.id,
      })
    );
    this.store.dispatch(
      CharactersPageActions.selectResidents({
        residents: getResidentsIds(location.residents),
      })
    );
    this.router.navigate(['/locations/residents']);
  }
}
