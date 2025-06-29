import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Art from './pages/Art';
import DramaPuppetry from './pages/DramaPuppetry';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <AnimatePresence mode="wait">
          <motion.main
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/art" element={<Art />} />
              <Route path="/drama-puppetry" element={<DramaPuppetry />} />
            </Routes>
          </motion.main>
        </AnimatePresence>

        <Footer />
      </div>
    </Router>
  );
}

export default App;