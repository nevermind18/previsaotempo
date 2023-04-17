export class previsatempo{
  cidade: string = ""
  timezone: number = 0
  main: any = main
  weather: any = weather
}

class main{

  temp_max: number = 0
  temp_min: number = 0
  temp: number = 0
  humidity: number = 0
  feels_like: number = 0
}

class weather{
  description: string = ""
}
