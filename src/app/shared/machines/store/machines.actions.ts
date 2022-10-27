import { createAction, props } from '@ngrx/store';
import { MachineResponseInterface } from 'src/app/shared/machines/interfaces/machines.interfaces';
import { MachineActionTypes } from 'src/app/shared/machines/store/machines.types';

export const getMachinesAction = createAction(MachineActionTypes.GET_MACHINES);

export const getMachinesSuccessAction = createAction(
  MachineActionTypes.GET_MACHINES_SUCCESS,
  props<{ machinesResponse: MachineResponseInterface }>()
);

export const getMachinesFailureAction = createAction(
  MachineActionTypes.GET_MACHINES_FAILURE
);
