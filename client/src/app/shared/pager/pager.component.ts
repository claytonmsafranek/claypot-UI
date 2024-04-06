import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-pager',
    templateUrl: './pager.component.html',
    styleUrl: './pager.component.scss',
    standalone: true,
    imports: [NgIf, PaginationModule]
})
export class PagerComponent {
  @Input() totalCount?: number;
  @Input() pageSize?: number;
  @Output() pageChanged = new EventEmitter<number>();

  onPagerChanged(event: any) {
    this.pageChanged.emit(event.page);
  }
}
