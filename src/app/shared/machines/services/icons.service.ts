import { Injectable } from '@angular/core';

@Injectable()
export class IconsService {
  getStateIcon(status: string): string {
    const statuses = {
      running: 'settings_backup_restore',
      warning: 'warning',
      alarm: 'error_outline',
    };

    if (status in statuses) {
      return statuses[status as keyof typeof statuses];
    }
    return 'sync_problem';
  }
  getSectionIcon(section: string): string {
    const sections = {
      Scale: 'system_update_alt',
      Attacher: 'chrome_reader_mode',
      Packer: 'call_to_action',
      Closer: 'grid_on',
    };

    if (section in sections) {
      return sections[section as keyof typeof sections];
    }
    return 'precision_manufacturing';
  }
}
