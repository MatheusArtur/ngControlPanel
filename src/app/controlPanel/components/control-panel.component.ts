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
export class ControlPanelComponent {
  machines$: Observable<MachineResponseInterface | null>;

  constructor(private store: Store, private iconsService: IconsService) {
    this.machines$ = this.store.pipe(select(machinesMonitorSelector));
    console.log(this.machines$);
  }

  getMachineIcon(section: any) {
    return this.iconsService.getMachineIcon(section);
  }

  getStateIcon(state: any) {
    return this.iconsService.getStateIcon(state);
  }
}
