import { Component } from '@angular/core';

@Component({
  selector: 'article-app',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  title: string = 'Whatever you want';
  content: string = 'Some content goes here';
  isTechRelated: boolean = false;

  changeColor() {
    console.log('BUTTON CLICK');

    this.isTechRelated = !this.isTechRelated;
  }
}
