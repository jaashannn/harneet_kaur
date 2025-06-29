import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white section-padding">
        <div className="container-max">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Facilitating Creativity in the Curriculum
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Empowering early childhood educators with evidence-based strategies to nurture 
              creativity across all curriculum areas
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link to="/art" className="btn-primary bg-white text-primary-600 hover:bg-gray-50">
                Explore Art Activities
              </Link>
              <Link to="/drama-puppetry" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
                Drama & Puppetry
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Understanding Creativity in Early Childhood Education
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <motion.div
                  className="card p-8"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-primary-600 mb-4">What is Creativity?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Creativity in early childhood education encompasses the ability to generate original ideas, 
                    express thoughts uniquely, and solve problems through innovative thinking. It involves both 
                    the process of creative exploration and the production of creative outcomes. In young children, 
                    creativity manifests through play, artistic expression, storytelling, movement, and imaginative 
                    problem-solving across all learning domains.
                  </p>
                </motion.div>

                <motion.div
                  className="card p-8"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-secondary-600 mb-4">Why is it Important?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fostering creativity is crucial for holistic child development as it enhances cognitive flexibility, 
                    emotional regulation, and social skills. Creative experiences support critical thinking, 
                    self-expression, and confidence building. Research demonstrates that children engaged in creative 
                    activities show improved academic performance, better problem-solving abilities, and enhanced 
                    emotional well-being throughout their educational journey.
                  </p>
                </motion.div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Integrating Creativity Across Curriculum Areas
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Creativity should not be confined to traditional "arts" subjects but woven throughout all curriculum 
                  areas to create meaningful, interconnected learning experiences. This integrated approach recognizes 
                  that creativity is a fundamental human capacity that enhances learning across all domains.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      title: "Language & Literacy",
                      description: "Through storytelling, creative writing, poetry, and dramatic play that encourages linguistic experimentation and narrative development."
                    },
                    {
                      title: "Mathematics",
                      description: "Via pattern creation, geometric art, mathematical problem-solving through hands-on manipulatives, and spatial reasoning activities."
                    },
                    {
                      title: "Science",
                      description: "Through hypothesis formation, experimental design, nature-based art, and creative documentation of scientific observations."
                    },
                    {
                      title: "Social Studies",
                      description: "By exploring cultural expressions, community art projects, role-playing historical events, and creative mapping activities."
                    }
                  ].map((area, index) => (
                    <motion.div
                      key={area.title}
                      className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -3 }}
                    >
                      <h4 className="text-lg font-semibold text-accent-600 mb-3">{area.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{area.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-600 leading-relaxed mb-8">
                  This comprehensive approach to creativity ensures that children develop not only artistic skills 
                  but also the creative thinking processes that will serve them throughout their lives. By providing 
                  diverse creative opportunities across all subject areas, educators can support each child's unique 
                  creative potential while meeting curriculum objectives in engaging, meaningful ways.
                </p>
                
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <Link to="/art" className="btn-primary">
                    Discover Art Activities
                  </Link>
                  <Link to="/drama-puppetry" className="btn-secondary">
                    Explore Drama & Puppetry
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;