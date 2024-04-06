import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-paging-header',
    templateUrl: './paging-header.component.html',
    styleUrl: './paging-header.component.scss',
    standalone: true,
    imports: [NgIf]
})
export class PagingHeaderComponent {
  @Input() pageNumber?: number;
  @Input() pageSize?: number;
  @Input() totalCount?: number;
}
