import Home from './components/Home/Home';
import EventPage from './components/EventPage/EventPage';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Seats from './components/Seats/Seats';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';

export const Routes = [
    {name:'home', path:'/', component: Home, privateRoute: false },
    {name:'eventpage', path:'/competition/:id', component: EventPage, privateRoute: false  },
    {name:'seats', path:'/seats', component: Seats, privateRoute: true  },
    {name:'login', path:'/login', component: Login, privateRoute: false  },
    {name:'register', path:'/register', component: Register, privateRoute: false  },
    {name:'pageNotFound', path:'*', component: PageNotFound, privateRoute: false  }
]

