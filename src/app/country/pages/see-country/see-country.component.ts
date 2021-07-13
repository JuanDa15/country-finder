import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';
import { PaisService } from '../../services/country.service';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.scss']
})
export class SeeCountryComponent implements OnInit {

  country!:Country;

  constructor(
    private activatedRoute:ActivatedRoute,
    private countryService:PaisService){
    }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((param) => this.countryService.getCountry(param.id))
        )
      .subscribe(
        (resp:Country) => {
          this.country = resp;
        });

    // this.activatedRoute.params
    //   .subscribe(
    //     ({id}) => {
    //       this.countryService.getCountry(id)
    //       .subscribe(
    //         pais => {
    //           console.log(pais);
    //         }
    //       )
    //     }
    //   )

  }
}

