import { createSelector } from '@ngrx/store';
import { MachinesInterface } from 'src/app/shared/machines/interfaces/machines.interface';

export const machinesFeatureSelector = (
  state: MachinesInterface
): MachinesInterface => state;

export const machinesMonitorSelector = createSelector(
  machinesFeatureSelector,
  (machinesState: MachinesInterface) => machinesState.machines
);
