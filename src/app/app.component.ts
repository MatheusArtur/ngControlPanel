import { Component, OnInit } from '@angular/core';
import { MachinesService } from 'src/app/shared/machines/services/machine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private machineservice: MachinesService) {}

  async ngOnInit(): Promise<void> {
    const machines = await this.machineservice.getMachines();
    console.log(machines);
  }
}
