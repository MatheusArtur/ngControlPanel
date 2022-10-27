import { createAction, props } from '@ngrx/store';
import { MachineResponse } from '../interfaces/machines.interfaces';
import { MachineActionTypes } from './machines.enums';

export const getMachinesAction = createAction(MachineActionTypes.GET_MACHINES);

export const getMachinesSuccessAction = createAction(
  MachineActionTypes.GET_MACHINES_SUCCESS,
  props<{ machinesResponse: MachineResponse }>()
);

export const getMachinesFailureAction = createAction(
  MachineActionTypes.GET_MACHINES_FAILURE
);
