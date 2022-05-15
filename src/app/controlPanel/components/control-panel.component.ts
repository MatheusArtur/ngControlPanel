import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { MachineResponseInterface } from 'src/app/shared/machines/interfaces/machines.interfaces';
import { IconsService } from 'src/app/shared/machines/services/icons.service';
import { machinesMonitorSelector } from 'src/app/shared/machines/store/machines.selectors';

@Component({
  selector: 'control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent implements OnInit {
  machines$: Observable<MachineResponseInterface | null>;
  machineList: MachineResponseInterface = [];

  constructor(private store: Store, private iconsService: IconsService) {}

  ngOnInit(): void {
    this.initValues();
  }

  initValues(): void {
    this.machines$ = this.store.pipe(select(machinesMonitorSelector));
    this.machines$.subscribe((machineSub) => (this.machineList = machineSub));
  }

  getMachineIcon(section) {
    return this.iconsService.getMachineIcon(section);
  }

  getStateIcon(state) {
    return this.iconsService.getStateIcon(state);
  }
}
