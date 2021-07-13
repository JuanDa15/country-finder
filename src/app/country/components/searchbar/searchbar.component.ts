import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime} from 'rxjs/operators'

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit{

  term:string = '';

  @Input() placeholder = '';
  @Output() OnEnter   :EventEmitter<string> = new EventEmitter();
  @Output() OnDebounce:EventEmitter<string> = new EventEmitter();

  debouncer:Subject<string> = new Subject();

  constructor(){
  }
  ngOnInit(){
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(term => {
      this.OnDebounce.emit(term);
    })
  }

  Search(){
    this.OnEnter.emit(this.term);
  }

  
  keyPressed(){
    this.debouncer.next(this.term);
  }
}
