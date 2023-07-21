// On importe ReactDom qui nous permettra d'injecter notre application dans le DOM
import ReactDOM from 'react-dom/client';

// On importe les composants nécessaires pour créer nos routes à partir de react-router-dom
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';

// On importe des pages
import Login from './pages/LogIn/LogIn';
import Register from './pages/Register/Register'
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Clients from './pages/Clients/Clients';
import Documents from './pages/Documents/Documents';
import Products from './pages/Products/Products';

// On importe notre fichier de style global
import './styles/index.scss';

const router = createBrowserRouter(
  [{ path: '*', Component: Root }]
);

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

// Je créer un root pour mon application (a partir d'un élément HTML)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// On injecte notre application dans le DOM
root.render(<RouterProvider router={router} />);
