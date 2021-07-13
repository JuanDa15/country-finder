import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private url:string = 'https://restcountries.eu/rest/v2';

  constructor(private http:HttpClient){
  }

  get httpParams(){
    const params = new HttpParams()
      .set('fields' , 'flag;name;capital;population;alpha2Code');
    return params;
  }

  searchByCountry(country:string):Observable<Country[]>{
    const url = `${this.url}/name/${country}`;
    return this.http.get<Country[]>(url,{params:this.httpParams});
  }

  searchByCapital(capital:string):Observable<Country[]>{
    const url = `${this.url}/capital/${capital}`;
    return this.http.get<Country[]>(url,{params:this.httpParams});
  }

  getCountry(code:string):Observable<Country>{
    const url = `${this.url}/alpha/${code}`;
    return this.http.get<Country>(url);
  }

  searchByRegions(region:string):Observable<Country[]>{
    const url = `${this.url}/region/${region}`;
    return this.http.get<Country[]>(url, {params:this.httpParams});
  }

  searchByRegionalBloc(bloc:string):Observable<Country[]>{
    const url = `${this.url}/regionalbloc/${bloc}`;
    return this.http.get<Country[]>(url, {params:this.httpParams});
  }
}
