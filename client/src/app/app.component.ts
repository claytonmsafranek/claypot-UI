import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      NavBarComponent,
      CommonModule,
      HomeModule,
      RouterModule
    ]
})

export class AppComponent {
  title = 'Claypots';


}
