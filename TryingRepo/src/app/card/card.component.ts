import { Component, OnInit, Input } from '@angular/core';
import { ArticleModel } from './article.model';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  //inputs : [article],
  host : {
    class: 'row'
  }
})
export class CardComponent implements OnInit {
  @Input() article: ArticleModel;
  title: string;
  link: string;
  vote: number;
  
  constructor() {
    this.article = new ArticleModel(this.title, this.link, this.vote);
  }

upVote() : boolean {
  this.article.upVote();
  return false;
}

downVote() : boolean {
  this.article.downVote();
  return false;
}

  ngOnInit() {
  }

}