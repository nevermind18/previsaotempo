import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cordenada } from './cordenada.model';
import { previsatempo } from './previsaotempo.model';

@Injectable({
  providedIn: 'root',
})
export class PrevisaotempoService {
  apiCordenada = 'http://api.openweathermap.org/geo/1.0/direct?q=';
  token = "&appid=82d9f9b95fbaa424d47944ab017a0549"
  httpOptions = {};

  apiPrevisaoTempo = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lang=pt_br&'

  constructor(private httpClient: HttpClient) {}

  public getCordenadas(cidade: string): Observable<cordenada[]>{
    return this.httpClient.get<cordenada[]>(
      this.apiCordenada + cidade + this.token
    )
  }

  public getPrevisaoTempo(lat: number, lon: number): Observable<previsatempo>{
    return this.httpClient.get<previsatempo>(
      this.apiPrevisaoTempo + "lon=" + lon + "&lat="+ lat + this.token
    )
  }
}
