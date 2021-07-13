import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { PaisService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.scss']
})

export class ByCountryComponent{

  term:string = '';
  error:boolean = false;
  countries:Country[] = [];
  suggestions:Country[] = [];

  constructor(private countryService:PaisService){
  }


  Search(country:string){
    if(country.trim().length != 0){
      this.term = country;
      this.error = false;
      this.suggestions = [];
      this.countryService.searchByCountry(country).subscribe(
        resp=>{
          this.countries = resp;
        },err =>{
          this.error = true;
          this.countries = [];
        }
      )
    }else{
      this.error = false;
    }
  }

  Suggestions(country:string){
    this.error = false;
    this.term = country;
    if(country.trim().length == 0){
      this.suggestions = [];
    }else{
      this.countryService.searchByCountry(country)
        .subscribe(
          resp =>{
            this.suggestions = resp.splice(0,5);
            this.error = false;
          },
          err => {
            this.error = true;
            this.suggestions = [];
          }
      )
    }
  }
}
