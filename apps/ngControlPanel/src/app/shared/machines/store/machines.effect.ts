import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { MachineResponse } from '../interfaces/machines.interfaces';

import { MachinesService } from '../services/machine.service';
import {
  getMachinesAction,
  getMachinesFailureAction,
  getMachinesSuccessAction,
} from '../store/machines.actions';
import { IconsService } from '../services/icons.service';

@Injectable()
export class MachinesEffect {
  constructor(
    private actions$: Actions,
    private machinesService: MachinesService,
    private iconsService: IconsService
  ) {}

  getmachines$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getMachinesAction),
      switchMap(() => {
        return this.machinesService.getMachines().pipe(
          map((machinesResponse: MachineResponse) => {
            machinesResponse.machines.map((machine) => {
              machine.sectionIcon = this.iconsService.getSectionIcon(
                machine.machine_section
              );
              machine.stateIcon = this.iconsService.getStateIcon(
                machine.machine_state
              );
            });
            return getMachinesSuccessAction({ machinesResponse });
          }),
          catchError(() => {
            return of(getMachinesFailureAction());
          })
        );
      })
    )
  );
}
