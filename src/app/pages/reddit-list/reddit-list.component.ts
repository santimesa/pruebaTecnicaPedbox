import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { RedditService } from '../../core/services/reddit.service';
import { RedditItem } from '../../interfaces/reddit';  // Asegúrate de importar el tipo RedditItem
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RedditItemComponent } from '../../components/reddit-item/reddit-item.component';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';

@Component({
  selector: 'app-reddit-list',
  standalone: true,
  imports: [CommonModule, RedditItemComponent, ErrorMessageComponent], // Agrega CommonModule aquí
  templateUrl: './reddit-list.component.html',
  styleUrls: ['./reddit-list.component.css'],
})
export class RedditListComponent implements OnInit {
  public redditItems$!: Observable<RedditItem[]>;
  public errorMessage!: string;

  constructor(private redditService: RedditService) {}

  ngOnInit(): void {
    this.redditItems$ = this.redditService.getRedditList().pipe(
      catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY;
      })
    );
  }

  // Método trackByDisplayName fuera de ngOnInit
  trackByDisplayName(index: number, item: RedditItem): number {
    return item.id;  // Usa el id para hacer el seguimiento de los elementos
  }
}
