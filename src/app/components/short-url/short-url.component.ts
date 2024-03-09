import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from 'src/app/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent implements OnInit {

  nameUrl: string;
  urlShort: string;
  urlProcessed: boolean;
  showError = false;
  textError: string;
  

  constructor(private _shortUrlService: ShortUrlService) {
    this.nameUrl = '';
    this.urlShort = '';
    this.urlProcessed = false;
    this.showError = false;
    this.textError = '';
   }

  ngOnInit(): void {
  }

  processUrl() {
    if (this.nameUrl === '') {
      this.error('La url está vacía, por favor, introduzca la url antes de validar');
      return;
    }
  
    this.urlProcessed = false;
  
    this._shortUrlService.getUrlShort(this.nameUrl).subscribe({
      next: (data) => {
        this.urlProcessed = true;
        this.urlShort = data.link;
      },
      error: (error) => {
        this.nameUrl = '';
        if (error.error.description === 'The value provided is invalid.') {
          this.error('La url ingresada no es válida');
        }
      },
    });
  }
  

  error(value:string){
    this.showError = true;
    this.textError = value;

    setTimeout(() => {
      this.showError = false;
    },4000);
  }
}
