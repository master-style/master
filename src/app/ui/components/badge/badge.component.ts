import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doc-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  constructor() { }

  colors = ['blue', 'red', 'green', 'purple', 'yellow', 'theme'];
  styles = ['', 'outlined'];

  ngOnInit(): void {
  }

}
