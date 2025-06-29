import { motion } from 'framer-motion';
import ActivityCard from '../components/ActivityCard';

const Art = () => {
  const activities = [
    // 0-2 years
    {
      ageGroup: "0-2 years",
      title: "Sensory Paint Exploration",
      description: "Infants and toddlers explore non-toxic finger paints using their hands and fingers on large paper surfaces. This activity encourages sensory development and early mark-making without pressure for representational art.",
      relevance: "Develops fine motor skills, sensory processing, and early creative expression through tactile exploration. Supports brain development through multi-sensory engagement.",
      reference: "Gandini, L. (2012). Fundamentals of the Reggio Emilia approach to early childhood education. Young Children, 49(1), 4-8."
    },
    {
      ageGroup: "0-2 years",
      title: "Natural Material Collages",
      description: "Using leaves, flowers, and textured natural materials, toddlers create simple collages with adult support. Materials are large enough to be safe and encourage exploration of different textures and colors.",
      relevance: "Enhances sensory awareness, develops classification skills, and fosters connection with nature. Encourages creative arrangement and spatial understanding.",
      reference: "Wien, C. A. (2008). Emergent curriculum in the primary classroom. Teachers College Press."
    },

    // 2-3 years
    {
      ageGroup: "2-3 years",
      title: "Color Mixing Adventures",
      description: "Children use large brushes to mix primary colors and discover secondary colors on paper or at easels. They observe and discuss the changes, building vocabulary and scientific understanding alongside artistic skills.",
      relevance: "Develops color recognition, cause-and-effect understanding, and scientific thinking. Enhances language development through descriptive vocabulary building.",
      reference: "Edwards, C., Gandini, L., & Forman, G. (Eds.). (2011). The hundred languages of children: The Reggio Emilia experience in transformation. Praeger."
    },
    {
      ageGroup: "2-3 years",
      title: "Story Illustration Creation",
      description: "After hearing a simple story, children create their own illustrations using various art materials. They retell parts of the story through their artwork, connecting literacy and visual arts.",
      relevance: "Strengthens comprehension skills, narrative understanding, and symbolic representation. Develops ability to express ideas through multiple modalities.",
      reference: "Vygotsky, L. S. (1978). Mind in society: The development of higher psychological processes. Harvard University Press."
    },

    // 3-5 years
    {
      ageGroup: "3-5 years",
      title: "Collaborative Mural Projects",
      description: "Small groups work together to create large murals based on themes from their investigations or interests. Children negotiate space, share materials, and contribute individual elements to a collective artwork.",
      relevance: "Develops social skills, cooperation, and community building. Enhances planning abilities and understanding of individual contributions to group efforts.",
      reference: "Malaguzzi, L. (1998). History, ideas, and basic philosophy: An interview with Lella Gandini. In C. Edwards, L. Gandini, & G. Forman (Eds.), The hundred languages of children (pp. 49-97)."
    },
    {
      ageGroup: "3-5 years",
      title: "Self-Portrait Evolution Study",
      description: "Children create self-portraits using mirrors and various media throughout the year, documenting their artistic development and self-awareness. They compare earlier works with current creations, discussing changes and growth.",
      relevance: "Builds self-awareness, identity development, and metacognitive skills. Develops observational abilities and understanding of artistic progression over time.",
      reference: "Piaget, J. (1952). The origins of intelligence in children. International Universities Press."
    },

    // 6-8 years
    {
      ageGroup: "6-8 years",
      title: "Cultural Art Exploration Project",
      description: "Children research and recreate art forms from different cultures, learning about traditions, materials, and meanings. They present their artworks to peers, explaining cultural contexts and personal interpretations.",
      relevance: "Develops cultural awareness, research skills, and appreciation for diversity. Enhances presentation abilities and connects art to social studies learning.",
      reference: "Banks, J. A. (2008). An introduction to multicultural education. Allyn & Bacon."
    },
    {
      ageGroup: "6-8 years",
      title: "Scientific Illustration Documentation",
      description: "Students create detailed scientific illustrations of natural specimens, focusing on accurate observation and documentation techniques. They use various drawing tools to capture details and label their observations.",
      relevance: "Integrates art with scientific inquiry, develops observational skills and attention to detail. Enhances understanding of scientific documentation and recording methods.",
      reference: "Dewey, J. (1934). Art as experience. Minton, Balch & Company."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Art & Creative Expression
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Fostering creativity through visual arts across developmental stages
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Importance of Art */}
            <motion.div
              className="card p-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-primary-600 mb-4">
                Importance of Art
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Art education is fundamental to fostering creativity in young children as it provides multiple pathways for expression, communication, and learning. Through visual arts, children develop fine motor skills, visual-spatial intelligence, and emotional regulation while building confidence in their unique creative abilities and perspectives.
              </p>
            </motion.div>

            {/* Creativity Theories */}
            <motion.div
              className="card p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-secondary-600 mb-4">
                Theoretical Foundations
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Drawing from Vygotsky's social constructivism, Piaget's cognitive development theory, and the Reggio Emilia philosophy, art experiences support scaffolded learning, developmental appropriateness, and the concept of "hundred languages of children" - recognizing art as a powerful communication medium for young learners.
              </p>
            </motion.div>

            {/* Resources & Materials */}
            <motion.div
              className="card p-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-accent-600 mb-4">
                Resources & Tools
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Essential materials include non-toxic paints, natural brushes, recycled materials, digital art applications like Tux Paint for older children, and documentation tools such as cameras and portfolios. These resources support diverse artistic exploration while maintaining safety and developmental appropriateness across age groups.
              </p>
            </motion.div>
          </div>

          {/* Learning Experiences */}
          <div className="mb-12">
            <motion.h2
              className="text-3xl font-bold text-gray-900 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Age-Appropriate Learning Experiences
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {activities.map((activity, index) => (
                <ActivityCard key={index} activity={activity} index={index} />
              ))}
            </div>
          </div>

          {/* References Section */}
          <motion.div
            className="card p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Academic References
            </h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p>Banks, J. A. (2008). <em>An introduction to multicultural education</em>. Allyn & Bacon.</p>
              <p>Dewey, J. (1934). <em>Art as experience</em>. Minton, Balch & Company.</p>
              <p>Edwards, C., Gandini, L., & Forman, G. (Eds.). (2011). <em>The hundred languages of children: The Reggio Emilia experience in transformation</em>. Praeger.</p>
              <p>Gandini, L. (2012). Fundamentals of the Reggio Emilia approach to early childhood education. <em>Young Children, 49</em>(1), 4-8.</p>
              <p>Malaguzzi, L. (1998). History, ideas, and basic philosophy: An interview with Lella Gandini. In C. Edwards, L. Gandini, & G. Forman (Eds.), <em>The hundred languages of children</em> (pp. 49-97).</p>
              <p>Piaget, J. (1952). <em>The origins of intelligence in children</em>. International Universities Press.</p>
              <p>Vygotsky, L. S. (1978). <em>Mind in society: The development of higher psychological processes</em>. Harvard University Press.</p>
              <p>Wien, C. A. (2008). <em>Emergent curriculum in the primary classroom</em>. Teachers College Press.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Art;