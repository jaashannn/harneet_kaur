import { motion } from 'framer-motion';

const ActivityCard = ({ activity, index }) => {
  return (
    <motion.div
      className="card p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="inline-block bg-primary-100 text-primary-800 text-xs font-medium px-3 py-1 rounded-full">
          {activity.ageGroup}
        </span>
        <motion.div
          className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center"
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-secondary-700 text-sm font-bold">{index + 1}</span>
        </motion.div>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-3">{activity.title}</h3>
      
      <p className="text-gray-600 mb-4 leading-relaxed">
        {activity.description}
      </p>

      <div className="bg-accent-50 p-4 rounded-lg mb-4">
        <h4 className="text-sm font-medium text-accent-800 mb-2">Creative Development Focus:</h4>
        <p className="text-accent-700 text-sm">
          {activity.relevance}
        </p>
      </div>

      <div className="border-t pt-4">
        <p className="text-xs text-gray-500 italic">
          Reference: {activity.reference}
        </p>
      </div>
    </motion.div>
  );
};

export default ActivityCard;