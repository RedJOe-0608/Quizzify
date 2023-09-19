import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import {Container} from 'react-bootstrap'
function App() {
  return (
    <>
      <Header />
    <main className="py-3" >
      <Container>
        <Outlet />
      </Container>
    </main>
        <Footer />
    </>
  )
}

export default App;
