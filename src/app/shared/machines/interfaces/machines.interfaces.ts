export type MachineResponseInterface = {
  machine_section: string;
  machine_state: string;
}[];

export interface MachinesInterface {
  machines: MachineResponseInterface | null;
}
