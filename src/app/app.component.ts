import { Component, Input } from '@angular/core';
import { MarvelService } from './marvel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  heroInfo;
  @Input() searchTerm;
  
  
    constructor(private marvelService: MarvelService){}

    getDataFromService(){
      this.marvelService.getHeroInfo(' ')
        .subscribe(
          heroInfo => {
            this.heroInfo = heroInfo.data.results;
            console.log(this.heroInfo)
            // console.log(this.heroInfo.length)
          }
        )
    }

    getDataFromSearch(searchTerm) {
      // console.log("made it here")
      // console.log(searchTerm);
      this.marvelService.getHeroInfo("&nameStartsWith="+searchTerm)
      .subscribe(
        heroInfo => {
          this.heroInfo = heroInfo.data.results;
        }
      )
    }

  ngOnInit() {
    this.getDataFromService()
  }

}

