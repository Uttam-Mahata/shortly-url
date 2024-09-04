import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlShortenerService } from '../url-shortener.service';

@Component({
  selector: 'app-redirect',
  template: '<p>Redirecting...</p>',
})
export class RedirectComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private urlShortenerService: UrlShortenerService
  ) { }

  ngOnInit(): void {
    const shortCode = this.route.snapshot.paramMap.get('shortCode');
    if (shortCode) {
      this.urlShortenerService.getLongUrl(shortCode).subscribe(
        (longUrl: string) => {
          window.location.href = longUrl;
        },
        (error) => {
          console.error('Error redirecting', error);
        }
      );
    }
  }
}
