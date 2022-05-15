import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { MachineResponseInterface } from 'src/app/shared/machines/interfaces/machines.interfaces';
import { IconsService } from 'src/app/shared/machines/services/icons.service';
import { machinesMonitorSelector } from 'src/app/shared/machines/store/machines.selectors';

@Component({
  selector: 'control-nav',
  templateUrl: './control-nav.component.html',
  styleUrls: ['./control-nav.component.scss'],
})
export class ControlNavComponent implements OnInit {
  machines$: Observable<MachineResponseInterface | null>;
  machineList: MachineResponseInterface = [];

  time = new Date();
  intervalReference: any;

  constructor(private store: Store, private iconsService: IconsService) {
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

  getMachineIcon(section) {
    return this.iconsService.getMachineIcon(section);
  }

  getStateIcon(state) {
    return this.iconsService.getStateIcon(state);
  }
}
