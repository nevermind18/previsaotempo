import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PrevisaotempoService } from 'src/app/service/previsaotempo.service';

@Component({
  selector: 'app-previsaotempo',
  templateUrl: './previsaotempo.component.html',
  styleUrls: ['./previsaotempo.component.css'],
})
export class PrevisaotempoComponent implements OnInit {
  lat: number = 0;
  lon: number = 0;
  cidadeErro: String = 'A cidade informada não existe';
  cidadeErrada: boolean = false;
  tempo: any;

  cordenada = this.fb.group({
    name: [''],
    temp_max: [''],
    temp_min: [''],
    temp: [''],
    humidity: [''],
    feels_like: [''],
    description: ['']
  });

  constructor(
    private fb: FormBuilder,
    private previsaoService: PrevisaotempoService
  ) {}

  getCordenadas() {
    this.previsaoService
      .getCordenadas(this.cordenada.value?.name || 'London')
      .subscribe((data) => {
        if (data[0] != undefined) {
          this.cidadeErrada = false;
          this.lat = data[0].lat;
          this.lon = data[0].lon;
          this.getPrivisaoTempo();
        } else {
          this.cidadeErrada = true;
        }
      });
  }

  getPrivisaoTempo() {
    this.previsaoService
      .getPrevisaoTempo(this.lat, this.lon)
      .subscribe((data) => {
        console.log(data);

        this.cordenada.patchValue({
          "temp_max": Math. floor(data.main.temp_max) + "°C",
          "temp_min": Math. floor(data.main.temp_min) + "°C",
          "temp": Math. floor(data.main.temp) + "°C",
          "humidity": data.main.humidity + "%",
          "feels_like": Math. floor(data.main.feels_like) + "°C",
          "description": data.weather[0].description
        })
      });
  }

  limpar(){
    this.cidadeErrada = false;
    this.cordenada.patchValue({
      "temp_max": "",
      "temp_min": "",
      "temp": "",
      "humidity": "",
      "feels_like": "",
      "description": "",
      "name":"",
    })
  }

  ngOnInit(): void {}
}
