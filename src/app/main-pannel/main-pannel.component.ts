import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-pannel',
  templateUrl: './main-pannel.component.html',
  styleUrls: ['./main-pannel.component.scss'],
})
export class MainPannelComponent implements OnInit {
  frontEndSkills: string[] = [
    'Html',
    'Css',
    'Sass',
    'Bootstrap',
    'Bulma',
    'Javascript',
    'Typescript',
    'Angular',
    'React',
  ];
  backEndSkills: string[] = [
    'Java',
    'Spring Boot',
    'C#',
    '.Net',
    'Python',
    'Flask',
    'Php',
    'Laravel',
  ];
  databaseSkills: string[] = [
    'PostgreSql',
    'MySql',
    'SqlServer',
    'Sqlite',
    'DynamoDb',
  ];
  ci_cdSkills: string[] = ['Github Action', 'Aws Pipeline', 'Openshift'];
  testingSkills: string[] = ['Cypress', 'Selenium'];
  constructor() {}

  ngOnInit(): void {}
}
