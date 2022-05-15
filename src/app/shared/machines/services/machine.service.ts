import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MachinesInterface } from 'src/app/shared/machines/interfaces/machines.interfaces';

@Injectable()
export class MachinesService {
  constructor(private http: HttpClient) {}
  getMachines(): Observable<MachinesInterface> {
    const url = 'http://localhost:3002/machines';
    return this.http
      .get<MachinesInterface>(url)
      .pipe(map((response: MachinesInterface) => response));
  }
}
