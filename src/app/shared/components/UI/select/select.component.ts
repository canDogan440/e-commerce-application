import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'select-component',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass'],
})
export class SelectComponent implements OnInit {
  @Input()
  options: Array<any> | undefined

  @Input()
  value: string = '';

  @Output()
  valueChange = new EventEmitter<string>();

  @Output()
  onChange = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  handleChange(event: any) {
    this.valueChange.emit(event.target.value);
    this.onChange.emit(event.target.value);
  }
}
