export type MachineInterface = {
  machine_section: string;
  machine_state: string;
};

export type MachineResponseInterface = {
  machines: MachineInterface[];
};

export interface MachinesStateInterface {
  machinesData: MachineResponseInterface | null;
}
