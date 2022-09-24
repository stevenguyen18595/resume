import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-pannel',
  templateUrl: './main-pannel.component.html',
  styleUrls: ['./main-pannel.component.scss'],
})
export class MainPannelComponent implements OnInit {
  skills: string[] = [
    'Html',
    'Css',
    'Sass',
    'Javascript',
    'Typescript',
    'Bootstrap',
    'Bulma',
    'Angular 2',
    'C#',
    'Java',
    'Python',
    'Nodejs',
    'Spring Boot',
    '.Net6',
    'Flask',
    'Sql DB',
    'NoSql DB',
    'Azure Devops',
    'AWS',
    'Jira',
    'Github',
    'Gitlab',
    'Git',
    'Source Tree',
  ];
  constructor() {}

  ngOnInit(): void {}
}
