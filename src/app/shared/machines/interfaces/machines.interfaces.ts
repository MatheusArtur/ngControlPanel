export type MachineInterface = {
  machine_section: string;
  machine_state: string;
  sectionIcon: string | null;
  stateIcon: string | null;
};

export type MachineResponseInterface = {
  machines: MachineInterface[];
};

export interface MachinesStateInterface {
  machinesData: MachineResponseInterface | null;
}
