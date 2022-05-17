import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsListComponent } from './components/locations-list/locations-list.component';
import { SharedModule } from '../../shared/shared.module';
import { LocationsRoutingModule } from './locations-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { LocationsApiEffects } from './state/effects/location-api.effects';
import { SharedStateLocationsModule } from './state/store/locations.store';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LocationsRoutingModule,
    EffectsModule.forFeature([LocationsApiEffects]),
    SharedStateLocationsModule,
  ],
  declarations: [LocationsListComponent],
  exports: [LocationsListComponent],
})
export class LocationsModule {}
