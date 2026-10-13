import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isLight = false;
  menuOpen = false;

  ngOnInit(): void {
    this.isLight = localStorage.getItem('portfolio-theme') === 'light';
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isLight = !this.isLight;
    this.applyTheme();
  }

  private applyTheme(): void {
    const theme = this.isLight ? 'light' : 'dark';
    document.documentElement.dataset['theme'] = theme;
    localStorage.setItem('portfolio-theme', theme);
  }
}
