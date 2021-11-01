import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  SetStateAction,
  Dispatch,
} from 'react';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';

export interface ICurrentWeather {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lat: number;
    lon: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: [
    {
      description: string;
      icon: string;
      id: number;
      main: string;
    },
  ];
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
}

export interface IWeather {
  currentWeather: ICurrentWeather;
  getCurrentWeather: () => void;
}

const WeatherContext = createContext<IWeather>({
  currentWeather: {
    base: '',
    clouds: {
      all: 0,
    },
    cod: 0,
    coord: {
      lat: 0,
      lon: 0,
    },
    dt: 0,
    id: 0,
    main: {
      feels_like: 0,
      grnd_level: 0,
      humidity: 0,
      pressure: 0,
      sea_level: 0,
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    },
    name: '',
    sys: {
      country: '',
      sunrise: 0,
      sunset: 0,
    },
    timezone: 0,
    visibility: 0,
    weather: [
      {
        description: '',
        icon: '',
        id: 0,
        main: '',
      },
    ],
    wind: {
      deg: 0,
      gust: 0,
      speed: 0,
    },
  },
  setCurrentWeather: () => {},
});

export function WeatherProvider({ children }) {
  const key = '9fe610fab2867e94b9b248c094c180a1';
  const [currentWeather, setCurrentWeather] = useState<ICurrentWeather>({
    base: '',
    clouds: {
      all: 0,
    },
    cod: 0,
    coord: {
      lat: 0,
      lon: 0,
    },
    dt: 0,
    id: 0,
    main: {
      feels_like: 0,
      grnd_level: 0,
      humidity: 0,
      pressure: 0,
      sea_level: 0,
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    },
    name: '',
    sys: {
      country: '',
      sunrise: 0,
      sunset: 0,
    },
    timezone: 0,
    visibility: 0,
    weather: [
      {
        description: '',
        icon: '',
        id: 0,
        main: '',
      },
    ],
    wind: {
      deg: 0,
      gust: 0,
      speed: 0,
    },
  });

  const getCurrentWeather = () => {
    Geolocation.getCurrentPosition(async (info: any) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${info?.coords.latitude}&lon=${info?.coords.longitude}&appid=${key}&lang=pt_br&units=metric`,
        );
        setCurrentWeather(response.data);
      } catch (error) {
        console.log(error)
      }
    });
  };

  useEffect(() => {
    getCurrentWeather();
  }, []);
  return (
    <WeatherContext.Provider value={{ currentWeather, getCurrentWeather }}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  const context = useContext(WeatherContext);
  if (!context)
    throw new Error('useWeather must be used within a WeatherProvider');
  const { currentWeather, getCurrentWeather } = context;
  return { currentWeather, getCurrentWeather };
}

export default WeatherContext;
