import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { City } from '@weather/api-interfaces';

@Component({
  selector: 'weather-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  expanded = false;
  cities: City[] = [];
  citiesCopy: City[] = [];
  filterText = '';

  @Output() cityChange = new EventEmitter<City>();

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getCities().subscribe(cities => {
      this.cities = cities
      this.citiesCopy = cities
    })
  }

  onExpandClick(i: any, e: any): void {
    if(!this.expanded && e.target.nodeName === 'DIV') this.expanded = true;
  }

  onCloseClick(): void {
    this.expanded = false;
  }

  onCityClick(city: City): void {
    this.cityChange.emit(city)
  }

  filter(): void {
    if(this.filterText) {
      this.cities = this.citiesCopy.filter((e) => {
        return (e.name.toLowerCase().includes(this.filterText.toLowerCase()))
      })
    }
    else {
      this.cities = this.citiesCopy
    }
  }

}
