/** angular */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/** end angular */

/** classes */
import { AppComponent } from './app.component';
import { MainInfosComponent } from './components/main-infos/main-infos.component';
import { AppRoutingModule } from './app.module.routing';
import { ImageWithTooltipComponent } from './shared/components/image-with-tooltip/image-with-tooltip.component';
/** end classes */

@NgModule({
  declarations: [
    AppComponent,
    MainInfosComponent,
    ImageWithTooltipComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTooltipModule,
    MatIconModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
