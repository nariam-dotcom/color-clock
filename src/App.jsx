import {useState , useEffect  } from 'react';
import { format } from 'date-fns';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock-container">
      <h1>Color Clock</h1>

      <p className="clock">
        {format(currentTime, 'hh:mm:ss a')}
      </p>

      <p className="date">
        {format(currentTime, 'EEEE, MMMM do, yyyy')}
      </p>
    </div>
  );
}

export default App;