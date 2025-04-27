import './App.css';
import Header from './Header'
import ShowMonster from './ShowMonster';
import Button from './Button'
import HealthBar from './HealthBar';

function App() {
  return (
    <div className="App" style={{
      backgroundColor: "#90EE90",
      minHeight: "100vh"
    }}>
      <Header/>

      <div>
        {/* Monsters div */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px"
        }}>
          <ShowMonster monster="Charizard"/>
          <ShowMonster monster="Blastoise"/>
        </div>

        <div style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          gap: "220px"
        }}>
          <HealthBar health="100" maxHealth="100"/>
          <HealthBar health="100" maxHealth="100"/>
        </div>

        {/* Buttons div */}
        <div>
          <Button/>
        </div>
      </div>
    </div>
  );
}

export default App;
