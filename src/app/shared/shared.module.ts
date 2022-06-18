import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './components/UI/select/select.component';
import { FooterCardComponent } from './components/layout/footer/footer-card/footer-card.component';
import { IconLinkComponent } from './components/layout/footer/icon-link/icon-link.component';
import { ButtonWithIconComponent } from './components/buttons/button-with-icon/button-with-icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SelectComponent,
    FooterCardComponent,
    IconLinkComponent,
    ButtonWithIconComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    SelectComponent,
    FooterCardComponent,
    IconLinkComponent,
    ButtonWithIconComponent,
  ],
})
export class SharedModule {}
