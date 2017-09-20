import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MarvelService } from '../marvel.service';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  searchTerm: string;
  // @Input() questionInfo;
  @Output() newList = new EventEmitter<string>();
 

  constructor(private marvelService: MarvelService){}


  searchNewUrl() {
    if(this.searchTerm == null) {alert ("You need to put something in here if you want to search for something. Even the invisible man has a name!")
      }else{
      console.log(this.searchTerm);
    this.newList.emit(this.searchTerm);
    $("#searchBox").val("");
    }//end else
    }
  ngOnInit() {
  }

}
