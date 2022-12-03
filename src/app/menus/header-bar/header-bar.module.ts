import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './header-bar.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [HeaderBarComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[HeaderBarComponent]
})
export class HeaderBarModule { }
