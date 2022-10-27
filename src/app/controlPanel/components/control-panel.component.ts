import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { MachineResponseInterface } from 'src/app/shared/machines/interfaces/machines.interfaces';
import { machinesMonitorSelector } from 'src/app/shared/machines/store/machines.selectors';

@Component({
  selector: 'control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent {
  machines$: Observable<MachineResponseInterface | null>;

  constructor(private store: Store) {
    this.machines$ = this.store.pipe(select(machinesMonitorSelector));
  }
}
