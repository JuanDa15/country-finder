import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { ByRegionalBlocComponent } from './pages/by-regional-bloc/by-regional-bloc.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';


@NgModule({
  declarations: [
  
    ByCountryComponent,
    ByCapitalComponent,
    ByRegionComponent,
    ByRegionalBlocComponent,
    SeeCountryComponent,
    TableComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    ByCountryComponent,
    ByCapitalComponent,
    ByRegionComponent,
    ByRegionalBlocComponent,
    SeeCountryComponent
  ]
})
export class CountryModule { }
