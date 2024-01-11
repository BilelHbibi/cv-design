import { useEffect } from 'react';
import './App.css';
import Page from './components/pages/page';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  

  return (
    <><Page /></>
  );
}

export default App;
