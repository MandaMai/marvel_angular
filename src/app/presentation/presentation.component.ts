// import { Component, OnInit, Input, Output } from '@angular/core';
// import { MarvelService } from '../marvel.service';

// @Component({
//   selector: 'app-presentation',
//   templateUrl: './presentation.component.html',
//   styleUrls: ['./presentation.component.css']
// })

// export class PresentationComponent implements OnInit {
//   // private baseUrl: string = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=8c341eb8a8058fa06e30e3cd5c608bc2&hash=ee5c3bb981328e44a00878da4bad4323&limit=100";
//   heroInfo;
  
  
//     constructor(private marvelService: MarvelService){}

//     getDataFromService(){
//       this.marvelService.getHeroInfo()
//         .subscribe(
//           heroInfo => {
//             this.heroInfo = heroInfo.data.results;
//             console.log(this.heroInfo)
//             console.log(this.heroInfo.length)

//           }
//         )
//     }

    


//   // // userScore: number =0;
//   // userAnswer: string = "make sure this works first";
//   // heroInfo = "tempHero";

//   // // @Input() heroInfo;
//   // // @Output() searchValue = new EventEmitter<void>();
  
  

//   // constructor() { }

//   // // checkAnswer() {
//   // //   console.log(this.userAnswer)
//   // //   if(this.userAnswer == this.questionInfo.answer) {
//   // //     this.userScore += this.questionInfo.value;
      
//   // //   }//update user score if answer is correct
//   // //   this.userAnswer="";
//   // //   this.completedValidation.emit();
//   // //   // this.completedValidation2.emit("the string from the child");
//   // //   // this.getDataFromService();//get new question
//   // // }

//   ngOnInit() {
//     this.getDataFromService()
//   }

// }
