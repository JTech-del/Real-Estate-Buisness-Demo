import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import ScrollToTop from './components/common/scrollToTop';

import AppRoutes from './routes/appRoutes';

function App() {
  return (
    <>
      <Navbar />

      <AppRoutes />

      <Footer />

      <ScrollToTop />
    </>
  );
}

export default App;