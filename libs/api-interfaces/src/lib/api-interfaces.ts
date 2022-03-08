export interface Message {
  message: string;
}

export interface City {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: {
    lon: number;
    lat: number;
  };
}

export interface WeatherResp {
  lat:             number;
  lon:             number;
  timezone:        string;
  timezone_offset: number;
  current:         Current;
  minutely:        Minutely[];
  hourly:          Current[];
  daily:           Daily[];
}

export interface Current {
  dt:         number;
  sunrise?:   number;
  sunset?:    number;
  temp:       number;
  feels_like: number;
  pressure:   number;
  humidity:   number;
  dew_point:  number;
  uvi:        number;
  clouds:     number;
  visibility: number;
  wind_speed: number;
  wind_deg:   number;
  weather:    Weather[];
  wind_gust?: number;
  pop?:       number;
}

export interface Weather {
  id:          number;
  main:        Main;
  description: Description;
  icon:        string;
}

export enum Description {
  BrokenClouds = "broken clouds",
  ClearSky = "clear sky",
  FewClouds = "few clouds",
  LightRain = "light rain",
  ScatteredClouds = "scattered clouds",
}

export enum Main {
  Clear = "Clear",
  Clouds = "Clouds",
  Rain = "Rain",
}

export interface Daily {
  dt:         number;
  sunrise:    number;
  sunset:     number;
  moonrise:   number;
  moonset:    number;
  moon_phase: number;
  temp:       Temp;
  feels_like: FeelsLike;
  pressure:   number;
  humidity:   number;
  dew_point:  number;
  wind_speed: number;
  wind_deg:   number;
  wind_gust:  number;
  weather:    Weather[];
  clouds:     number;
  pop:        number;
  uvi:        number;
  rain?:      number;
}

export interface FeelsLike {
  day:   number;
  night: number;
  eve:   number;
  morn:  number;
}

export interface Temp {
  day:   number;
  min:   number;
  max:   number;
  night: number;
  eve:   number;
  morn:  number;
}

export interface Minutely {
  dt:            number;
  precipitation: number;
}



// export interface OneCallWeather {
//   lat: number;
//   lon: number;
//   timezone: 'Pacific/Auckland';
//   timezone_offset: number;
//   current: {
//     dt: number;
//     sunrise: number;
//     sunset: number;
//     temp: number;
//     feels_like: number;
//     pressure: number;
//     humidity: number;
//     dew_point: number;
//     uvi: number;
//     clouds: number;
//     visibility: number;
//     wind_speed: number;
//     wind_deg: number;
//     weather: [
//       { id: number; main: 'Clouds'; description: 'scattered clouds'; icon: '03d' }
//     ];
//   };
//   minutely: [
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number },
//     { dt: number; precipitation: number }
//   ];
//   hourly: [
//     {
//       dt: 1646697600;
//       temp: 25.02;
//       feels_like: 25.2;
//       pressure: 1022;
//       humidity: 62;
//       dew_point: 17.24;
//       uvi: 9.75;
//       clouds: 37;
//       visibility: 10000;
//       wind_speed: 4.76;
//       wind_deg: 48;
//       wind_gust: 6.67;
//       weather: [
//         {
//           id: 802;
//           main: 'Clouds';
//           description: 'scattered clouds';
//           icon: '03d';
//         }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646701200;
//       temp: 25.18;
//       feels_like: 25.42;
//       pressure: 1022;
//       humidity: 64;
//       dew_point: 17.89;
//       uvi: 9.19;
//       clouds: 40;
//       visibility: 10000;
//       wind_speed: 5.62;
//       wind_deg: 43;
//       wind_gust: 7.13;
//       weather: [
//         {
//           id: 802;
//           main: 'Clouds';
//           description: 'scattered clouds';
//           icon: '03d';
//         }
//       ];
//       pop: 0.08;
//     },
//     {
//       dt: 1646704800;
//       temp: 24.99;
//       feels_like: 25.16;
//       pressure: 1022;
//       humidity: 62;
//       dew_point: 17.21;
//       uvi: 7.59;
//       clouds: 33;
//       visibility: 10000;
//       wind_speed: 5.71;
//       wind_deg: 41;
//       wind_gust: 7.35;
//       weather: [
//         {
//           id: 802;
//           main: 'Clouds';
//           description: 'scattered clouds';
//           icon: '03d';
//         }
//       ];
//       pop: 0.04;
//     },
//     {
//       dt: 1646708400;
//       temp: 24.73;
//       feels_like: 24.88;
//       pressure: 1022;
//       humidity: 62;
//       dew_point: 16.96;
//       uvi: 5.17;
//       clouds: 29;
//       visibility: 10000;
//       wind_speed: 5.5;
//       wind_deg: 41;
//       wind_gust: 7.28;
//       weather: [
//         {
//           id: 802;
//           main: 'Clouds';
//           description: 'scattered clouds';
//           icon: '03d';
//         }
//       ];
//       pop: 0.04;
//     },
//     {
//       dt: 1646712000;
//       temp: 24.14;
//       feels_like: 24.23;
//       pressure: 1021;
//       humidity: 62;
//       dew_point: 16.41;
//       uvi: 2.89;
//       clouds: 24;
//       visibility: 10000;
//       wind_speed: 5.62;
//       wind_deg: 40;
//       wind_gust: 7.23;
//       weather: [
//         { id: 801; main: 'Clouds'; description: 'few clouds'; icon: '02d' }
//       ];
//       pop: 0.04;
//     },
//     {
//       dt: 1646715600;
//       temp: 23.17;
//       feels_like: 23.29;
//       pressure: 1022;
//       humidity: 67;
//       dew_point: 16.71;
//       uvi: 1.05;
//       clouds: 18;
//       visibility: 10000;
//       wind_speed: 5.66;
//       wind_deg: 43;
//       wind_gust: 7.33;
//       weather: [
//         { id: 801; main: 'Clouds'; description: 'few clouds'; icon: '02d' }
//       ];
//       pop: 0.02;
//     },
//     {
//       dt: 1646719200;
//       temp: 21.59;
//       feels_like: 21.66;
//       pressure: 1022;
//       humidity: 71;
//       dew_point: 16.12;
//       uvi: 0.21;
//       clouds: 11;
//       visibility: 10000;
//       wind_speed: 5.09;
//       wind_deg: 49;
//       wind_gust: 7.24;
//       weather: [
//         { id: 801; main: 'Clouds'; description: 'few clouds'; icon: '02d' }
//       ];
//       pop: 0.02;
//     },
//     {
//       dt: 1646722800;
//       temp: 20.59;
//       feels_like: 20.66;
//       pressure: 1022;
//       humidity: 75;
//       dew_point: 15.88;
//       uvi: 0;
//       clouds: 11;
//       visibility: 10000;
//       wind_speed: 4.49;
//       wind_deg: 51;
//       wind_gust: 7.56;
//       weather: [
//         { id: 801; main: 'Clouds'; description: 'few clouds'; icon: '02n' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646726400;
//       temp: 20.2;
//       feels_like: 20.23;
//       pressure: 1023;
//       humidity: 75;
//       dew_point: 15.59;
//       uvi: 0;
//       clouds: 10;
//       visibility: 10000;
//       wind_speed: 4.52;
//       wind_deg: 55;
//       wind_gust: 7.57;
//       weather: [
//         { id: 800; main: 'Clear'; description: 'clear sky'; icon: '01n' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646730000;
//       temp: 19.92;
//       feels_like: 19.93;
//       pressure: 1023;
//       humidity: 75;
//       dew_point: 15.38;
//       uvi: 0;
//       clouds: 7;
//       visibility: 10000;
//       wind_speed: 4.46;
//       wind_deg: 56;
//       wind_gust: 7.73;
//       weather: [
//         { id: 800; main: 'Clear'; description: 'clear sky'; icon: '01n' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646733600;
//       temp: 19.65;
//       feels_like: 19.66;
//       pressure: 1024;
//       humidity: 76;
//       dew_point: 15.24;
//       uvi: 0;
//       clouds: 5;
//       visibility: 10000;
//       wind_speed: 4.18;
//       wind_deg: 57;
//       wind_gust: 7.71;
//       weather: [
//         { id: 800; main: 'Clear'; description: 'clear sky'; icon: '01n' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646737200;
//       temp: 19.41;
//       feels_like: 19.42;
//       pressure: 1024;
//       humidity: 77;
//       dew_point: 15.13;
//       uvi: 0;
//       clouds: 5;
//       visibility: 10000;
//       wind_speed: 4.02;
//       wind_deg: 64;
//       wind_gust: 7.63;
//       weather: [
//         { id: 800; main: 'Clear'; description: 'clear sky'; icon: '01n' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646740800;
//       temp: 19.09;
//       feels_like: 19.07;
//       pressure: 1023;
//       humidity: 77;
//       dew_point: 14.96;
//       uvi: 0;
//       clouds: 4;
//       visibility: 10000;
//       wind_speed: 3.84;
//       wind_deg: 74;
//       wind_gust: 7.52;
//       weather: [
//         { id: 800; main: 'Clear'; description: 'clear sky'; icon: '01n' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646744400;
//       temp: 18.56;
//       feels_like: 18.53;
//       pressure: 1023;
//       humidity: 79;
//       dew_point: 14.9;
//       uvi: 0;
//       clouds: 9;
//       visibility: 10000;
//       wind_speed: 3.44;
//       wind_deg: 83;
//       wind_gust: 7;
//       weather: [
//         { id: 800; main: 'Clear'; description: 'clear sky'; icon: '01n' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646748000;
//       temp: 18.19;
//       feels_like: 18.18;
//       pressure: 1023;
//       humidity: 81;
//       dew_point: 14.76;
//       uvi: 0;
//       clouds: 10;
//       visibility: 10000;
//       wind_speed: 3.31;
//       wind_deg: 92;
//       wind_gust: 6.75;
//       weather: [
//         { id: 800; main: 'Clear'; description: 'clear sky'; icon: '01n' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646751600;
//       temp: 18.02;
//       feels_like: 17.97;
//       pressure: 1023;
//       humidity: 80;
//       dew_point: 14.47;
//       uvi: 0;
//       clouds: 16;
//       visibility: 10000;
//       wind_speed: 3.05;
//       wind_deg: 97;
//       wind_gust: 6.33;
//       weather: [
//         { id: 801; main: 'Clouds'; description: 'few clouds'; icon: '02n' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646755200;
//       temp: 17.93;
//       feels_like: 17.87;
//       pressure: 1023;
//       humidity: 80;
//       dew_point: 14.27;
//       uvi: 0;
//       clouds: 19;
//       visibility: 10000;
//       wind_speed: 3.03;
//       wind_deg: 97;
//       wind_gust: 5.98;
//       weather: [
//         { id: 801; main: 'Clouds'; description: 'few clouds'; icon: '02n' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646758800;
//       temp: 17.44;
//       feels_like: 17.35;
//       pressure: 1023;
//       humidity: 81;
//       dew_point: 14.12;
//       uvi: 0;
//       clouds: 16;
//       visibility: 10000;
//       wind_speed: 2.62;
//       wind_deg: 102;
//       wind_gust: 5.21;
//       weather: [
//         { id: 801; main: 'Clouds'; description: 'few clouds'; icon: '02n' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646762400;
//       temp: 17.16;
//       feels_like: 17.12;
//       pressure: 1023;
//       humidity: 84;
//       dew_point: 14.22;
//       uvi: 0;
//       clouds: 14;
//       visibility: 10000;
//       wind_speed: 2.56;
//       wind_deg: 100;
//       wind_gust: 5.11;
//       weather: [
//         { id: 801; main: 'Clouds'; description: 'few clouds'; icon: '02n' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646766000;
//       temp: 17.59;
//       feels_like: 17.57;
//       pressure: 1024;
//       humidity: 83;
//       dew_point: 14.63;
//       uvi: 0.29;
//       clouds: 22;
//       visibility: 10000;
//       wind_speed: 2.59;
//       wind_deg: 99;
//       wind_gust: 5.47;
//       weather: [
//         { id: 801; main: 'Clouds'; description: 'few clouds'; icon: '02d' }
//       ];
//       pop: 0.04;
//     },
//     {
//       dt: 1646769600;
//       temp: 19.42;
//       feels_like: 19.38;
//       pressure: 1024;
//       humidity: 75;
//       dew_point: 14.76;
//       uvi: 1.22;
//       clouds: 33;
//       visibility: 10000;
//       wind_speed: 3.16;
//       wind_deg: 91;
//       wind_gust: 6.22;
//       weather: [
//         {
//           id: 802;
//           main: 'Clouds';
//           description: 'scattered clouds';
//           icon: '03d';
//         }
//       ];
//       pop: 0.04;
//     },
//     {
//       dt: 1646773200;
//       temp: 21.09;
//       feels_like: 20.93;
//       pressure: 1024;
//       humidity: 64;
//       dew_point: 14;
//       uvi: 2.92;
//       clouds: 37;
//       visibility: 10000;
//       wind_speed: 3.77;
//       wind_deg: 81;
//       wind_gust: 6.05;
//       weather: [
//         {
//           id: 802;
//           main: 'Clouds';
//           description: 'scattered clouds';
//           icon: '03d';
//         }
//       ];
//       pop: 0.04;
//     },
//     {
//       dt: 1646776800;
//       temp: 22.56;
//       feels_like: 22.33;
//       pressure: 1024;
//       humidity: 56;
//       dew_point: 13.25;
//       uvi: 5.82;
//       clouds: 28;
//       visibility: 10000;
//       wind_speed: 3.88;
//       wind_deg: 74;
//       wind_gust: 5.84;
//       weather: [
//         {
//           id: 802;
//           main: 'Clouds';
//           description: 'scattered clouds';
//           icon: '03d';
//         }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646780400;
//       temp: 23.54;
//       feels_like: 23.31;
//       pressure: 1023;
//       humidity: 52;
//       dew_point: 12.99;
//       uvi: 8.1;
//       clouds: 23;
//       visibility: 10000;
//       wind_speed: 3.68;
//       wind_deg: 66;
//       wind_gust: 5.45;
//       weather: [
//         { id: 801; main: 'Clouds'; description: 'few clouds'; icon: '02d' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646784000;
//       temp: 24.37;
//       feels_like: 24.14;
//       pressure: 1023;
//       humidity: 49;
//       dew_point: 12.76;
//       uvi: 9.25;
//       clouds: 19;
//       visibility: 10000;
//       wind_speed: 3.71;
//       wind_deg: 52;
//       wind_gust: 5.23;
//       weather: [
//         { id: 801; main: 'Clouds'; description: 'few clouds'; icon: '02d' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646787600;
//       temp: 24.86;
//       feels_like: 24.65;
//       pressure: 1022;
//       humidity: 48;
//       dew_point: 12.93;
//       uvi: 9.59;
//       clouds: 0;
//       visibility: 10000;
//       wind_speed: 3.93;
//       wind_deg: 44;
//       wind_gust: 5.35;
//       weather: [
//         { id: 800; main: 'Clear'; description: 'clear sky'; icon: '01d' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646791200;
//       temp: 24.87;
//       feels_like: 24.67;
//       pressure: 1022;
//       humidity: 48;
//       dew_point: 12.93;
//       uvi: 7.92;
//       clouds: 0;
//       visibility: 10000;
//       wind_speed: 4.4;
//       wind_deg: 39;
//       wind_gust: 5.63;
//       weather: [
//         { id: 800; main: 'Clear'; description: 'clear sky'; icon: '01d' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646794800;
//       temp: 24.51;
//       feels_like: 24.27;
//       pressure: 1021;
//       humidity: 48;
//       dew_point: 12.8;
//       uvi: 5.38;
//       clouds: 1;
//       visibility: 10000;
//       wind_speed: 4.57;
//       wind_deg: 34;
//       wind_gust: 5.64;
//       weather: [
//         { id: 800; main: 'Clear'; description: 'clear sky'; icon: '01d' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646798400;
//       temp: 23.76;
//       feels_like: 23.6;
//       pressure: 1021;
//       humidity: 54;
//       dew_point: 13.71;
//       uvi: 2.79;
//       clouds: 2;
//       visibility: 10000;
//       wind_speed: 5.07;
//       wind_deg: 37;
//       wind_gust: 6.35;
//       weather: [
//         { id: 800; main: 'Clear'; description: 'clear sky'; icon: '01d' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646802000;
//       temp: 22.69;
//       feels_like: 22.66;
//       pressure: 1021;
//       humidity: 63;
//       dew_point: 15.28;
//       uvi: 1.02;
//       clouds: 2;
//       visibility: 10000;
//       wind_speed: 5.48;
//       wind_deg: 40;
//       wind_gust: 7.02;
//       weather: [
//         { id: 800; main: 'Clear'; description: 'clear sky'; icon: '01d' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646805600;
//       temp: 21.35;
//       feels_like: 21.37;
//       pressure: 1022;
//       humidity: 70;
//       dew_point: 15.61;
//       uvi: 0.2;
//       clouds: 2;
//       visibility: 10000;
//       wind_speed: 5.36;
//       wind_deg: 37;
//       wind_gust: 7.28;
//       weather: [
//         { id: 800; main: 'Clear'; description: 'clear sky'; icon: '01d' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646809200;
//       temp: 20.2;
//       feels_like: 20.21;
//       pressure: 1022;
//       humidity: 74;
//       dew_point: 15.34;
//       uvi: 0;
//       clouds: 1;
//       visibility: 10000;
//       wind_speed: 4.29;
//       wind_deg: 36;
//       wind_gust: 7.1;
//       weather: [
//         { id: 800; main: 'Clear'; description: 'clear sky'; icon: '01n' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646812800;
//       temp: 19.68;
//       feels_like: 19.66;
//       pressure: 1022;
//       humidity: 75;
//       dew_point: 15.07;
//       uvi: 0;
//       clouds: 1;
//       visibility: 10000;
//       wind_speed: 3.31;
//       wind_deg: 43;
//       wind_gust: 6.12;
//       weather: [
//         { id: 800; main: 'Clear'; description: 'clear sky'; icon: '01n' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646816400;
//       temp: 19.25;
//       feels_like: 19.21;
//       pressure: 1023;
//       humidity: 76;
//       dew_point: 14.81;
//       uvi: 0;
//       clouds: 1;
//       visibility: 10000;
//       wind_speed: 2.92;
//       wind_deg: 61;
//       wind_gust: 5.48;
//       weather: [
//         { id: 800; main: 'Clear'; description: 'clear sky'; icon: '01n' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646820000;
//       temp: 18.94;
//       feels_like: 18.87;
//       pressure: 1023;
//       humidity: 76;
//       dew_point: 14.43;
//       uvi: 0;
//       clouds: 2;
//       visibility: 10000;
//       wind_speed: 3.02;
//       wind_deg: 73;
//       wind_gust: 5.84;
//       weather: [
//         { id: 800; main: 'Clear'; description: 'clear sky'; icon: '01n' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646823600;
//       temp: 18.67;
//       feels_like: 18.55;
//       pressure: 1023;
//       humidity: 75;
//       dew_point: 14.13;
//       uvi: 0;
//       clouds: 3;
//       visibility: 10000;
//       wind_speed: 3.07;
//       wind_deg: 77;
//       wind_gust: 6.14;
//       weather: [
//         { id: 800; main: 'Clear'; description: 'clear sky'; icon: '01n' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646827200;
//       temp: 18.36;
//       feels_like: 18.24;
//       pressure: 1022;
//       humidity: 76;
//       dew_point: 14.06;
//       uvi: 0;
//       clouds: 3;
//       visibility: 10000;
//       wind_speed: 2.94;
//       wind_deg: 83;
//       wind_gust: 5.79;
//       weather: [
//         { id: 800; main: 'Clear'; description: 'clear sky'; icon: '01n' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646830800;
//       temp: 17.83;
//       feels_like: 17.76;
//       pressure: 1022;
//       humidity: 80;
//       dew_point: 14.18;
//       uvi: 0;
//       clouds: 3;
//       visibility: 10000;
//       wind_speed: 2.55;
//       wind_deg: 92;
//       wind_gust: 5.05;
//       weather: [
//         { id: 800; main: 'Clear'; description: 'clear sky'; icon: '01n' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646834400;
//       temp: 17.4;
//       feels_like: 17.36;
//       pressure: 1022;
//       humidity: 83;
//       dew_point: 14.32;
//       uvi: 0;
//       clouds: 10;
//       visibility: 10000;
//       wind_speed: 2.46;
//       wind_deg: 100;
//       wind_gust: 4.83;
//       weather: [
//         { id: 800; main: 'Clear'; description: 'clear sky'; icon: '01n' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646838000;
//       temp: 17.78;
//       feels_like: 17.7;
//       pressure: 1021;
//       humidity: 80;
//       dew_point: 14.31;
//       uvi: 0;
//       clouds: 23;
//       visibility: 10000;
//       wind_speed: 2.78;
//       wind_deg: 99;
//       wind_gust: 5.49;
//       weather: [
//         { id: 801; main: 'Clouds'; description: 'few clouds'; icon: '02n' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646841600;
//       temp: 18.15;
//       feels_like: 18.03;
//       pressure: 1021;
//       humidity: 77;
//       dew_point: 14.09;
//       uvi: 0;
//       clouds: 34;
//       visibility: 10000;
//       wind_speed: 3.03;
//       wind_deg: 93;
//       wind_gust: 5.74;
//       weather: [
//         {
//           id: 802;
//           main: 'Clouds';
//           description: 'scattered clouds';
//           icon: '03n';
//         }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646845200;
//       temp: 18.13;
//       feels_like: 18.04;
//       pressure: 1021;
//       humidity: 78;
//       dew_point: 14.21;
//       uvi: 0;
//       clouds: 43;
//       visibility: 10000;
//       wind_speed: 3;
//       wind_deg: 87;
//       wind_gust: 5.9;
//       weather: [
//         {
//           id: 802;
//           main: 'Clouds';
//           description: 'scattered clouds';
//           icon: '03n';
//         }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646848800;
//       temp: 18.2;
//       feels_like: 18.14;
//       pressure: 1021;
//       humidity: 79;
//       dew_point: 14.43;
//       uvi: 0;
//       clouds: 49;
//       visibility: 10000;
//       wind_speed: 2.98;
//       wind_deg: 81;
//       wind_gust: 6.09;
//       weather: [
//         {
//           id: 802;
//           main: 'Clouds';
//           description: 'scattered clouds';
//           icon: '03n';
//         }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646852400;
//       temp: 18.6;
//       feels_like: 18.5;
//       pressure: 1022;
//       humidity: 76;
//       dew_point: 14.19;
//       uvi: 0.34;
//       clouds: 75;
//       visibility: 10000;
//       wind_speed: 3.36;
//       wind_deg: 83;
//       wind_gust: 6.72;
//       weather: [
//         { id: 803; main: 'Clouds'; description: 'broken clouds'; icon: '04d' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646856000;
//       temp: 19.77;
//       feels_like: 19.58;
//       pressure: 1021;
//       humidity: 68;
//       dew_point: 13.72;
//       uvi: 1.43;
//       clouds: 69;
//       visibility: 10000;
//       wind_speed: 4.3;
//       wind_deg: 81;
//       wind_gust: 6.81;
//       weather: [
//         { id: 803; main: 'Clouds'; description: 'broken clouds'; icon: '04d' }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646859600;
//       temp: 21.16;
//       feels_like: 20.87;
//       pressure: 1021;
//       humidity: 59;
//       dew_point: 12.8;
//       uvi: 3.47;
//       clouds: 48;
//       visibility: 10000;
//       wind_speed: 4.88;
//       wind_deg: 72;
//       wind_gust: 6.77;
//       weather: [
//         {
//           id: 802;
//           main: 'Clouds';
//           description: 'scattered clouds';
//           icon: '03d';
//         }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646863200;
//       temp: 22.01;
//       feels_like: 21.7;
//       pressure: 1021;
//       humidity: 55;
//       dew_point: 12.67;
//       uvi: 6.15;
//       clouds: 37;
//       visibility: 10000;
//       wind_speed: 4.83;
//       wind_deg: 68;
//       wind_gust: 6.69;
//       weather: [
//         {
//           id: 802;
//           main: 'Clouds';
//           description: 'scattered clouds';
//           icon: '03d';
//         }
//       ];
//       pop: 0;
//     },
//     {
//       dt: 1646866800;
//       temp: 22.97;
//       feels_like: 22.68;
//       pressure: 1020;
//       humidity: 52;
//       dew_point: 12.48;
//       uvi: 8.55;
//       clouds: 30;
//       visibility: 10000;
//       wind_speed: 4.24;
//       wind_deg: 59;
//       wind_gust: 6.14;
//       weather: [
//         {
//           id: 802;
//           main: 'Clouds';
//           description: 'scattered clouds';
//           icon: '03d';
//         }
//       ];
//       pop: 0;
//     }
//   ];
//   daily: [
//     {
//       dt: 1646697600;
//       sunrise: 1646676758;
//       sunset: 1646722300;
//       moonrise: 1646695500;
//       moonset: 1646732880;
//       moon_phase: 0.17;
//       temp: {
//         day: 25.02;
//         min: 16.78;
//         max: 25.18;
//         night: 19.65;
//         eve: 21.59;
//         morn: 16.78;
//       };
//       feels_like: { day: 25.2; night: 19.66; eve: 21.66; morn: 16.81 };
//       pressure: 1022;
//       humidity: 62;
//       dew_point: 17.24;
//       wind_speed: 5.71;
//       wind_deg: 41;
//       wind_gust: 7.73;
//       weather: [
//         {
//           id: 802;
//           main: 'Clouds';
//           description: 'scattered clouds';
//           icon: '03d';
//         }
//       ];
//       clouds: 37;
//       pop: 0.08;
//       uvi: 9.75;
//     },
//     {
//       dt: 1646784000;
//       sunrise: 1646763214;
//       sunset: 1646808613;
//       moonrise: 1646785560;
//       moonset: 1646821320;
//       moon_phase: 0.2;
//       temp: {
//         day: 24.37;
//         min: 17.16;
//         max: 24.87;
//         night: 18.94;
//         eve: 21.35;
//         morn: 17.16;
//       };
//       feels_like: { day: 24.14; night: 18.87; eve: 21.37; morn: 17.12 };
//       pressure: 1023;
//       humidity: 49;
//       dew_point: 12.76;
//       wind_speed: 5.48;
//       wind_deg: 40;
//       wind_gust: 7.63;
//       weather: [
//         { id: 801; main: 'Clouds'; description: 'few clouds'; icon: '02d' }
//       ];
//       clouds: 19;
//       pop: 0.04;
//       uvi: 9.59;
//     },
//     {
//       dt: 1646870400;
//       sunrise: 1646849669;
//       sunset: 1646894927;
//       moonrise: 1646875500;
//       moonset: 0;
//       moon_phase: 0.25;
//       temp: {
//         day: 23.74;
//         min: 17.4;
//         max: 24.1;
//         night: 18.88;
//         eve: 20.97;
//         morn: 18.2;
//       };
//       feels_like: { day: 23.45; night: 18.73; eve: 20.87; morn: 18.14 };
//       pressure: 1020;
//       humidity: 49;
//       dew_point: 12.19;
//       wind_speed: 5.66;
//       wind_deg: 39;
//       wind_gust: 7.37;
//       weather: [
//         {
//           id: 802;
//           main: 'Clouds';
//           description: 'scattered clouds';
//           icon: '03d';
//         }
//       ];
//       clouds: 25;
//       pop: 0.1;
//       uvi: 9.78;
//     },
//     {
//       dt: 1646956800;
//       sunrise: 1646936124;
//       sunset: 1646981239;
//       moonrise: 1646965320;
//       moonset: 1646910060;
//       moon_phase: 0.27;
//       temp: {
//         day: 22.41;
//         min: 17;
//         max: 23.1;
//         night: 18.32;
//         eve: 20.76;
//         morn: 17;
//       };
//       feels_like: { day: 22.14; night: 18.09; eve: 20.41; morn: 16.95 };
//       pressure: 1016;
//       humidity: 55;
//       dew_point: 12.94;
//       wind_speed: 4.77;
//       wind_deg: 30;
//       wind_gust: 6.69;
//       weather: [
//         { id: 500; main: 'Rain'; description: 'light rain'; icon: '10d' }
//       ];
//       clouds: 39;
//       pop: 0.28;
//       rain: 0.3;
//       uvi: 6.69;
//     },
//     {
//       dt: 1647043200;
//       sunrise: 1647022579;
//       sunset: 1647067552;
//       moonrise: 1647054900;
//       moonset: 1646999100;
//       moon_phase: 0.3;
//       temp: {
//         day: 21.18;
//         min: 16.04;
//         max: 21.18;
//         night: 18.59;
//         eve: 20.03;
//         morn: 16.04;
//       };
//       feels_like: { day: 21.29; night: 18.52; eve: 20.18; morn: 16 };
//       pressure: 1014;
//       humidity: 74;
//       dew_point: 16.12;
//       wind_speed: 5.66;
//       wind_deg: 215;
//       wind_gust: 8.7;
//       weather: [
//         { id: 500; main: 'Rain'; description: 'light rain'; icon: '10d' }
//       ];
//       clouds: 100;
//       pop: 0.25;
//       rain: 1.13;
//       uvi: 3.52;
//     },
//     {
//       dt: 1647129600;
//       sunrise: 1647109033;
//       sunset: 1647153863;
//       moonrise: 1647144180;
//       moonset: 1647088620;
//       moon_phase: 0.33;
//       temp: {
//         day: 22.95;
//         min: 17.62;
//         max: 23.5;
//         night: 17.95;
//         eve: 20.57;
//         morn: 18.26;
//       };
//       feels_like: { day: 22.68; night: 17.76; eve: 20.38; morn: 17.86 };
//       pressure: 1015;
//       humidity: 53;
//       dew_point: 12.77;
//       wind_speed: 4.64;
//       wind_deg: 218;
//       wind_gust: 8.27;
//       weather: [
//         { id: 803; main: 'Clouds'; description: 'broken clouds'; icon: '04d' }
//       ];
//       clouds: 59;
//       pop: 0.05;
//       uvi: 4;
//     },
//     {
//       dt: 1647216000;
//       sunrise: 1647195488;
//       sunset: 1647240175;
//       moonrise: 1647233100;
//       moonset: 1647178380;
//       moon_phase: 0.36;
//       temp: {
//         day: 23.68;
//         min: 16.04;
//         max: 23.68;
//         night: 18.14;
//         eve: 20.98;
//         morn: 16.04;
//       };
//       feels_like: { day: 23.44; night: 18.07; eve: 20.8; morn: 15.92 };
//       pressure: 1015;
//       humidity: 51;
//       dew_point: 12.69;
//       wind_speed: 2.05;
//       wind_deg: 38;
//       wind_gust: 2.27;
//       weather: [
//         { id: 803; main: 'Clouds'; description: 'broken clouds'; icon: '04d' }
//       ];
//       clouds: 64;
//       pop: 0.2;
//       uvi: 4;
//     },
//     {
//       dt: 1647302400;
//       sunrise: 1647281942;
//       sunset: 1647326486;
//       moonrise: 1647321660;
//       moonset: 1647268440;
//       moon_phase: 0.39;
//       temp: {
//         day: 21.18;
//         min: 16.02;
//         max: 22.42;
//         night: 16.95;
//         eve: 20.12;
//         morn: 16.02;
//       };
//       feels_like: { day: 20.95; night: 16.87; eve: 19.86; morn: 15.87 };
//       pressure: 1016;
//       humidity: 61;
//       dew_point: 13.48;
//       wind_speed: 3.51;
//       wind_deg: 237;
//       wind_gust: 5.62;
//       weather: [
//         { id: 500; main: 'Rain'; description: 'light rain'; icon: '10d' }
//       ];
//       clouds: 100;
//       pop: 0.36;
//       rain: 0.3;
//       uvi: 4;
//     }
//   ];
// }
