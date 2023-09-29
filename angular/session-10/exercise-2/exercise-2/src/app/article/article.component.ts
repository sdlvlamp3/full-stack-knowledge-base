import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: 'article.component.html',
  styleUrls: ['./article.component.css']
})

export class Article{
  title: string = "Angular is awesome!";
  content: string = "This is the content of the article component";
};

