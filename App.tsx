import { useFonts } from 'expo-font';
import { Main } from './src/screens/Main';

export default function App() {

  const [isFontLoaded] = useFonts({
    'Qatar-400': require('./src/assets/fonts/GraphikArabicMedium.otf'),
    'Qatar-500': require('./src/assets/fonts/Qatar2022Arabic-Bold.ttf'),
    'Qatar-600': require('./src/assets/fonts/Qatar2022Arabic-Heavy.ttf'),
  })

  if (!isFontLoaded) {
    return null;
  }

  return (
    <Main />
  );
}