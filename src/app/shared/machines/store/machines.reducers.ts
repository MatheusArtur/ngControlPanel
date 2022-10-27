import { Action, createReducer, on } from '@ngrx/store';
import { MachinesState } from 'src/app/shared/machines/interfaces/machines.interfaces';
import {
  getMachinesAction,
  getMachinesSuccessAction,
} from 'src/app/shared/machines/store/machines.actions';

const initialState: MachinesState = {
  machinesData: null,
};

const machinesReducer = createReducer(
  initialState,
  on(getMachinesAction, (state): MachinesState => state),
  on(
    getMachinesSuccessAction,
    (state, action): MachinesState => ({
      ...state,
      machinesData: action.machinesResponse,
    })
  )
);

export function machinesReducers(state: MachinesState, action: Action) {
  return machinesReducer(state, action);
}
