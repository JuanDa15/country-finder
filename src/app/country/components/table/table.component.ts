import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() countries:Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
