import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  url = 'https://api-ssl.bitly.com/v4/shorten';
  token = 'b62af5071aa80f1a1ea17963e08b51bde297deff'

  constructor(private http: HttpClient) { }

  getUrlShort(nameUrl: string): Observable<any> {

    const body = {
      long_url: nameUrl
    }

    return this.http.post(this.url, body);
  }


}
