export type MachineListType = {
  machine_section: string;
  machine_state: string;
}[];

export interface MachinesInterface {
  machines: MachineListType | null;
}
