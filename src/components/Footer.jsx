import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">About This Resource</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              A comprehensive educational resource designed for early childhood teachers to facilitate 
              creativity across curriculum areas, supporting holistic child development through 
              evidence-based practices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/art" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Art Activities
                </a>
              </li>
              <li>
                <a href="/drama-puppetry" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Drama & Puppetry
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Educational Standards</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              This resource aligns with early childhood education frameworks and incorporates 
              evidence-based research from leading educational theorists including Vygotsky, 
              Piaget, and the Reggio Emilia approach.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Creativity Curriculum Resource. Designed for educational purposes.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;