import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MachinesService } from 'src/app/shared/machines/services/machine.service';
import { getMachinesAction } from 'src/app/shared/machines/store/machines.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private machineservice: MachinesService, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getMachinesAction());
  }
}
