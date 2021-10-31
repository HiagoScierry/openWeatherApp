import { useWeather } from '../Context/index';
import { gradients } from './index';

const Background = () => {
  const currentTime = new Date();

  if (currentTime.getHours() > 6 && currentTime.getHours() < 18) {
    const { currentWeather } = useWeather();
    const todayWeather = currentWeather.weather[0].main;
    if (todayWeather === 'Clear' || todayWeather === 'Clouds') {
      return gradients.day;
    } else {
      return gradients.rain;
    }
  } else {
    return gradients.night;
  }
};

export { Background };
