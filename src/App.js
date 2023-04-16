import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/index.scss'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import 'swiper/css/scrollbar';

import SwiperCore, { Navigation,
  Pagination,
  Autoplay,
  Virtual } from 'swiper';

import Router from './router/router';

function App() {
  SwiperCore.use([Navigation, Pagination, Autoplay, Virtual])
  return (
      <Router/>
  );
}

export default App;
