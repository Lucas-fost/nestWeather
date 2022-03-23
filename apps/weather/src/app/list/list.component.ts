import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { City } from '@weather/api-interfaces';

@Component({
  selector: 'weather-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  expanded!: boolean;
  cities!: City[];
  citiesCopy!: City[];
  filterText!: string;
  currentList!: City[];

  @Output() cityChange = new EventEmitter<City>();

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getCities().subscribe(cities => {
      this.cities = cities
      this.citiesCopy = cities
    })
    this.api.getCurrentList().subscribe(list => {
      this.currentList = list
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
    console.log(this.currentList)

    this.cities.map(i => {
      i.state = ''
    })

    this.currentList.map(e => {
      this.cities.map(i => {
        if(i.name === e.name) {
          i.state = 'select'
        }
      })
    })
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
