import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { PaisService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.scss']
})
export class ByCapitalComponent implements OnInit {

  error:boolean = false;
  countries: Country[] = [];
  term: string = '';
  suggestions: Country[] = [];
  
  constructor(private countryService:PaisService) { }


  ngOnInit(): void {
  }

  Search(event:string){
    if(event.trim().length != 0){
      this.suggestions = [];
      this.error = false;
      this.countryService.searchByCapital(event).subscribe(
        resp => {
          this.countries = resp;
        },
        err => {
          this.error = true;
          this.countries = [];
        }
      )
    }else{
      this.error = false;
    }
  }

  Suggestions(event:string){
    this.error = false;
    this.term = event;
    if(event.trim().length == 0){
      this.suggestions = [];
    }else{
      this.countryService.searchByCapital(event)
        .subscribe(
          resp =>{ 
            this.suggestions = resp.splice(0,5);
            this.error = false;
          },
          err => {
            this.suggestions = [];
            this.error = true;
          }
        )
    }
    console.log(event);
  }

}
