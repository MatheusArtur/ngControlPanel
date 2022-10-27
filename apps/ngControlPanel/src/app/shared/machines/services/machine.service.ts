import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MachineResponse } from '../interfaces/machines.interfaces';

@Injectable()
export class MachinesService {
  constructor(private http: HttpClient) {}
  getMachines(): Observable<MachineResponse> {
    const url = 'http://localhost:3002/machines';
    return this.http.get<MachineResponse>(url);
  }
}
