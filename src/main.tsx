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
import InvoiceAdd from './pages/InvoiceAdd/InvoiceAdd';
import InvoiceEdit from './pages/InvoiceEdit/InvoiceEdit';
import Quotation from './pages/Quotation/Quotation';
import QuotationAdd from './pages/QuotationAdd/QuotationAdd';
import QuotationEdit from './pages/QuotationEdit/QuotationEdit';
import Account from './pages/Account/Account';
import Product from './pages/Product/Product';
import ProductAdd from './pages/ProductAdd/ProductAdd';
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
      <Route path="/client/add" element={<ClientAdd />} />
      <Route path="/client/:id" element={<ClientEdit />} />
      <Route path="/invoice" element={<Invoice />} />
      <Route path="/invoice/add" element={<InvoiceAdd />} />
      <Route path="/invoice/:id" element={<InvoiceEdit />} />
      <Route path="/quotation" element={<Quotation />} />
      <Route path="/quotation/add" element={<QuotationAdd />} />
      <Route path="/quotation/:id" element={<QuotationEdit />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/add" element={<ProductAdd />} />
      <Route path="/product/:id" element={<ProductEdit />} />
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
