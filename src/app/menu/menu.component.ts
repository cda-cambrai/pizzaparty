import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  // Par défaut, le menu est fermé
  isCollapsed = false;
  // Le navTitle est défini comme un attribut HTML
  @Input() navTitle: string;
  // La color a une valeur par défaut
  @Input() color = 'light';

  changeTheme() {
    if (this.color === 'light') {
      this.color = 'dark';
    } else {
      this.color = 'light';
    }
  }

  toggleCollapseNavbar() {
    console.log('test');

    // Si le menu est fermé
    if (!this.isCollapsed) {
      this.isCollapsed = true;
    } else {
      this.isCollapsed = false;
    }
    // Raccourci par rapport au if
    // this.isCollapsed = !this.isCollapsed;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
