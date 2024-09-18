import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { cargarUsuario } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
})
export class UsuarioComponent implements OnInit {
  
  user: any;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    
  }

  ngOnInit(): void {
    this.store.select('usuario').subscribe((res) => {
      this.user = res.user;
      
    })
    this.route.params.subscribe(({id}) => {
      this.store.dispatch(cargarUsuario({id}));
    })
  }
  

}
