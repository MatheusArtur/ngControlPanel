import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MachineResponseInterface } from 'src/app/shared/machines/interfaces/machines.interfaces';
import {
  getMachineIcon,
  getStatusIcon,
} from 'src/app/shared/machines/utils/iconMappers';
import { machinesMonitorSelector } from 'src/app/shared/machines/store/machines.selectors';

@Component({
  selector: 'control-nav',
  templateUrl: './control-nav.component.html',
  styleUrls: ['./control-nav.component.scss'],
})
export class ControlNavComponent implements OnInit {
  machines$: Observable<MachineResponseInterface | null>;
  machineList: MachineResponseInterface;

  getMachineIcon: Function;
  getStatusIcon: Function;
  time = new Date();
  intervalReference: any;

  constructor(private store: Store) {
    this.getMachineIcon = getMachineIcon;
    this.getStatusIcon = getStatusIcon;
    this.intervalReference = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  ngOnInit(): void {
    this.initValues();
  }

  initValues(): void {
    this.machines$ = this.store.pipe(select(machinesMonitorSelector));
    this.machines$.subscribe((machines) => (this.machineList = machines));
  }
}
