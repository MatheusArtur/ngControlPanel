import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MachineListType } from 'src/app/shared/machines/interfaces/machines.interfaces';
import {
  getMachineIcon,
  getStatusIcon,
} from 'src/app/shared/machines/utils/iconMappers';
import { machinesMonitorSelector } from 'src/app/shared/machines/store/machines.selectors';

@Component({
  selector: 'control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent implements OnInit {
  machines$: Observable<MachineListType | null>;
  machineList: MachineListType | null = null;
  getMachineIcon: Function;
  getStatusIcon: Function;

  constructor(private store: Store) {
    this.machines$ = this.store.pipe(select(machinesMonitorSelector));
    this.getMachineIcon = getMachineIcon;
    this.getStatusIcon = getStatusIcon;
  }

  ngOnInit(): void {
    this.initValues();
  }

  initValues(): void {
    this.machines$.subscribe((machineSub) => (this.machineList = machineSub));
  }
}
