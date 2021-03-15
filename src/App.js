import NavBar from "./NavBar"
import AlertBox from './AlertBox'

function App() {
  return (
    <div class="h-screen flex justify-center bg-fixed bg-gradient-to-b from-blue-700 via-blue-500 to-blue-300 overflow-hidden">
      <NavBar />
      <AlertBox />
    </div>
  );
}

export default App;
