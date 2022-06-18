import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'footer-card',
  templateUrl: './footer-card.component.html',
  styleUrls: ['./footer-card.component.sass'],
})
export class FooterCardComponent implements OnInit {
  constructor() {}

  @Input() title: string = '';

  @Input() content: any;

  @Input() buttonText: string = '';

  @Input() anchorLinks: any;

  @Output() btnClick = new EventEmitter<MouseEvent>();

  onButtonClick(event: MouseEvent): void {
    this.btnClick.emit(event);
  }

  ngOnInit(): void {}
}
