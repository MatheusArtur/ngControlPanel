import { createSelector } from '@ngrx/store';
import { MachinesStateInterface } from 'src/app/shared/machines/interfaces/machines.interfaces';

export const machinesFeatureSelector = (state: any): MachinesStateInterface =>
  state.machines;

export const machinesMonitorSelector = createSelector(
  machinesFeatureSelector,
  (machinesState: MachinesStateInterface) => machinesState.machines
);
