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
import Login from './pages/LogIn/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Client from './pages/Client/Client';
import ClientAdd from './pages/ClientAdd/ClientAdd';
import ClientEdit from './pages/ClientEdit/ClientEdit';
import Invoice from './pages/Invoice/Invoice';
import Quotation from './pages/Quotation/Quotation';
import Account from './pages/Account/Account';
import Product from './pages/Product/Product';
import ProductEdit from './pages/ProductEdit/ProductEdit';

// On importe notre fichier de style global
import './styles/index.scss';

const router = createBrowserRouter([{ path: '*', Component: Root }]);

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/client" element={<Client />} />
      <Route path="/client/:id" element={<ClientEdit />} />
      <Route path="/client/add" element={<ClientAdd />} />
      <Route path="/invoice" element={<Invoice />} />
      <Route path="/quotation" element={<Quotation />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/edit/:id" element={<ProductEdit />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
}

// Je créer un root pour mon application (a partir d'un élément HTML)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// On injecte notre application dans le DOM
root.render(<RouterProvider router={router} />);
