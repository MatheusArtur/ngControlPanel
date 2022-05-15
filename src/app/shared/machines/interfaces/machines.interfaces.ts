export type MachineResponseInterface = {
  machine_section: string;
  machine_state: string;
}[];

export interface MachinesStateInterface {
  machines: MachineResponseInterface | null;
}
