import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './home/components/top-bar/top-bar.component';
import { SearchModule } from '../search/search.module';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, SearchModule],
  declarations: [HomeComponent, TopBarComponent],
})
export class HomeModule {}
