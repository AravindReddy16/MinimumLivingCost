import './App.css';
import Home from "./components/home.js";
import Landlord from "./components/landlord.js";
import Tenant from "./components/tenant.js";
import HouseComfort from "./components/housecomfort.js";
import Customer from "./components/customer.js";
import Testinominal from './components/testinominal.js';
import Contact from './components/contact.js';

function App() {
  return (
    <div className="container">
      <Home />
      <Landlord />
      <Tenant />
      <HouseComfort />
      <Customer />
      <Testinominal />
      <Contact />
    </div>
  );
}

export default App;
