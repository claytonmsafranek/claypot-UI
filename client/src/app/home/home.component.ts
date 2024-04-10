import { Component } from '@angular/core';
import { CarouselComponent, CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    standalone: true,
    imports: [
      CarouselModule
    ]
})
export class HomeComponent {

}
