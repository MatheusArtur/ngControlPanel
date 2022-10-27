import { Action, createReducer, on } from '@ngrx/store';
import { MachinesStateInterface } from 'src/app/shared/machines/interfaces/machines.interfaces';
import {
  getMachinesAction,
  getMachinesSuccessAction,
} from 'src/app/shared/machines/store/machines.actions';

const initialState: MachinesStateInterface = {
  machinesData: null,
};

const machinesReducer = createReducer(
  initialState,
  on(getMachinesAction, (state): MachinesStateInterface => state),
  on(
    getMachinesSuccessAction,
    (state, action): MachinesStateInterface => ({
      ...state,
      machinesData: action.machinesResponse,
    })
  )
);

export function machinesReducers(
  state: MachinesStateInterface,
  action: Action
) {
  return machinesReducer(state, action);
}
