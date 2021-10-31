import sunny from '../Assets/sunny.png';
import moon from '../Assets/moon.png';
import rain from '../Assets/rain.png';
import cloud from '../Assets/cloud.png';

const setImage = (imageName: string) => {
  switch (imageName) {
    case 'Clear':
      const currentTime = new Date();
      if (currentTime.getHours() > 6 && currentTime.getHours() < 18) {
        return sunny;
      } else {
        return moon;
      }
    case 'Rain' || 'Drizzle' || 'Thunderstorm':
      return rain;
    case 'Clouds':
      return cloud;
    default:
      break;
  }
};

export { setImage };
