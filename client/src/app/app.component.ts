import { Component } from '@angular/core';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { SectionHeaderComponent } from './core/section-header/section-header.component';
import { NgxSpinnerModule } from 'ngx-spinner';

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
    HttpClientModule,
    SectionHeaderComponent,
    NgxSpinnerModule
]
})

export class AppComponent {
  title = 'Claypots';


}
