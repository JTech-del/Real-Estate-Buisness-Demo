import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home.jsx';
import Properties from '../pages/Properties/Properties.jsx';
import PropertyDetails from '../pages/PropertyDetails/PropertyDetails.jsx';
import About from '../pages/About/About.jsx';
import Services from '../pages/Services/Services.jsx';
import Contact from '../pages/Contact/Contact.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/properties" element={<Properties />} />

      <Route
        path="/properties/:slug"
        element={<PropertyDetails />}
      />

      <Route path="/about" element={<About />} />

      <Route path="/services" element={<Services />} />

      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;