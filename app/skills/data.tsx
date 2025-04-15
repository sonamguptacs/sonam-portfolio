import {
  FaCode,
  FaServer,
  FaNetworkWired,
  FaCogs,
  FaVial,
  FaTools,
} from 'react-icons/fa'

export const skillsData = {
  Frontend: {
    icon: <FaCode className="text-blue-500 dark:text-blue-300 text-lg mr-2" />,
    items: [
      'ReactJS',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Sass',
      'Tailwind CSS',
    ],
  },
  'State Management': {
    icon: (
      <FaNetworkWired className="text-blue-500 dark:text-blue-300 text-lg mr-2" />
    ),
    items: ['Redux', 'Context API'],
  },
  'API Integration': {
    icon: (
      <FaServer className="text-blue-500 dark:text-blue-300 text-lg mr-2" />
    ),
    items: ['React Query', 'RTK Query', 'Axios'],
  },
  Testing: {
    icon: <FaVial className="text-blue-500 dark:text-blue-300 text-lg mr-2" />,
    items: ['Jest', 'React Testing Library', 'Stryker (Mutation Testing)'],
  },
  'Performance & Tools': {
    icon: <FaTools className="text-blue-500 dark:text-blue-300 text-lg mr-2" />,
    items: [
      'Lighthouse',
      'Lazy Loading',
      'Webpack',
      'Parcel',
      'Babel',
      'ESLint',
      'npm',
      'yarn',
      'Git',
      'Jenkins',
      'CI/CD',
    ],
  },
  'Backend & APIs': {
    icon: <FaCogs className="text-blue-500 dark:text-blue-300 text-lg mr-2" />,
    items: ['Node.js (Basic)', 'Java', 'REST APIs', 'GraphQL (Basic)'],
  },
}
