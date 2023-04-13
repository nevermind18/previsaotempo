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
  padrao: string = 'London';
  cidadeErro: String = 'A cidade informada não existe';
  cidadeErrada: boolean = false;

  cordenada = this.fb.group({
    cidade: [''],
  });

  constructor(
    private fb: FormBuilder,
    private previsaoService: PrevisaotempoService
  ) {}

  getCordenadas() {
    this.previsaoService
      .getCordenadas(this.cordenada.value?.cidade || 'London')
      .subscribe((data) => {
        if (data[0] != undefined) {
          this.cidadeErrada = false;
          this.lat = data[0].lat;
          this.lon = data[0].lon;
        } else {
          this.cidadeErrada = true;
        }
      });
  }

  ngOnInit(): void {}
}
