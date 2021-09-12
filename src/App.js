import "./styles/global.css"
import Home from './components/Home';
import ThemeProvider from './theme/ThemeProvider';

function App() {
  return (
    <div>
      <ThemeProvider>
        <Home/>
      </ThemeProvider>            
    </div>
  );
}

export default App;
