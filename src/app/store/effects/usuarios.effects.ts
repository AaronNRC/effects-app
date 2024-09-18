import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { cargarUsuarios, cargarUsuariosError, cargarUsuariosSuccess } from "../actions";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { UsuarioService } from "src/app/services/usuario.service";

@Injectable()
export class UsuariosEffects {

    constructor(
        private actions$: Actions,
        private service: UsuarioService
    ){}

    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType( cargarUsuarios ),
            mergeMap(
                () => this.service.getUsers().pipe(
                    map(
                        (users) => cargarUsuariosSuccess({ usuarios: users })
                    ), 
                    catchError( err => of(cargarUsuariosError({ payload: err })) )
                )
            )
        )
    );

}