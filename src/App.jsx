import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import AdventurePage from './pages/Adventure';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProjectsPage from './pages/Projects';
import LoginPage from './pages/Login';

// an array of route definition objects is passed to the createBrowserRouter function. Each object represents one route.
const router = createBrowserRouter([
  // This route is used to load the layout wrapper that include the header and footer on each page. Multi routes can be use with these wrappers to create a more complex website. For instance the '/admin' path can contain different children that will be rendered on each of the admin pages
  { path: '/',
    element: <RootLayout />,
    // errorElement property renders a component as a fallback if an error occurs
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage />},
      { path: '/projects', element: <ProjectsPage />},
      { path: '/adventure', element: <AdventurePage />},
      { path: '/login', element: <LoginPage />},
    ],
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
