import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Location } from '../../interfaces/locations.interface';
import { LocationsPageActions } from '../../state/actions';
import { selectAllLocations } from '../../state/store/locations.store';

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
  }

  showDetails(location: Location): void {
    this.store.dispatch(
      LocationsPageActions.selectLocation({
        activeLocationId: location.id,
      })
    );
    this.router.navigate(['/locations/characters']);
  }
}
