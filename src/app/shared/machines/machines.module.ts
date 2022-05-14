import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MachinesService } from 'src/app/shared/machines/services/machine.service';
import { MachinesEffect } from 'src/app/shared/machines/store/machines.effect';
import { machinesReducers } from 'src/app/shared/machines/store/machines.reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('machines', machinesReducers),
    EffectsModule.forFeature([MachinesEffect]),
  ],
  providers: [MachinesService],
})
export class MachinesModule {}
