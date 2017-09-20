import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MarvelService } from '../marvel.service';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  searchTerm: string;
  @Input() questionInfo;
  @Output() newList = new EventEmitter<void>();
  heroInfo;
  constructor(private marvelService: MarvelService){}


  searchNewUrl() {
    console.log(this.searchTerm);
    this.marvelService.getSearchInfo(this.searchTerm)
    .subscribe(
      heroInfo => {
        this.heroInfo = heroInfo.data.results;
        console.log(this.heroInfo)
        console.log(this.heroInfo.length)
        //how to update list on page?
      }

    )
    this.newList.emit(this.heroInfo);
    $("#searchBox").val("");
    

    }//update user score if answer is correct
    // getSearchResults(){
    //   this.marvelService.getSearchInfo(searchTerm)
    //     .subscribe(
    //       heroInfo => {
    //         this.heroInfo = heroInfo.data.results;
    //         console.log(this.heroInfo)
    //         console.log(this.heroInfo.length)
            
    //       }
    //     )
    // }
   
  
    // this.completedValidation2.emit("the string from the child");
    // this.getDataFromService();//get new question
  
  // searchUrl = apiUrl + "&nameStartsWith=" + userInput;
  ngOnInit() {
  }

}
