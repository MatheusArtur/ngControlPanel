import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { MachinesInterface } from 'src/app/shared/machines/interfaces/machines.interfaces';

import { MachinesService } from 'src/app/shared/machines/services/machine.service';
import {
  getMachinesAction,
  getMachinesFailureAction,
  getMachinesSuccessAction,
} from 'src/app/shared/machines/store/machines.actions';

@Injectable()
export class MachinesEffect {
  constructor(
    private actions$: Actions,
    private machinesService: MachinesService
  ) {}

  getmachines$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getMachinesAction),
      switchMap(() => {
        return this.machinesService.getMachines().pipe(
          map((response: MachinesInterface) => {
            return getMachinesSuccessAction(response);
          }),
          catchError(() => {
            return of(getMachinesFailureAction());
          })
        );
      })
    )
  );
}
