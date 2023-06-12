import Header from './components/header/header.jsx'
import Promo from './components/promo/promo.jsx'
import Brends from './components/brends/Brends.jsx'
import Arrivals from './components/arrivals/arrivals.jsx';
import Banner from './components/Banner/Banner.jsx'
import Favourite from './components/Favourite/Favourite.jsx'
import Vouchers from './components/Vouchers/Vouchers.jsx'
import Community from './components/Community/Community.jsx'
import Footer from './components/Footer/Footer.jsx'

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
      <Community />
      <Footer />
    </div>
  );
}

export default App;
