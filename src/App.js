import "./scss/app.scss";

import Header from "./components/header/header";
import Navbar from "./components/navbar/Navbar";
import Mains from "./components/main/Mains";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Mains />
    </>
  );
}

export default App;
