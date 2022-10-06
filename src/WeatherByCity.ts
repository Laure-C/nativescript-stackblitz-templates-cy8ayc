class _WeatherByCityService {
  private allWeather: CityWeatherModel[] = [];

  addACityWeather() {
    this.allWeather.push(
      {
        cityName: 'Grenoble',
        country: 'France',
        temperature: 22,
        summary: 'Ensoleillé, très peu de vent',
        icon: 'clear-day',
        date: new Date(),
        precipitation: 0,
        vent: 6,
        humidité: 96,
      },
      {
        cityName: 'Lyon',
        country: 'France',
        temperature: 22,
        summary: 'Partiellement nuageux , très peu de vent',
        icon: 'partly-cloudy-day',
        date: new Date(),
        precipitation: 0,
        vent: 7,
        humidité: 92,
      },
      {
        cityName: 'Oulles',
        country: 'France',
        temperature: 15,
        summary: 'Ensoleillé , très peu de vent',
        icon: 'clear-day',
        date: new Date(),
        precipitation: 0,
        vent: 5,
        humidité: 87,
      }
    );
  }

  getAllWeather(): CityWeatherModel[] {
    return this.allWeather;
  }

  getWeatherByCityName(cityName: string): CityWeatherModel | undefined {
    return (
      this.allWeather.find((weather) => weather.cityName === cityName) ||
      undefined
    );
  }
}

export const WeatherByCityService = new _WeatherByCityService();

export interface CityWeatherModel {
  cityName: String;
  country: String;
  temperature: number; //°C
  summary: String;
  icon: String;
  date: Date;
  precipitation: number; //pourcentages
  vent: number; //km/h
  humidité: number; //pourcentages
}
