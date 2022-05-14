import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MachinesInterface } from 'src/app/shared/machines/interfaces/machines.interface';

import jsonData from './responseMock.json';

@Injectable()
export class MachinesService {
  getMachines(): Promise<MachinesInterface> {
    return Promise.resolve(jsonData);
  }
}
