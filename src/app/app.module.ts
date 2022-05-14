import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { MachinesModule } from 'src/app/shared/machines/machines.module';
import { HttpClientModule } from '@angular/common/http';
import { ControlPanelModule } from 'src/app/controlPanel/control-panel.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ControlPanelModule,
    HttpClientModule,
    AppRoutingModule,
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
