import { motion } from 'framer-motion';

const skillLogos = [
  { 
    name: 'Python', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', 
    color: 'text-blue-500' 
  },

  { 
    name: 'Pandas', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', 
    color: 'text-purple-500' 
  },

  { 
    name: 'NumPy', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', 
    color: 'text-blue-400' 
  },

  { 
    name: 'Scikit-Learn', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', 
    color: 'text-orange-500' 
  },

  { 
    name: 'SQL', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', 
    color: 'text-blue-600' 
  },

  { 
    name: 'Power BI', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg', 
    color: 'text-yellow-500' 
  },

  { 
    name: 'MongoDB', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', 
    color: 'text-green-600' 
  },

   { 
  name: 'JavaScript', 
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 
  color: 'text-yellow-400' 
   },

  { 
    name: 'Flutter', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', 
    color: 'text-cyan-500' 
  },

  { 
    name: 'Figma', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', 
    color: 'text-pink-500' 
  },

  { 
    name: 'AWS', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', 
    color: 'text-orange-500' 
  },

  { 
    name: 'Git', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', 
    color: 'text-orange-600' 
  },

  { 
    name: 'VS Code', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', 
    color: 'text-blue-500' 
  },
];

const duplicatedSkills = [...skillLogos, ...skillLogos];

export function AnimatedSkillsBar() {
  return (
    <div className="w-full overflow-hidden bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800 -mt-20">
      <motion.div
        className="flex gap-8 items-center"
        animate={{
          x: [0, -50 * skillLogos.length],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
        style={{
          width: `${100 * skillLogos.length}px`,
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <motion.div
            key={`${skill.name}-${index}`}
            className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 whitespace-nowrap min-w-fit"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
            <span className={`font-normal text-sm ${skill.color}`}>
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
