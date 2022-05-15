import { Action, createReducer, on } from '@ngrx/store';
import { MachinesInterface } from 'src/app/shared/machines/interfaces/machines.interfaces';
import {
  getMachinesAction,
  getMachinesSuccessAction,
} from 'src/app/shared/machines/store/machines.actions';

const initialState: MachinesInterface = {
  machines: [],
};

const machinesReducer = createReducer(
  initialState,
  on(getMachinesAction, (state): MachinesInterface => state),
  on(
    getMachinesSuccessAction,
    (state, action): MachinesInterface => ({
      ...state,
      machines: action.machines,
    })
  )
);

export function machinesReducers(state: MachinesInterface, action: Action) {
  return machinesReducer(state, action);
}
