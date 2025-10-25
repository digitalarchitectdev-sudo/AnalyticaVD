
export type EventRule = {
  id: string;
  name: string;
  rules: string[];
};

export const eventRules: EventRule[] = [
  {
    id: 'wip-code',
    name: 'WIP Code',
    rules: [
      'Can use any AI tool of your own.',
      'Team consist of only two members and once registered after that can not change partner.',
      'Topic and timing will be given by organizers.',
      'Judges decision is final.',
    ],
  },
  {
    id: 'mystery-solving',
    name: 'Mystery Solving',
    rules: [
      'Team consist of only four members and once registered after that can not change partner.',
      'Judges decision is final.',
    ],
  },
  {
    id: 'tech-memes',
    name: 'Tech Meme’s',
    rules: [
      'Topic will be given by organizers.',
      'Judges decision is final.',
    ],
  },
  {
    id: 'quiz',
    name: 'Quiz',
    rules: [
      'Topic and timing will be given by organizers.',
      'Judges decision is final.',
    ],
  },
  {
    id: 'tech-talk',
    name: 'Tech Talk',
    rules: [
      'Topics and timing will be given by organizers.',
      'Topics will be given before.',
      'Judges decision is final.',
    ],
  },
  {
    id: 'tech-debate',
    name: 'Tech Debate',
    rules: [
      '1 vs 1.',
      'Topic and timing will be given by organizers.',
      'Judges decision is final.',
    ],
  },
];
