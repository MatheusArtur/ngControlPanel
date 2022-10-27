import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MachinesStateInterface } from 'src/app/shared/machines/interfaces/machines.interfaces';

export const machinesFeatureSelector =
  createFeatureSelector<MachinesStateInterface>('machines');

export const machinesMonitorSelector = createSelector(
  machinesFeatureSelector,
  (machinesState: MachinesStateInterface) => machinesState.machinesData
);
