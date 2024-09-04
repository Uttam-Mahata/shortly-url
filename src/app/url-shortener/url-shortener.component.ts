import { Component } from '@angular/core';
import { UrlShortenerService } from '../url-shortener.service';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.css']
})
export class UrlShortenerComponent {
  longUrl: string = '';
  shortUrl: string | null = null;
  apiUrl = 'https://srtly.onrender.com';

  constructor(private urlShortenerService: UrlShortenerService) {}

  shortenUrl() {
    this.urlShortenerService.shortenUrl(this.longUrl).subscribe(response => {
      this.shortUrl = this.apiUrl + '/srt/ly/' + response;
    });
  }
}
