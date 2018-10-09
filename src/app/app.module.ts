import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { KeysPipe } from './pipes/keys.pipe';
import { AuthorizedPipe } from './pipes/authorized.pipe';
import { IsRolePipe } from './pipes/is-role.pipe';

@NgModule({
  declarations: [
    AppComponent,
    KeysPipe,
    AuthorizedPipe,
    IsRolePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
