import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { ControlNavComponent } from 'src/app/controlNav/components/control-nav.component';

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [ControlNavComponent],
  exports: [ControlNavComponent],
})
export class ControlNavModule {}
