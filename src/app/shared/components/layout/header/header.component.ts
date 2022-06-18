import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {faUser} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  @Output()
  sidebarStateEvent = new EventEmitter<any>();

  handleSidebarState() {
    this.sidebarStateEvent.emit();
  }
  options = [
    { value: '1', label: 'one' },
    { value: '2', label: 'two' },
    { value: '3', label: 'three' },
  ];

  isScrolled: boolean = false;

  faUser : any = faUser;

  @Input()
  isPageCheckout: boolean | undefined;

  @HostListener('window:scroll', ['$event'])
  catchScrollEvent(event: Event) {
    let window = event.currentTarget as Window;
    if (window.scrollY > 80) {
      this.isScrolled = true;
    } else if (window.scrollY === 0) {
      this.isScrolled = false;
    }
  }

  ngOnInit(): void {}
}
