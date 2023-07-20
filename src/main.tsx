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

// On importe notre composant principal
import App from './App/App';

import SignInForm from './pages/LogInForm/LogInForm';

// On importe notre fichier de style global
import './styles/index.scss';
import Home from './pages/Home/Home';

const router = createBrowserRouter(
  // createRoutesFromElements(
  //   <>
  //     <Route path='/' element={<App />} />
  //     <Route path='/login' element={<SignInForm />} />
  //   </>
  // )
  [{ path: '*', Component: Root }]
);

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/login" element={<SignInForm />} />
    </Routes>
  );
}

// Je créer un root pour mon application (a partir d'un élément HTML)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// On injecte notre application dans le DOM
root.render(<RouterProvider router={router} />);
