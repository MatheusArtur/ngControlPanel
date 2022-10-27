import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { MachineResponse } from 'src/app/shared/machines/interfaces/machines.interfaces';
import { machinesMonitor } from 'src/app/shared/machines/store/machines.selectors';

@Component({
  selector: 'control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent {
  machines$: Observable<MachineResponse | null>;

  constructor(private store: Store) {
    this.machines$ = this.store.pipe(select(machinesMonitor));
  }
}
