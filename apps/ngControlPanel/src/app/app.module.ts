import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from '../app/app-routing.module';
import { AppComponent } from '../app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { MachinesModule } from '../app/shared/machines/machines.module';
import { HttpClientModule } from '@angular/common/http';
import { ControlPanelModule } from '../app/controlPanel/control-panel.module';
import { ControlNavModule } from '../app/controlNav/control-nav.modules';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ControlPanelModule,
    HttpClientModule,
    AppRoutingModule,
    ControlNavModule,
    BrowserAnimationsModule,
    MatIconModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
    MachinesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
