import { Component } from '@angular/core';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
    NavBarComponent,
    CommonModule,
    RouterModule,
    ToastrModule,
    HttpClientModule
]
})

export class AppComponent {
  title = 'Claypots';


}
