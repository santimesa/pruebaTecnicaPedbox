import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { RedditItem } from '../../interfaces/reddit';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private http: HttpClient) { }

  getRedditList(): Observable<RedditItem[]> {
    console.log('Petición al backend:', this.http.get<RedditItem[]>(`${environment.apiUrlBase}`));
    return this.http.get<RedditItem[]>(`${environment.apiUrlBase}`);
  }
}
