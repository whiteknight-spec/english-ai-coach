export const PRESENT_SIMPLE_LESSON = {
  title: 'Present Simple Tense',
  tagline: 'Master habits, facts, universal truths, and daily routines',
  whatItIs:
    'The Present Simple is the foundational tense in English used to talk about actions that happen regularly (routines/habits), general truths or scientific facts, permanent states, and fixed schedules.',
  whenToUse: [
    {
      scenario: 'Habits and Daily Routines',
      description: 'Actions performed regularly or on a recurring basis.',
      example: 'I wake up at 6:00 AM every morning.',
      marker: 'Often used with frequency adverbs: always, usually, often, sometimes, never, every day.',
    },
    {
      scenario: 'General Truths & Scientific Facts',
      description: 'Things that are always true or natural laws.',
      example: 'Water boils at 100 degrees Celsius.',
      marker: 'Independent of specific time frames.',
    },
    {
      scenario: 'Permanent States & Situations',
      description: 'Long-term feelings, occupations, or residences.',
      example: 'She lives in Chicago and works as a software engineer.',
      marker: 'Stative verbs like like, know, believe, understand, live, work.',
    },
    {
      scenario: 'Timetables & Scheduled Events',
      description: 'Public transportation, schedules, or fixed events.',
      example: 'The morning train leaves at 8:30 AM.',
      marker: 'Refers to fixed future events based on an official schedule.',
    },
  ],
  sentenceStructures: [
    {
      type: 'Positive (+) Sentences',
      formula: 'Subject + Base Verb (V1) [add -s/-es for He/She/It] + Object/Complement',
      examples: [
        { subject: 'I / You / We / They', sentence: 'They review the test results every Friday.' },
        { subject: 'He / She / It', sentence: 'He reviews the test results every Friday.' },
      ],
      note: 'Only 3rd-person singular subjects (He, She, It, or singular nouns like "The manager") modify the verb.',
    },
    {
      type: 'Negative (-) Sentences',
      formula: 'Subject + do not (don’t) / does not (doesn’t) + Base Verb (V1) + Object',
      examples: [
        { subject: 'I / You / We / They', sentence: 'We do not (don’t) understand the delay.' },
        { subject: 'He / She / It', sentence: 'She does not (doesn’t) understand the delay.' },
      ],
      note: 'Crucial rule: When "does not / doesn’t" is used, the main verb reverts to base form (V1). Never say "doesn’t understands".',
    },
    {
      type: 'Question (?) Sentences',
      formula: 'Do / Does + Subject + Base Verb (V1) + Object?',
      examples: [
        { subject: 'I / You / We / They', sentence: 'Do you work remotely on Mondays?' },
        { subject: 'He / She / It', sentence: 'Does he work remotely on Mondays?' },
      ],
      note: 'Use "Do" for I/you/we/they and plural subjects. Use "Does" for he/she/it and singular subjects. The main verb stays in base form.',
    },
  ],
  thirdPersonRules: [
    {
      rule: 'General Rule (Most Verbs)',
      detail: 'Add -s to the base verb.',
      examples: ['work → works', 'speak → speaks', 'read → reads', 'write → writes'],
    },
    {
      rule: 'Verbs Ending in -s, -ss, -sh, -ch, -x, -z, or -o',
      detail: 'Add -es for ease of pronunciation.',
      examples: ['watch → watches', 'teach → teaches', 'pass → passes', 'fix → fixes', 'go → goes', 'do → does'],
    },
    {
      rule: 'Consonant + -y',
      detail: 'Change -y to -i and add -es (-ies).',
      examples: ['study → studies', 'fly → flies', 'try → tries', 'carry → carries'],
    },
    {
      rule: 'Vowel + -y',
      detail: 'Just add -s (do NOT remove y).',
      examples: ['play → plays', 'stay → stays', 'enjoy → enjoys', 'say → says'],
    },
    {
      rule: 'Irregular Forms',
      detail: 'Completely changes form.',
      examples: ['have → has', 'be (am/are) → is'],
    },
  ],
  goldenRules: [
    'Rule 1: In negatives and questions with does/doesn’t, the main verb NEVER takes an -s.',
    'Rule 2: Do not mix "is/are" with active verbs in Present Simple (e.g. Say "She works", NOT "She is work").',
    'Rule 3: Adverbs of frequency (always, often, usually) normally go BEFORE the main verb, but AFTER the verb "to be".',
  ],
};

export const PRESENT_SIMPLE_TEST_QUESTIONS = [
  {
    id: 1,
    topic: '3rd Person Singular (-s/-es)',
    prompt: 'Complete the sentence:\n"My manager usually _______ our quarterly metrics on Monday morning."',
    options: ['review', 'reviews', 'reviewing', 'is review'],
    correctIndex: 1,
    correctSentence: 'My manager usually reviews our quarterly metrics on Monday morning.',
    rule: 'Third-person singular subjects (My manager = he/she) take base verb + -s.',
    explanation:
      '"My manager" is a third-person singular noun (equivalent to he or she). In the Present Simple positive tense, standard verbs add "-s" (review → reviews). "Reviewing" requires an auxiliary verb and is continuous, and "is review" is ungrammatical.',
  },
  {
    id: 2,
    topic: 'Negation with Does/Doesn’t',
    prompt: 'Which sentence is grammatically correct?',
    options: [
      'David doesn’t likes spicy food.',
      'David don’t like spicy food.',
      'David doesn’t like spicy food.',
      'David not likes spicy food.',
    ],
    correctIndex: 2,
    correctSentence: 'David doesn’t like spicy food.',
    rule: 'After "does not" or "doesn’t", the main verb MUST remain in the base form (V1).',
    explanation:
      'For third-person singular (David = he), we use "does not" or "doesn’t". Once "does" carries the third-person inflection, the main verb drops the "-s" and reverts to its base form ("like", not "likes"). "Don’t" is only for I/you/we/they.',
  },
  {
    id: 3,
    topic: 'Question Formation with Do/Does',
    prompt: 'Choose the correct question form:\n"_______ your colleagues commute by train every day?"',
    options: ['Does', 'Do', 'Are', 'Is'],
    correctIndex: 1,
    correctSentence: 'Do your colleagues commute by train every day?',
    rule: 'Use "Do" with plural subjects (colleagues = they) in Present Simple questions.',
    explanation:
      '"Your colleagues" is plural (they). Present Simple questions for plural subjects take the auxiliary "Do" + subject + base verb ("commute"). "Does" is only used for singular subjects, and "Are" cannot be paired with a bare base verb like "commute".',
  },
  {
    id: 4,
    topic: 'Spelling Rules (-ch, -sh, -ss + -es)',
    prompt: 'Complete the sentence:\n"Professor Alvarez _______ advanced algorithms at the university."',
    options: ['teaches', 'teachs', 'teach', 'is teach'],
    correctIndex: 0,
    correctSentence: 'Professor Alvarez teaches advanced algorithms at the university.',
    rule: 'Verbs ending in -ch, -sh, -ss, -x, or -o add "-es" for 3rd person singular.',
    explanation:
      'Because "teach" ends with "-ch", we must add "-es" ("teaches") for phonetic ease. Writing "teachs" is a spelling mistake, and "teach" without suffix cannot be used with a singular subject (Professor Alvarez).',
  },
  {
    id: 5,
    topic: 'Consonant + Y Spelling Rule',
    prompt: 'Choose the correct form of the verb "study":\n"Elena _______ for her medical board exams every night."',
    options: ['studys', 'studies', 'study', 'studying'],
    correctIndex: 1,
    correctSentence: 'Elena studies for her medical board exams every night.',
    rule: 'When a verb ends in a consonant + "y" (d + y), drop the "y" and add "-ies".',
    explanation:
      'The verb "study" ends in consonant "d" followed by "y". Under English spelling rules, change "y" to "i" and add "-es" to produce "studies". In contrast, verbs ending in a vowel + y (like play, stay) merely add "-s" (plays).',
  },
  {
    id: 6,
    topic: 'Irregular Verb (have vs has)',
    prompt: 'Complete the sentence:\n"Our company _______ offices in London, Tokyo, and New York."',
    options: ['have', 'has', 'haves', 'is having of'],
    correctIndex: 1,
    correctSentence: 'Our company has offices in London, Tokyo, and New York.',
    rule: '"Have" is irregular in the 3rd person singular: He/She/It "has".',
    explanation:
      '"Our company" is a singular collective noun (it). The third-person singular of "have" is the irregular form "has". The form "haves" does not exist in standard English.',
  },
  {
    id: 7,
    topic: 'Negation for I/You/We/They',
    prompt: 'Complete the sentence:\n"We _______ work overtime unless there is an urgent deployment."',
    options: ['doesn’t', 'don’t', 'not', 'aren’t'],
    correctIndex: 1,
    correctSentence: 'We don’t work overtime unless there is an urgent deployment.',
    rule: 'Use "do not" (don’t) for negative statements with I, You, We, and They.',
    explanation:
      'With the first-person plural subject "We", the negative auxiliary is "do not" (don’t) followed by the base verb "work". "Doesn’t" is strictly reserved for third-person singular subjects (he/she/it).',
  },
  {
    id: 8,
    topic: 'Question Formation with 3rd Person Singular',
    prompt: 'Which question is structured accurately?',
    options: [
      'Does the flight departs at 9:00 PM?',
      'Does the flight depart at 9:00 PM?',
      'Do the flight depart at 9:00 PM?',
      'Is the flight departs at 9:00 PM?',
    ],
    correctIndex: 1,
    correctSentence: 'Does the flight depart at 9:00 PM?',
    rule: 'Question structure: Does + Singular Subject + Base Verb (no -s)?',
    explanation:
      'The subject "the flight" is singular (it), so we begin with auxiliary "Does". However, because the auxiliary "Does" already carries the 3rd-person singular marker, the main verb must remain in its pure base form ("depart", never "departs").',
  },
  {
    id: 9,
    topic: 'Adverbs of Frequency Placement',
    prompt: 'Choose the sentence with correct adverb placement:',
    options: [
      'She arrives always on time for the standup meeting.',
      'She always arrives on time for the standup meeting.',
      'She arrives on time always for the standup meeting.',
      'Always she arrive on time for the standup meeting.',
    ],
    correctIndex: 1,
    correctSentence: 'She always arrives on time for the standup meeting.',
    rule: 'Adverbs of frequency (always, usually, never) are placed BEFORE the main verb.',
    explanation:
      'Frequency adverbs such as "always", "often", and "never" typically precede the main active verb in a sentence: Subject + Adverb + Verb ("She always arrives"). Notice also that "arrives" correctly retains the "-s" for subject "She".',
  },
  {
    id: 10,
    topic: 'Avoiding "Be" + Active Verb Confusion',
    prompt: 'Identify the common beginner error in this sentence:\n"He is speak English very fluently."',
    options: [
      'Correct: "He speaks English very fluently."',
      'Correct: "He speak English very fluently."',
      'Correct: "He is speaks English very fluently."',
      'Correct: "He does speaks English very fluently."',
    ],
    correctIndex: 0,
    correctSentence: 'He speaks English very fluently.',
    rule: 'Do not combine the auxiliary verb "is/are" with a base verb in Present Simple.',
    explanation:
      'A frequent error is placing "is" before an active verb ("is speak"). In the Present Simple tense, express routine ability directly with the inflected verb: "He speaks English very fluently." "Is" is only used as a linking verb ("He is fluent") or in continuous tenses ("He is speaking").',
  },
];
