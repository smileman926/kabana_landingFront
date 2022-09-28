import "./App.scss";
import { Layout } from "./layout/layout";
import Home from "./pages/home/home";

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
