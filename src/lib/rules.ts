
export type EventRule = {
  id: string;
  name: string;
  organizedBy: string;
  date: string;
  venue: string;
  eligibility: {
    openTo: string;
    team: string;
    maxMembers?: number;
  };
  registration: {
    starts: string;
    ends: string;
    spot: string;
  };
  competitionFormat: string[];
  judgingCriteria: string[];
  eventSpecificRules: string[];
  generalRules: string[];
  prizes: {
    first: string;
    second: string;
    certificates: string;
  }; 
  coordinators: {
    name: string;
    contact: string;
  }[];
};

export const eventRules: EventRule[] = [
  {
    id: "wip-code",
    name: "WIP Code",
    organizedBy: "CSE(DS)",
    date: "30-Oct-2025",
    venue: "MITk",
    eligibility: {
      openTo: "Data Science department [2nd, 3rd and Final Year]",
      team: "individuals / teams",
      maxMembers: 2
    },
    registration: {
      starts: "28-Oct-2025",
      ends: "30-Oct-2025",
      spot: "Not allowed"
    },
    competitionFormat: [
        "Round 1 (Final): Duration: 1 Hour",
    ],
    judgingCriteria: [
      "Creativity / Innovation",
      "Presentation / Clarity",
      "Technical Accuracy",
      "Teamwork / Time management",
      "Judge’s decision will be final."
    ],
    eventSpecificRules: [
      "Can use any AI tool of your own.",
      "Team consists of only two members and once registered, you cannot change your partner.",
      "Topic and timing will be given by organizers.",
      "Judge’s decision is final."
    ],
    generalRules: [
      "Participants must report 15 minutes before the event starts.",
      "Use of unfair means or plagiarism leads to disqualification.",
      "Respect the event coordinators and judges.",
      "Mobile usage is not allowed unless specified.",
      "The organizers reserve the right to make changes if necessary."
    ],
    prizes: {
      first: "will be given",
      second: "will be given",
      certificates: "Certificate for all participants."
    },
    coordinators: [
        { name: "Sumukha Nayak", contact: "7022590747" },
        { name: "Prajwal", contact: "8722524974" }
    ]
  },
  {
    id: "mystery-solving",
    name: "Mystery Solving",
    organizedBy: "CSE(DS)",
    date: "30-10-25",
    venue: "Activity Room",
    eligibility: {
      openTo: "CSE(DS) department/[2nd,3rd,4th]year",
      team: "teams",
      maxMembers: 4
    },
    registration: {
      starts: "27-10-25",
      ends: "29-10-25",
      spot: "not allowed"
    },
    competitionFormat: [
        "Round 1 (Final):(Duration: 1 hour)",
    ],
    judgingCriteria: [
      "Creativity / Innovation",
      "Presentation / Clarity",
      "Technical Accuracy",
      "Teamwork / Time management",
      "Judge’s decision will be final."
    ],
    eventSpecificRules: [
        "Team consists of only four members and once registered, you cannot change your partner.",
        "Judge’s decision is final."
    ],
    generalRules: [
      "Participants must report 15 minutes before the event starts.",
      "Use of unfair means or plagiarism leads to disqualification.",
      "Respect the event coordinators and judges.",
      "Mobile usage is not allowed unless specified.",
      "The organizers reserve the right to make changes if necessary."
    ],
    prizes: {
      first: "will be given",
      second: "will be given",
      certificates: "Certificate for all participants."
    },
    coordinators: [
        { name: "Bhoomika Shetty", contact: "8105368471" },
        { name: "Ashritha v", contact: "914865190" }
    ]
  },
    {
    id: "tech-memes",
    name: "Tech Meme",
    organizedBy: "CSE(DS)",
    date: "30-10-25",
    venue: "student lounge",
    eligibility: {
      openTo: "Data Science department [2nd, 3rd and Final Year]",
      team: "individuals",
    },
    registration: {
      starts: "27-10-25",
      ends: "29-10-25",
      spot: "not allowed"
    },
    competitionFormat: [
         "Round 3 (Final): (Duration:1 hour)",
    ],
    judgingCriteria: [
      "Creativity / Innovation",
      "Presentation / Clarity",
      "Technical Accuracy",
      "Teamwork / Time management",
      "Judge’s decision will be final."
    ],
    eventSpecificRules: [
        "Topic will be given by organizers.",
        "Judge’s decision is final."
    ],
    generalRules: [
      "Participants must report 15 minutes before the event starts.",
      "Use of unfair means or plagiarism leads to disqualification.",
      "Respect the event coordinators and judges.",
      "Mobile usage is not allowed unless specified.",
      "The organizers reserve the right to make changes if necessary."
    ],
    prizes: {
      first: "will be given",
      second: "will be given",
      certificates: "Certificate for all participants."
    },
    coordinators: [
         { name: "Sumukha Nayak", contact: "7022590747" },
        { name: "Prajwal", contact: "8722524974" }
    ]
  },
  {
    id: "quiz",
    name: "Quiz",
    organizedBy: "CSE(DS)",
    date: "_________________________",
    venue: "_________________________",
    eligibility: {
      openTo: "____________________ department/year",
      team: "individuals / teams",
    },
    registration: {
      starts: "__________________",
      ends: "__________________",
      spot: "allowed / not allowed"
    },
    competitionFormat: [
        "Round 1: __________________________ (Duration: __________ minutes)",
        "Round 2: __________________________ (Duration: __________ minutes)",
        "Round 3 (Final): __________________________ (Duration: __________ minutes)",
    ],
    judgingCriteria: [
      "Creativity / Innovation",
      "Presentation / Clarity",
      "Technical Accuracy",
      "Teamwork / Time management",
      "Judge’s decision will be final."
    ],
    eventSpecificRules: [
        "Topic and timing will be given by organizers.",
        "Judge’s decision is final."
    ],
    generalRules: [
      "Participants must report 15 minutes before the event starts.",
      "Use of unfair means or plagiarism leads to disqualification.",
      "Respect the event coordinators and judges.",
      "Mobile usage is not allowed unless specified.",
      "The organizers reserve the right to make changes if necessary."
    ],
    prizes: {
      first: "___________________",
      second: "___________________",
      certificates: "Certificate for all participants."
    },
    coordinators: [
        { name: "Name 1", contact: "__________" },
        { name: "Name 2", contact: "__________" }
    ]
  },
  {
    id: "tech-talk",
    name: "Tech Talk",
    organizedBy: "_________________________",
    date: "_________________________",
    venue: "_________________________",
    eligibility: {
      openTo: "____________________ department/year",
      team: "individuals / teams",
    },
    registration: {
      starts: "__________________",
      ends: "__________________",
      spot: "allowed / not allowed"
    },
    competitionFormat: [
        "Round 1: __________________________ (Duration: __________ minutes)",
        "Round 2: __________________________ (Duration: __________ minutes)",
        "Round 3 (Final): __________________________ (Duration: __________ minutes)",
    ],
    judgingCriteria: [
      "Creativity / Innovation",
      "Presentation / Clarity",
      "Technical Accuracy",
      "Teamwork / Time management",
      "Judge’s decision will be final."
    ],
    eventSpecificRules: [
        "Topics and timing will be given by organizers.",
        "Topics will be given before.",
        "Judge’s decision is final."
    ],
    generalRules: [
      "Participants must report 15 minutes before the event starts.",
      "Use of unfair means or plagiarism leads to disqualification.",
      "Respect the event coordinators and judges.",
      "Mobile usage is not allowed unless specified.",
      "The organizers reserve the right to make changes if necessary."
    ],
    prizes: {
      first: "___________________",
      second: "___________________",
      certificates: "Certificate for all participants."
    },
    coordinators: [
        { name: "Name 1", contact: "__________" },
        { name: "Name 2", contact: "__________" }
    ]
  },
  {
    id: "tech-debate",
    name: "Tech Debate",
    organizedBy: "_________________________",
    date: "_________________________",
    venue: "_________________________",
    eligibility: {
      openTo: "____________________ department/year",
      team: "individuals / teams",
    },
    registration: {
      starts: "__________________",
      ends: "__________________",
      spot: "allowed / not allowed"
    },
    competitionFormat: [
        "Round 1: __________________________ (Duration: __________ minutes)",
        "Round 2: __________________________ (Duration: __________ minutes)",
        "Round 3 (Final): __________________________ (Duration: __________ minutes)",
    ],
    judgingCriteria: [
      "Creativity / Innovation",
      "Presentation / Clarity",
      "Technical Accuracy",
      "Teamwork / Time management",
      "Judge’s decision will be final."
    ],
    eventSpecificRules: [
        "1 vs 1.",
        "Topic and timing will be given by organizers.",
        "Judge’s decision is final."
    ],
    generalRules: [
      "Participants must report 15 minutes before the event starts.",
      "Use of unfair means or plagiarism leads to disqualification.",
      "Respect the event coordinators and judges.",
      "Mobile usage is not allowed unless specified.",
      "The organizers reserve the right to make changes if necessary."
    ],
    prizes: {
      first: "___________________",
      second: "___________________",
      certificates: "Certificate for all participants."
    },
    coordinators: [
        { name: "Name 1", contact: "__________" },
        { name: "Name 2", contact: "__________" }
    ]
  }
];
