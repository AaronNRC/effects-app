import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { cargarUsuario, cargarUsuarioError, cargarUsuarioSuccess } from "../actions";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { UsuarioService } from "src/app/services/usuario.service";

@Injectable()
export class UsuarioEffects {

    constructor(
        private actions$: Actions,
        private service: UsuarioService
    ){}

    cargarUsuario$ = createEffect(
        () => this.actions$.pipe(
            ofType( cargarUsuario ),
            mergeMap(
                (action) => this.service.getUserByid(action.id).pipe(
                    map(
                        (user) => cargarUsuarioSuccess({ usuario: user })
                    ), 
                    catchError( err => of(cargarUsuarioError({ payload: err })) )
                )
            )
        )
    );

}