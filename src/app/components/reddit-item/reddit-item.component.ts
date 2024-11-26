import { Component, Input } from '@angular/core';
import { RedditItem } from '../../interfaces/reddit';

@Component({
  selector: 'app-reddit-item',
  standalone: true,
  imports: [],
  templateUrl: './reddit-item.component.html',
  styleUrl: './reddit-item.component.css'
})
export class RedditItemComponent {
  @Input() redditInfo!: RedditItem;  // Recibe los datos
}
