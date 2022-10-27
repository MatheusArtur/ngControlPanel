import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { MachineResponse } from 'src/app/shared/machines/interfaces/machines.interfaces';
import { machinesMonitor } from 'src/app/shared/machines/store/machines.selectors';

@Component({
  selector: 'control-nav',
  templateUrl: './control-nav.component.html',
  styleUrls: ['./control-nav.component.scss'],
})
export class ControlNavComponent {
  machines$: Observable<MachineResponse | null>;

  time = new Date();
  intervalReference: any;

  constructor(private store: Store) {
    this.machines$ = this.store.pipe(select(machinesMonitor));
    this.intervalReference = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
}
