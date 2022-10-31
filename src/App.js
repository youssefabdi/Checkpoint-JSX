//import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './component/profile/ProfilePhoto';
import FullName from './component/profile/FullName';
import Adresse from './component/profile/Adresse';
function App() {
  return (
    <div className="App">
      <h1>Contact</h1>
    <ProfilePhoto/>
    <FullName/>
    <Adresse/>
    </div>
  );
}

export default App;
