import { Component } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ContentComponent, FooterComponent],
  template: `
    <div class="site-shell">
      <app-header />
      <main><app-content /></main>
      <app-footer />
    </div>
  `
})
export class AppComponent {}
