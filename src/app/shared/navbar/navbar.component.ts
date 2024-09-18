import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  constructor( private router: Router ){

  }

  irUsuario(value: string): void {
    if (!value) {
      return;
    }
    this.router.navigate(['/usuario', value])
  }

}
