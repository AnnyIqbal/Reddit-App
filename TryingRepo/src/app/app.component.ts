import { Component } from '@angular/core';
import { ArticleModel } from './card/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heading = 'Reditt App!';
/*  name = "Saddu";
  mydata: number = 10;
  
  constructor() {
      setInterval(()=> this.mydata++, 1000); // its a timer function and 1000 sec is the time delay
    }
*/
    /************************************************************* 
    ----------trying book ka code-------- pg 35
    *************************************************************/
  article: ArticleModel[];

  constructor(){
    this.article = [
      new ArticleModel("Angular2", "https://www.angular.io/abc", 10),
      new ArticleModel("Google", "https://www.google.com/xyz", 6),
      new ArticleModel("Facebook", "https://www.facebook.com/pqr", 8)
    ];
  }
  addArticle(title,link): boolean {
    //console.log('article ' + title.value + ' and link ' + link.value);
    console.log(`article ${title.value} and link ${link.value}`); //same kam as above log does

    this.article.push(new ArticleModel(title.value, link.value));
    title.value = '';
    link.value = '';
    return false;
  }
  sortArticles() : ArticleModel[] {
    return this.article.sort((a: ArticleModel, b: ArticleModel) => b.vote - a.vote);
  }
}
// step 8 tk doe hai go read book now to clear concepts :)