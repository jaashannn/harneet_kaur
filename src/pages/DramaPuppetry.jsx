import { motion } from 'framer-motion';
import ActivityCard from '../components/ActivityCard';

const DramaPuppetry = () => {
  const activities = [
    // 0-2 years
    {
      ageGroup: "0-2 years",
      title: "Simple Puppet Peek-a-Boo",
      description: "Using soft hand puppets or finger puppets, adults engage infants in peek-a-boo games and simple interactions. The puppets appear and disappear, encouraging attention, anticipation, and early social interaction through playful engagement.",
      relevance: "Develops object permanence, social awareness, and early communication skills. Supports emotional regulation and introduces the concept of character representation through play.",
      reference: "Piaget, J. (1952). The origins of intelligence in children. International Universities Press."
    },
    {
      ageGroup: "0-2 years",
      title: "Movement Rhyme Actions",
      description: "Toddlers participate in simple action rhymes and songs with accompanying movements and gestures. They clap, wave, and move their bodies to familiar rhythms while adults model expressive actions and facial expressions.",
      relevance: "Enhances gross motor development, rhythm awareness, and early dramatic expression. Builds foundation for later symbolic play and creative movement.",
      reference: "Vygotsky, L. S. (1978). Mind in society: The development of higher psychological processes. Harvard University Press."
    },

    // 2-3 years
    {
      ageGroup: "2-3 years",
      title: "Animal Character Dramatic Play",
      description: "Children explore different animal movements and sounds through dramatic play, using simple props like animal ears or tails. They practice walking like different animals while making corresponding sounds and gestures.",
      relevance: "Develops body awareness, imaginative thinking, and symbolic representation. Enhances language development through sound exploration and vocabulary building.",
      reference: "Corsaro, W. A. (2003). We're friends, right?: Inside kids' cultures. Joseph Henry Press."
    },
    {
      ageGroup: "2-3 years",
      title: "Story Reenactment with Props",
      description: "Using simple props and costumes, children reenact familiar stories with adult support. They take turns being different characters, focusing on key actions and dialogue from well-known tales like 'The Three Bears.'",
      relevance: "Strengthens narrative understanding, sequence comprehension, and character empathy. Develops memory skills and ability to represent experiences through action.",
      reference: "Bruner, J. (1986). Actual minds, possible worlds. Harvard University Press."
    },

    // 3-5 years
    {
      ageGroup: "3-5 years",
      title: "Collaborative Story Creation Theater",
      description: "Children work together to create and perform original stories, assigning roles and developing simple plots. They use costumes, props, and a designated 'stage' area to present their collaborative narratives to peers.",
      relevance: "Builds cooperation skills, creative thinking, and confidence in public speaking. Develops planning abilities and understanding of story structure and character development.",
      reference: "Paley, V. G. (1990). The boy who would be a helicopter: The uses of storytelling in the classroom. Harvard University Press."
    },
    {
      ageGroup: "3-5 years",
      title: "Emotion Expression Puppet Shows",
      description: "Children create and use puppets to explore and express different emotions in safe, structured scenarios. They practice identifying feelings and appropriate responses through puppet interactions and guided discussions.",
      relevance: "Develops emotional intelligence, empathy, and social problem-solving skills. Provides safe outlet for exploring difficult emotions and practicing social scenarios.",
      reference: "Goleman, D. (1995). Emotional intelligence: Why it matters more than IQ. Bantam Books."
    },

    // 6-8 years
    {
      ageGroup: "6-8 years",
      title: "Historical Figure Biography Theater",
      description: "Students research historical figures and create biographical performances, incorporating factual information into dramatic presentations. They design costumes, write simple scripts, and present to authentic audiences.",
      relevance: "Integrates social studies learning with creative expression. Develops research skills, historical empathy, and ability to synthesize information for presentation.",
      reference: "Dewey, J. (1897). My pedagogic creed. The School Journal, 54(3), 77-80."
    },
    {
      ageGroup: "6-8 years",
      title: "Community Issue Advocacy Puppetry",
      description: "Children identify community concerns and create puppet shows that explore solutions and raise awareness. They write scripts, design puppets, and perform for community members, connecting drama to civic engagement.",
      relevance: "Develops critical thinking, civic responsibility, and advocacy skills. Enhances understanding of community interconnections and personal agency in social change.",
      reference: "Freire, P. (1970). Pedagogy of the oppressed. Continuum International Publishing Group."
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
              Drama & Puppetry
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Nurturing creativity through dramatic expression and storytelling
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Importance of Drama & Puppetry */}
            <motion.div
              className="card p-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-primary-600 mb-4">
                Importance of Drama & Puppetry
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Drama and puppetry provide powerful vehicles for creative expression, allowing children to explore emotions, develop empathy, and practice social skills in safe, imaginative contexts. These art forms enhance language development, build confidence, and support children's natural tendency toward symbolic play and storytelling.
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
                Based on Vygotsky's zone of proximal development, Bruner's narrative thinking, and Paley's storytelling pedagogy, drama activities support scaffolded learning through role-play, enhance cognitive development through symbolic representation, and validate children's natural storytelling abilities as legitimate learning tools.
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
                Essential materials include simple puppets, costume boxes with dress-up clothes, prop collections, digital storytelling apps like Puppet Pals, recording devices for documentation, and flexible performance spaces. These tools support varied dramatic exploration while accommodating different comfort levels and creative preferences.
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
              <p>Bruner, J. (1986). <em>Actual minds, possible worlds</em>. Harvard University Press.</p>
              <p>Corsaro, W. A. (2003). <em>We're friends, right?: Inside kids' cultures</em>. Joseph Henry Press.</p>
              <p>Dewey, J. (1897). My pedagogic creed. <em>The School Journal, 54</em>(3), 77-80.</p>
              <p>Freire, P. (1970). <em>Pedagogy of the oppressed</em>. Continuum International Publishing Group.</p>
              <p>Goleman, D. (1995). <em>Emotional intelligence: Why it matters more than IQ</em>. Bantam Books.</p>
              <p>Paley, V. G. (1990). <em>The boy who would be a helicopter: The uses of storytelling in the classroom</em>. Harvard University Press.</p>
              <p>Piaget, J. (1952). <em>The origins of intelligence in children</em>. International Universities Press.</p>
              <p>Vygotsky, L. S. (1978). <em>Mind in society: The development of higher psychological processes</em>. Harvard University Press.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DramaPuppetry;