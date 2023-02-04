import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css'],
})
export class AchievementsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  items = [
    {
      eg: '3rd Honorable Mention',
      jhs: 'Junior High School Graduate',
      shs: 'With Honors, Best in Research Presenter',
      fy: 'Deans Lister - 1st Semester',
      sy: 'Deans Lister - 1st Semester, Presidents Lister - 2nd Semester',
      td: 'Presidents Lister - 1st Semester',
    },
  ];
  myColor = 'red';
}
