export type Machine = {
  machine_section: string;
  machine_state: string;
  sectionIcon: string | null;
  stateIcon: string | null;
};

export type MachineResponse = {
  machines: Machine[];
};

export interface MachinesState {
  machinesData: MachineResponse | null;
}
