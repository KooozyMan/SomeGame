import './App.css';
import Header from './Header'
import ShowMonster from './ShowMonster';
import Button from './Button'

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
          alignItems: "center"
        }}>
          <ShowMonster monster="Charizard"/>
          <ShowMonster monster="Blastoise"/>
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
