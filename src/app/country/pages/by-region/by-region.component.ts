import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { PaisService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.scss']
})
export class ByRegionComponent{

  activeRegion:string = '';
  regions:string[] = ['africa','americas','asia','europe','oceania'];
  countries:Country[] = [];

  constructor(private countryService:PaisService) { }

  getCSSClass(region:string){
    return (region === this.activeRegion)? 'button active': 'button unactive';
  }

  Search(region:string):void{
    if(region !== this.activeRegion){
      this.countries = [];
      this.countryService.searchByRegions(region).subscribe(
        resp=>{
          this.activeRegion = region;
          this.countries = resp;
        })
    }
  }
}
