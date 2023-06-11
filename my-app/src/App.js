import Header from './components/header/header.jsx'
import Promo from './components/promo/promo.jsx'
import Brends from './components/brends/Brends.jsx'
import Arrivals from './components/arrivals/arrivals.jsx';
import Banner from './components/Banner/Banner.jsx'
import Favourite from './components/Favourite/Favourite.jsx'
import Vouchers from './components/Vouchers/Vouchers.jsx'

function App() {
  return (
    
    <div className="App">
      <Header />
      <Promo />
      <Brends />
      <Arrivals />
      <Banner />
      <Favourite />
      <Vouchers />
    </div>
  );
}

export default App;
