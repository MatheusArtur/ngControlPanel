import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ControlPanelComponent } from 'src/app/controlPanel/components/control-panel.component';
import { MatIconModule } from '@angular/material/icon';
import { IconsService } from 'src/app/shared/machines/services/icons.service';

const routes = [
  {
    path: 'control-panel',
    component: ControlPanelComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), MatIconModule],
  declarations: [ControlPanelComponent],
  providers: [IconsService],
})
export class ControlPanelModule {}
