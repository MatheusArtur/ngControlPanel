import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MachinesService } from '../machines/services/machine.service';
import { MachinesEffect } from '../machines/store/machines.effect';
import { machinesReducers } from '../machines/store/machines.reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('machines', machinesReducers),
    EffectsModule.forFeature([MachinesEffect]),
  ],
  providers: [MachinesService],
})
export class MachinesModule {}
