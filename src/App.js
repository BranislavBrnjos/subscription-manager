import './main.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { QueryClient, QueryClientProvider } from 'react-query'
import Breadcrumbs from './components/Breadcrumbs';

  const queryClient = new QueryClient()

  function App() {
    return (
      <Router>
        <QueryClientProvider client={queryClient}>
          <header>
            <Breadcrumbs />
          </header>
          <main className="c-page-layout">
            <AppRoutes />
          </main>
      </QueryClientProvider>
      </Router>
    );
  }

export default App;
