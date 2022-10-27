import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MachinesState } from '../interfaces/machines.interfaces';

export const machinesFeature = createFeatureSelector<MachinesState>('machines');

export const machinesMonitor = createSelector(
  machinesFeature,
  (machinesState: MachinesState) => machinesState.machinesData
);
