import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'button-with-icon',
  templateUrl: './button-with-icon.component.html',
  styleUrls: ['./button-with-icon.component.sass'],
})
export class ButtonWithIconComponent implements OnInit {
  constructor() {}


  @Input()
  iconName: string = '';

  @Input()
  color: string = 'btn-default';

  @Input()
  btnLabel: string = '';

  @Input()
  btnClass: string = '';

  @Output()
  btnClick = new EventEmitter<MouseEvent>();

  @Input()
  isDisabled: boolean = false;

  @Input()
  isScrolled: boolean = false;

  get classes(): string {
    return `${this.btnClass}`;
  }

  onButtonClick(event: MouseEvent): void {
    this.btnClick.emit(event);
  }

  ngOnInit(): void {}
}
