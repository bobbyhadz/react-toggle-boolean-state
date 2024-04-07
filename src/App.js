import './App.css';

import {useState} from 'react';

export default function App() {
  // 👇️ Initialize boolean to false
  const [isLoading, setIsLoading] = useState(false);

  const toggleIsLoading = () => {
    // 👇️ Passed function to setState
    setIsLoading(current => !current);
  };

  return (
    <div>
      <button onClick={toggleIsLoading}>
        Toggle loading state
      </button>
      {isLoading && <h2>bobbyhadz.com...</h2>}
    </div>
  );
}
