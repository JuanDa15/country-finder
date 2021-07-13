import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { PaisService } from '../../services/country.service';


interface regionalBloc{
  abreviatura: string;
  definition:string;
}

@Component({
  selector: 'app-by-regional-bloc',
  templateUrl: './by-regional-bloc.component.html',
  styleUrls: ['./by-regional-bloc.component.scss']
})
export class ByRegionalBlocComponent{

  activebloc:string = '';
  regions:regionalBloc[] = [
                              {abreviatura: 'EU',definition: 'European Union'},
                              {abreviatura: 'EFTA',definition: 'European Free Trade Association'},
                              {abreviatura: 'CARICOM',definition: 'Caribbean Community'},
                              {abreviatura: 'PA',definition: 'Pacific Alliance'},
                              {abreviatura: 'AU',definition: 'African Union'},
                              {abreviatura: 'USAN',definition: 'Union of South American Nations'},
                              {abreviatura: 'EEU',definition: 'Eurasian Economic Union'},
                              {abreviatura: 'AL',definition: 'Arab League'},
                              {abreviatura: 'ASEAN',definition: 'Association of Southeast Asian Nations'},
                              {abreviatura: 'CAIS',definition: 'Central American Integration System'},
                              {abreviatura: 'CEFTA',definition: 'Central European Free Trade Agreement'},
                              {abreviatura: 'NAFTA',definition: 'North American Free Trade Agreement'},
                              {abreviatura: 'SAARC',definition: 'South Asian Association for Regional Cooperation'},
                            ];
  countries:Country[] = [];

  constructor(private countryService:PaisService) { }

  getCSSClass(bloc:string){
    return (bloc === this.activebloc)? 'button active': 'button unactive';
  }

  Search(bloc:regionalBloc):void{
    if(bloc.abreviatura !== this.activebloc){
      this.countries = [];
      this.countryService.searchByRegionalBloc(bloc.abreviatura.toLowerCase()).subscribe(
        resp=>{
          this.activebloc = bloc.abreviatura;
          this.countries = resp;
        })
    }
  }
}
