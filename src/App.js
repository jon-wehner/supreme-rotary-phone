import { useState } from 'react';
import './App.css';

function App() {
  const [ buttonColor, setButtonColor ] = useState('MediumVioletRed');
  const [ buttonDisabled, setButtonDisabled] = useState(false);
  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <div >
      <button 
        style={{backgroundColor: buttonDisabled ? 'gray': buttonColor}}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={buttonDisabled}>
        Change to {newButtonColor}
      </button>
      <input type="checkbox"
        id="disable-button-checkbox"
        onChange={(e) => setButtonDisabled(e.target.checked)} 
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;