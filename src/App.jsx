import "./App.css";
import Cover from "./components/Cover";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Cover />
      <main className="content">
        <Profile />
      </main>
    </div>
  );
}

export default App;
