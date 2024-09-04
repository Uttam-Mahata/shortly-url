import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlShortenerService {
  private apiUrl = 'https://srtly.onrender.com/s';

  constructor(private http: HttpClient) {}

  shortenUrl(longUrl: string): Observable<string> {
    return this.http.post(this.apiUrl + '/shorten', longUrl, { responseType: 'text' });
  }

  getLongUrl(shortCode: string): Observable<string> {
    return this.http.get(this.apiUrl + '/' + shortCode, { responseType: 'text' });
  }
}
