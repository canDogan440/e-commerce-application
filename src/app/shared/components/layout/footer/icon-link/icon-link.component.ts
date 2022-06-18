import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'icon-link',
  templateUrl: './icon-link.component.html',
  styleUrls: ['./icon-link.component.sass'],
})
export class IconLinkComponent implements OnInit {
  iconSources = [
    { twitter: '' },
    { facebook: '' },
    { instagram: '' },
    { youtube: '' },
    { linkedin: '' },
  ];

  @Input() iconOrder: number = 0;

  iconSvgIdentifier() {
    return this.iconSources[this.iconOrder];
  }

  constructor() {}

  ngOnInit(): void {}
}
