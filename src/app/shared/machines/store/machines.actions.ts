import { createAction, props } from '@ngrx/store';
import { MachinesInterface } from 'src/app/shared/machines/interfaces/machines.interface';
import { MachineActionTypes } from 'src/app/shared/machines/store/machines.types';

export const getMachinesAction = createAction(MachineActionTypes.GET_MACHINES);

export const getMachinesSuccessAction = createAction(
  MachineActionTypes.GET_MACHINES_SUCCESS,
  props<MachinesInterface>()
);

export const getMachinesFailureAction = createAction(
  MachineActionTypes.GET_MACHINES_FAILURE
);
