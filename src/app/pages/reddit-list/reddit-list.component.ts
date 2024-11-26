import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedditService } from '../../core/services/reddit.service';
import { RedditItem } from '../../interfaces/reddit'; 
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RedditItemComponent } from '../../components/reddit-item/reddit-item.component';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';

@Component({
  selector: 'app-reddit-list',
  standalone: true,
  imports: [CommonModule, RedditItemComponent, ErrorMessageComponent],
  templateUrl: './reddit-list.component.html',
  styleUrls: ['./reddit-list.component.css'],
})
export class RedditListComponent implements OnInit {
  public redditItems$!: Observable<RedditItem[]>;
  public errorMessage!: string;
  public selectedItem: RedditItem | null = null; // Propiedad para manejar el modal

  constructor(private redditService: RedditService) {}

  ngOnInit(): void {
    this.redditItems$ = this.redditService.getRedditList().pipe(
      catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY;
      })
    );
  }

  // Método para abrir el modal
  openModal(item: RedditItem): void {
    this.selectedItem = item;
  }

  // Método para cerrar el modal
  closeModal(): void {
    this.selectedItem = null;
  }

  // Evitar que el clic dentro del modal lo cierre
  stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
  }

  // Método trackBy para optimización en ngFor
  trackByDisplayName(index: number, item: RedditItem): number {
    return item.id;
  }
}
