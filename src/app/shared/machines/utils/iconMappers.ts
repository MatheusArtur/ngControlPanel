export const getStatusIcon = (status: string): string => {
  const statuses = {
    running: 'settings_backup_restore',
    warning: 'warning',
    alarm: 'error_outline',
  };

  if (status in statuses) {
    return statuses[status as keyof typeof statuses];
  }
  return '';
};

export const getMachineIcon = (section: string): string => {
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
};
