import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { cargarUsuarios } from 'src/app/store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
})
export class ListaComponent implements OnInit {
  
  users: Usuario[] = [];
  loading = false;
  error: any;

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.store.select('usuarios').subscribe((res) => {
      this.users = res.users;
      this.loading = res.loading;
      this.error = res.error;
      
    })
    this.store.dispatch( cargarUsuarios() );
    // this.service.getUsers().subscribe((res: any) => {
    //   console.log(res);
      
    //   this.users = res;
    // }
    // )

  }

}
