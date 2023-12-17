import React from 'react';
import { ThemeProvider} from "./module/theme/ThemeProvider";
import { HomeScreen } from './screens/HomeScreen';


function App(): React.JSX.Element {
  return (
      <ThemeProvider>
        <HomeScreen />
      </ThemeProvider>
  );
}

export default App;
