import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateAccount from './Components/CreateAccount';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
