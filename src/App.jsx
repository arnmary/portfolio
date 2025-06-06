import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPageLayout from './MainPageLayout';
import SuccessPage from './components/SuccessPage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import './reset.css';
import './Style.css';
import './MinScreen.css';

function App() {
  return (
    <Router>
      <Routes>
       <Route path="*" element={<MainPageLayout />} />
         <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;


