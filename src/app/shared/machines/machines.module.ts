import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MachinesService } from 'src/app/shared/machines/services/machine.service';

@NgModule({
  imports: [CommonModule],
  providers: [MachinesService],
})
export class MachinesModule {}
