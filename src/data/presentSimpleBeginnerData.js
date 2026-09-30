/**
 * Present Simple Beginner Curriculum
 * Available languages: 'tanglish' (default), 'tamil', 'english'
 */

export const LESSON_LANGUAGES = [
  { id: 'tanglish', label: 'Tanglish', sublabel: 'Default • Easy to learn' },
  { id: 'tamil', label: 'தமிழ்', sublabel: 'எளிய தமிழ் விளக்கம்' },
  { id: 'english', label: 'Simple English', sublabel: 'Plain & friendly English' },
];

export const BEGINNER_LESSON_CONTENT = {
  // 1. What is Tense?
  whatIsTense: {
    tanglish: {
      title: 'Tense na enna? (காலம்)',
      simpleExplanation:
        'Tense na onnume illa — oru seyal (action) eppo nadanthuchu nu kaattura oru vishayam dhaan. Adhavadhu, adhu ippo nadakkudha? Munnaadiye mudinjurucha? Illa ini mela nadakkapogudha?',
      points: [
        'Present Tense = Ippo nadakkura vishayam (தற்காலம்)',
        'Past Tense = Munnaadiye mudinja vishayam (கடந்த காலம்)',
        'Future Tense = Ini mela nadakka pora vishayam (எதிர்காலம்)',
      ],
      takeaway: 'Oru action oda TIME-ah solradhudhaan English-la "Tense".',
    },
    tamil: {
      title: 'Tense (காலம்) என்றால் என்ன?',
      simpleExplanation:
        'Tense என்பது நாம் செய்யும் ஒரு செயல் எப்போது நடந்தது என்பதைக் குறிக்கும் இலக்கணம். அதாவது செயல் இப்போது நடக்கிறதா, ஏற்கெனவே முடிந்துவிட்டதா, அல்லது இனிமேல் நடக்கப்போகிறதா?',
      points: [
        'Present Tense = நிகழ்காலம் (தற்போது நடப்பது)',
        'Past Tense = இறந்த காலம் (ஏற்கெனவே முடிந்தது)',
        'Future Tense = எதிர்காலம் (இனிமேல் நடப்பது)',
      ],
      takeaway: 'ஒரு செயல் நடைபெறும் நேரத்தைக் குறிப்பதே "Tense" ஆகும்.',
    },
    english: {
      title: 'What is a "Tense"?',
      simpleExplanation:
        'A tense simply tells you WHEN an action happens. Did it happen in the past, is it happening right now or regularly, or will it happen in the future?',
      points: [
        'Present Tense = Things happening now or regularly',
        'Past Tense = Things that already finished',
        'Future Tense = Things that will happen later',
      ],
      takeaway: 'Tense = The time of an action.',
    },
  },

  // 2. What is Present Simple?
  whatIsPresentSimple: {
    tanglish: {
      title: 'Present Simple na enna? Eppolam use pannanum?',
      simpleExplanation:
        'Present Simple-na ippo indha second-la nadakkura vishayam mattum illa! Dhinamum neenga seira palakkangal (habits), unmaiyana vishayangal (facts), and ungaloda daily routine pathi pesa dhaan idhai use pannuvom.',
      everydayScenarios: [
        {
          title: 'Daily Habits / Routines (தினசரி பழக்கங்கள்)',
          desc: 'Dhinamum repeat aagura seyalgal.',
          egEn: 'I drink coffee every morning.',
          egLocal: 'Naan dhinamum kaalaila coffee kudikkiren.',
        },
        {
          title: 'Universal Facts (உலக உண்மைகள்)',
          desc: 'Eppovume maaraadha unmaigal.',
          egEn: 'The sun rises in the east.',
          egLocal: 'Sooriyan kizhakkil udhikkiradhu.',
        },
        {
          title: 'Permanent States (நிரந்தரமான நிலைகள்)',
          desc: 'Unmaiyana ungaloda velai, irukkira idam.',
          egEn: 'I live in Chennai.',
          egLocal: 'Naan Chennai-la vasikkiren.',
        },
      ],
    },
    tamil: {
      title: 'Present Simple என்றால் என்ன? எப்போது பயன்படுத்த வேண்டும்?',
      simpleExplanation:
        'Present Simple என்பது நாம் அன்றாடம் வழக்கமாக செய்யும் செயல்கள் (வழக்கங்கள்), மாற்ற முடியாத உலக உண்மைகள், மற்றும் நமது நிரந்தரமான வாழ்க்கை நிலைகளைச் சொல்ல பயன்படுகிறது.',
      everydayScenarios: [
        {
          title: 'தினசரி வழக்கங்கள் (Daily Habits)',
          desc: 'ஒவ்வொரு நாளும் திரும்பத் திரும்ப செய்யும் செயல்கள்.',
          egEn: 'I drink coffee every morning.',
          egLocal: 'நான் தினமும் காலையில் காபி குடிக்கிறேன்.',
        },
        {
          title: 'உலக உண்மைகள் (General Truths)',
          desc: 'எப்போதும் மாறாத உண்மைகள்.',
          egEn: 'The sun rises in the east.',
          egLocal: 'சூரியன் கிழக்கில் உதிக்கிறது.',
        },
        {
          title: 'நிரந்தர நிலைகள் (Permanent States)',
          desc: 'நாம் வாழும் இடம், தொழில் பற்றிய உண்மைகள்.',
          egEn: 'I live in Chennai.',
          egLocal: 'நான் சென்னையில் வசிக்கிறேன்.',
        },
      ],
    },
    english: {
      title: 'What is Present Simple? When do we use it?',
      simpleExplanation:
        'Present Simple is NOT just about what is happening right this second. It is used to talk about your daily habits, routines, universal truths, and things that are generally true in life.',
      everydayScenarios: [
        {
          title: 'Daily Habits & Routines',
          desc: 'Things you repeat regularly.',
          egEn: 'I drink coffee every morning.',
          egLocal: 'A habit done every single day.',
        },
        {
          title: 'General Truths & Facts',
          desc: 'Things that are always true.',
          egEn: 'The sun rises in the east.',
          egLocal: 'A natural, unchanging scientific fact.',
        },
        {
          title: 'Permanent States',
          desc: 'Where you live or work.',
          egEn: 'I live in Chennai.',
          egLocal: 'A continuous long-term reality.',
        },
      ],
    },
  },

  // 3. What is Verb and V1?
  whatIsV1: {
    tanglish: {
      title: 'Verb na enna? "V1" na enna?',
      simpleExplanation:
        'Verb na "Action Word" — neenga seira seyal. Udhaaranathukku: eat (saapidu), sleep (thoongu), go (po), speak (pesu), work (velai sei).',
      v1Meaning:
        '"V1" na verum dictionary-la irukkura Base Form (original form). Indha verb kooda edhuvum serkaama (ing, ed illama) irukkura original word dhaan V1.',
      examples: [
        { v1: 'eat', tamil: 'சாப்பிடு' },
        { v1: 'work', tamil: 'வேலை செய்' },
        { v1: 'speak', tamil: 'பேசு' },
        { v1: 'play', tamil: 'விளையாடு' },
      ],
    },
    tamil: {
      title: 'Verb மற்றும் "V1" என்றால் என்ன?',
      simpleExplanation:
        'Verb என்பது ஒரு வினைச்சொல் (செயல்). உதாரணம்: eat (சாப்பிடு), sleep (தூங்கு), go (போ), work (வேலை செய்).',
      v1Meaning:
        '"V1" என்பது ஒரு வினைச்சொல்லின் ஆரம்ப அடிப்படை வடிவம் (Base Form). எந்த மாற்றமும் (ing, ed) இல்லாத நேரடிச் சொல்.',
      examples: [
        { v1: 'eat', tamil: 'சாப்பிடு' },
        { v1: 'work', tamil: 'வேலை செய்' },
        { v1: 'speak', tamil: 'பேசு' },
        { v1: 'play', tamil: 'விளையாடு' },
      ],
    },
    english: {
      title: 'What is a Verb and what is "V1"?',
      simpleExplanation:
        'A Verb is an action word — what someone does. For example: eat, sleep, go, speak, work.',
      v1Meaning:
        '"V1" simply means the Base Form (the root word). It has no "-ed", no "-ing", and no extra additions.',
      examples: [
        { v1: 'eat', tamil: 'Base form' },
        { v1: 'work', tamil: 'Base form' },
        { v1: 'speak', tamil: 'Base form' },
        { v1: 'play', tamil: 'Base form' },
      ],
    },
  },

  // 4. Positive Sentences & The Big Golden Rule: I/You/We/They vs He/She/It
  positiveRules: {
    tanglish: {
      title: 'Positive Sentences & The Golden Rule (s/es ரகசியம்)',
      simpleExplanation:
        'English-la subject rendu group-ah piriyudhu. Idhai mattum purinjukitta Present Simple 80% mudinjiruchu!',
      groupA: {
        title: 'Group 1: I, You, We, They (Palaya aatkal / Plural)',
        rule: 'Verb-ah apdiye V1 form-la podanum. Edhuvume serka koodadhu!',
        examples: [
          'I work in an office. (Naan office-la velai seiren)',
          'You speak English well. (Neenga nallaa English pesureenga)',
          'We play cricket. (Naanga cricket vilayaduroam)',
          'They live here. (Avanga inga vasikkiraanga)',
        ],
      },
      groupB: {
        title: 'Group 2: He, She, It (Oru aalu / Third person singular)',
        rule: 'Verb kooda kandaippa "-s" illa "-es" serkanum!',
        whyExplanation:
          'Yean s/es serkanum? English grammar-la "He, She, It" vandhaa verb-kku oru "s" kuduthu honor pannanum nu vechukonga. Idhu English oda basic rule.',
        examples: [
          'He works in an office. (Avan office-la velai seiran → work + s)',
          'She speaks English well. (Aval nalla English pesuraal → speak + s)',
          'It runs fast. (Adhu vegamaa odudhu → run + s)',
          'Ravi watches movies. (Ravi padangal paarkiran → watch + es)',
        ],
      },
    },
    tamil: {
      title: 'நேர்மறை வாக்கியங்கள் (Positive Sentences) & s/es விதி',
      simpleExplanation:
        'ஆங்கிலத்தில் எழுவாய் (Subject) இரண்டு முக்கிய பிரிவுகளாக பிரிகிறது. இதை நினைவில் கொண்டால் இந்த காலம் மிக எளிது!',
      groupA: {
        title: 'பிரிவு 1: I, You, We, They',
        rule: 'வினைச்சொல்லை (Verb) அப்படியே V1 வடிவில் பயன்படுத்த வேண்டும். எந்த மாற்றமும் தேவையில்லை!',
        examples: [
          'I work in an office. (நான் அலுவலகத்தில் வேலை செய்கிறேன்)',
          'You speak English well. (நீங்கள் நன்றாக ஆங்கிலம் பேசுகிறீர்கள்)',
          'We play cricket. (நாங்கள் கிரிக்கெட் விளையாடுகிறோம்)',
          'They live here. (அவர்கள் இங்கு வசிக்கிறார்கள்)',
        ],
      },
      groupB: {
        title: 'பிரிவு 2: He, She, It மற்றும் ஒருமைப் பெயர்கள்',
        rule: 'வினைச்சொல்லுடன் (Verb) கட்டாயமாக "-s" அல்லது "-es" சேர்க்க வேண்டும்!',
        whyExplanation:
          'ஏன் s/es சேர்க்க வேண்டும்? ஆங்கில இலக்கணப்படி, மூன்றாம் நபர் ஒருமை (He/She/It) வரும்போது வினைச்சொல் ஒருமை வடிவம் பெற "-s" ஏற்க வேண்டும்.',
        examples: [
          'He works in an office. (அவன் அலுவலகத்தில் வேலை செய்கிறான் → work + s)',
          'She speaks English well. (அவள் நன்றாக ஆங்கிலம் பேசுகிறாள் → speak + s)',
          'Ravi watches movies. (ரவி திரைப்படங்கள் பார்க்கிறான் → watch + es)',
        ],
      },
    },
    english: {
      title: 'Positive Sentences & The Golden Rule of s/es',
      simpleExplanation:
        'In English, subjects are split into two groups. Once you remember this split, Present Simple is simple!',
      groupA: {
        title: 'Group 1: I, You, We, They (and plural nouns)',
        rule: 'Use the base verb (V1) exactly as it is. Add nothing!',
        examples: [
          'I work in an office.',
          'You speak English well.',
          'We play cricket.',
          'They live here.',
        ],
      },
      groupB: {
        title: 'Group 2: He, She, It (and singular names like John, The train)',
        rule: 'Always add "-s" or "-es" to the base verb!',
        whyExplanation:
          'Why add s/es? In English grammar, a singular third-person subject requires an "-s" marker on the present tense verb.',
        examples: [
          'He works in an office. (work + s)',
          'She speaks English well. (speak + s)',
          'It runs fast. (run + s)',
          'Ravi watches movies. (watch + es)',
        ],
      },
    },
  },

  // 5. Why s vs es? Simple spelling rule
  spellingRules: {
    tanglish: {
      title: 'Eppo "-s" podanum? Eppo "-es" podanum?',
      simpleExplanation: 'Romba simple rule:',
      rules: [
        {
          condition: 'Verb mudiyum podhu: -ch, -sh, -ss, -x, -o vandhaa',
          action: '"-es" serkanum (Vaayaala solli paarka easy-ah irukka dhaan)',
          eg: 'watch → watches, teach → teaches, go → goes, pass → passes',
        },
        {
          condition: 'Consonant + "y" mudinjaa (study, try)',
          action: '"y" ah eduthutu "-ies" serkanum',
          eg: 'study → studies, try → tries',
        },
        {
          condition: 'Micha ellathukkume (normal verbs)',
          action: 'Verum "-s" mattum serthaal podhum',
          eg: 'work → works, play → plays (vowel+y), read → reads',
        },
      ],
    },
    tamil: {
      title: 'எப்போது "-s", எப்போது "-es" சேர்க்க வேண்டும்?',
      simpleExplanation: 'மிக எளிய எழுத்து விதிகளே இவை:',
      rules: [
        {
          condition: 'வினைச்சொல் -ch, -sh, -ss, -x, -o என முடிந்தால்',
          action: '"-es" சேர்க்க வேண்டும் (உச்சரிப்பு வசதிக்காக)',
          eg: 'watch → watches, teach → teaches, go → goes',
        },
        {
          condition: 'மெய்யெழுத்து + "y" என முடிந்தால் (study, try)',
          action: '"y" நீக்கி "-ies" சேர்க்க வேண்டும்',
          eg: 'study → studies, try → tries',
        },
        {
          condition: 'மற்ற அனைத்து வழக்கமான வினைச்சொற்களுக்கும்',
          action: 'வெறும் "-s" சேர்த்தால் போதுமானது',
          eg: 'work → works, play → plays, read → reads',
        },
      ],
    },
    english: {
      title: 'When to add "-s" vs "-es"?',
      simpleExplanation: 'Three easy spelling patterns:',
      rules: [
        {
          condition: 'Verbs ending in -ch, -sh, -ss, -x, or -o',
          action: 'Add "-es" (for easy pronunciation)',
          eg: 'watch → watches, teach → teaches, go → goes',
        },
        {
          condition: 'Verbs ending in consonant + "y"',
          action: 'Change "y" to "-ies"',
          eg: 'study → studies, try → tries',
        },
        {
          condition: 'All other normal verbs',
          action: 'Simply add "-s"',
          eg: 'work → works, play → plays, read → reads',
        },
      ],
    },
  },

  // 6. Negative sentences & CRITICAL WARNING ("doesn't play" vs "doesn't plays")
  negativeRules: {
    tanglish: {
      title: 'Negative Sentences (இல்லை என்று சொல்லுதல்)',
      simpleExplanation:
        'Oru vishayatha "Illa / seivadhu illa" nu solla "don’t" illa "doesn’t" use pannuvom.',
      breakdown: [
        {
          subject: 'I, You, We, They',
          helper: 'do not (don’t) + V1',
          eg: 'I don’t drink tea. (Naan tea kudikkiradhilla)',
        },
        {
          subject: 'He, She, It',
          helper: 'does not (doesn’t) + V1',
          eg: 'He doesn’t drink tea. (Avan tea kudikkiradhilla)',
        },
      ],
      criticalWarning: {
        title: '⚠️ Romba Romba Mukkiyamana Rule (Beginners thappu panra idam!):',
        correct: 'He doesn’t play cricket.  ✅ (CORRECT)',
        wrong: 'He doesn’t plays cricket. ❌ (BIG MISTAKE!)',
        reason:
          'Yean thappu? "Does" la ஏற்கெனவே "-es" vandhuruchu! Rendu thadava "s" podakoodadhu. Does vandhutale, main verb thirumba pazhaya plain V1 form-kku (play) poidum!',
      },
    },
    tamil: {
      title: 'எதிர்மறை வாக்கியங்கள் (Negative Sentences)',
      simpleExplanation:
        'ஒரு செயலை நாம் வழக்கமாக செய்வதில்லை என்று சொல்ல "don’t" அல்லது "doesn’t" பயன்படுத்துவோம்.',
      breakdown: [
        {
          subject: 'I, You, We, They',
          helper: 'do not (don’t) + V1',
          eg: 'I don’t drink tea. (நான் தேநீர் குடிப்பதில்லை)',
        },
        {
          subject: 'He, She, It',
          helper: 'does not (doesn’t) + V1',
          eg: 'He doesn’t drink tea. (அவன் தேநீர் குடிப்பதில்லை)',
        },
      ],
      criticalWarning: {
        title: '⚠️ மிக முக்கியமான எச்சரிக்கை விதி (அடிக்கடி நேரும் தவறு):',
        correct: 'He doesn’t play cricket.  ✅ (சரி)',
        wrong: 'He doesn’t plays cricket. ❌ (தவறு)',
        reason:
          'ஏன் தவறு? "Does" என்ற சொல்லிலேயே "-es" ஏற்கெனவே வந்துவிட்டது. எனவே அடுத்து வரும் பிரதான வினைச்சொல்லில் மீண்டும் "s" சேர்க்கக்கூடாது! வினைச்சொல் அடிப்படை V1 (play) ஆக மட்டுமே இருக்க வேண்டும்.',
      },
    },
    english: {
      title: 'Negative Sentences (Saying "No / Not")',
      simpleExplanation:
        'To say someone does NOT do an action, we use "don’t" or "doesn’t" followed by the base verb.',
      breakdown: [
        {
          subject: 'I, You, We, They',
          helper: 'do not (don’t) + V1 (base verb)',
          eg: 'I don’t drink tea.',
        },
        {
          subject: 'He, She, It',
          helper: 'does not (doesn’t) + V1 (base verb)',
          eg: 'He doesn’t drink tea.',
        },
      ],
      criticalWarning: {
        title: '⚠️ THE NUMBER ONE BEGINNER TRAP:',
        correct: 'He doesn’t play cricket.  ✅ (CORRECT)',
        wrong: 'He doesn’t plays cricket. ❌ (WRONG)',
        reason:
          'Why is it wrong? The auxiliary verb "does" already has the "-es" ending! Never add "s" twice. Once "does" appears, the main verb resets to its pure base form ("play", not "plays").',
      },
    },
  },

  // 7. Questions (Do / Does)
  questionRules: {
    tanglish: {
      title: 'Kelvigal (Questions) Eppadi Kaetpadhu?',
      simpleExplanation:
        'Present Simple-la kelvi kekkanumna munnadi "Do" illa "Does" vechu thodanganum.',
      breakdown: [
        {
          helper: 'Do + I / You / We / They + V1?',
          egEn: 'Do you work here?',
          egMeaning: 'Neenga inga velai seireengala?',
        },
        {
          helper: 'Does + He / She / It + V1? (No "s" in the verb!)',
          egEn: 'Does he work here?',
          egMeaning: 'Avan inga velai seirana? (Kavanikkavum: "Does he work?", NOT "Does he works?")',
        },
      ],
    },
    tamil: {
      title: 'கேள்விகள் (Questions) அமைப்பது எப்படி?',
      simpleExplanation:
        'கேள்வி வாக்கியம் அமைக்க வாக்கியத்தின் தொடக்கத்தில் "Do" அல்லது "Does" முன்னால் வைக்க வேண்டும்.',
      breakdown: [
        {
          helper: 'Do + I / You / We / They + V1?',
          egEn: 'Do you work here?',
          egMeaning: 'நீங்கள் இங்கு வேலை செய்கிறீர்களா?',
        },
        {
          helper: 'Does + He / She / It + V1? (வினைச்சொல்லில் "s" வராது!)',
          egEn: 'Does he work here?',
          egMeaning: 'அவன் இங்கு வேலை செய்கிறானா? ("Does he works?" என கேட்கக்கூடாது)',
        },
      ],
    },
    english: {
      title: 'How to Ask Questions in Present Simple',
      simpleExplanation:
        'To ask a yes/no question about routines or facts, start the sentence with "Do" or "Does".',
      breakdown: [
        {
          helper: 'Do + I / You / We / They + Base Verb (V1)?',
          egEn: 'Do you work here?',
          egMeaning: 'Asking about yourself, you, we, or they.',
        },
        {
          helper: 'Does + He / She / It + Base Verb (V1)?',
          egEn: 'Does he work here?',
          egMeaning: 'Remember: the main verb stays pure base form ("work", never "works").',
        },
      ],
    },
  },
};

// -------------------------------------------------------------
// GUIDED PRACTICE: 2 Easy -> 3 Medium -> 1 Challenge
// Every question includes:
// - level
// - prompt
// - hint in 3 languages
// - options
// - correctIndex
// - correctSentence
// - rule in 3 languages
// - explanation in 3 languages
// - similarFollowup (instant reinforcement question if wrong!)
// -------------------------------------------------------------

export const GUIDED_PRACTICE_QUESTIONS = [
  // Question 1 (Easy): Subject "I" + V1
  {
    id: 'guided-1',
    level: 'easy',
    levelLabel: 'Step 1: Very Easy',
    prompt: 'Fill in the blank:\n"I _______ English every morning."',
    hint: {
      tanglish: 'Hint: "I" vandhaa verb kooda "s" serka koodadhu! Verum base verb V1 mattum dhaan.',
      tamil: 'குறிப்பு: "I" (நான்) வந்தால் வினைச்சொல்லுடன் "s" சேர்க்கக்கூடாது. நேரடி V1 மட்டுமே.',
      english: 'Hint: With subject "I", do NOT add "-s". Use the pure base verb.',
    },
    options: ['learn', 'learns', 'learning', 'is learn'],
    correctIndex: 0,
    correctSentence: 'I learn English every morning.',
    rule: {
      tanglish: 'I / You / We / They + V1 (No -s added).',
      tamil: 'I / You / We / They + V1 (s சேர்க்கக்கூடாது).',
      english: 'I / You / We / They take base verb V1 without "-s".',
    },
    explanation: {
      tanglish:
        '"I" vandhirukkira edathula verb kooda "s" poda koodadhu. Adhanaala "learn" dhaan correct. "Learns" He/She/It kku mattum dhaan varum.',
      tamil:
        '"I" எழுவாயாக வரும்போது வினைச்சொல்லின் ஆரம்ப அடிப்படை வடிவம் (learn) மட்டுமே வரும். "-s" சேர்க்கக்கூடாது.',
      english:
        'With "I", we always use the base form of the verb without "-s". So "learn" is the only correct answer.',
    },
    similarFollowup: {
      prompt: 'Quick Drill: Complete this similar sentence:\n"We _______ football on weekends."',
      options: ['plays', 'play', 'playing', 'is play'],
      correctIndex: 1,
      correctSentence: 'We play football on weekends.',
      ruleExplanation: 'Subject "We" belongs to Group 1 (I/You/We/They), so use base verb "play" without "s".',
    },
  },

  // Question 2 (Easy): Subject "He" + V1+s
  {
    id: 'guided-2',
    level: 'easy',
    levelLabel: 'Step 2: Very Easy',
    prompt: 'Fill in the blank:\n"He _______ in a software company."',
    hint: {
      tanglish: 'Hint: "He" (oru aalu) vandhaa verb kooda kandaippa "-s" serkanum!',
      tamil: 'குறிப்பு: "He" (அவன்) வரும்போது வினைச்சொல்லுடன் கட்டாயமாக "-s" சேர்க்க வேண்டும்.',
      english: 'Hint: For third person singular "He", always add "-s" to the verb.',
    },
    options: ['work', 'works', 'working', 'is work'],
    correctIndex: 1,
    correctSentence: 'He works in a software company.',
    rule: {
      tanglish: 'He / She / It + V1 + s.',
      tamil: 'He / She / It + V1 + s.',
      english: 'He / She / It requires base verb + "-s".',
    },
    explanation: {
      tanglish:
        '"He" oru aalu (third person singular). Namma padicha golden rule padi, He vandhaa verb kooda "s" serkanum: work + s = works!',
      tamil:
        '"He" ஒருமை எழுவாய் என்பதால் ஆங்கில இலக்கணப்படி வினைச்சொல்லுடன் "s" சேர்த்து "works" என வர வேண்டும்.',
      english:
        '"He" is third-person singular. Under the Present Simple rule, you must add "-s" to the base verb: work + s = works.',
    },
    similarFollowup: {
      prompt: 'Quick Drill: Complete this similar sentence:\n"She _______ tea in the afternoon."',
      options: ['drink', 'drinks', 'drinking', 'is drink'],
      correctIndex: 1,
      correctSentence: 'She drinks tea in the afternoon.',
      ruleExplanation: '"She" is third-person singular, so add "-s" to drink -> drinks.',
    },
  },

  // Question 3 (Medium): Negative with doesn't + V1
  {
    id: 'guided-3',
    level: 'medium',
    levelLabel: 'Step 3: Medium (Negation)',
    prompt: 'Which sentence is 100% correct?',
    hint: {
      tanglish: 'Hint: "doesn’t" vandha verb kooda marubadiyum "s" serka koodadhu!',
      tamil: 'குறிப்பு: "doesn’t" வந்தவுடன் வினைச்சொல்லில் மீண்டும் "s" வரக்கூடாது.',
      english: 'Hint: Remember the golden trap: after "doesn’t", the verb drops the "-s".',
    },
    options: [
      'He doesn’t likes coffee.',
      'He doesn’t like coffee.',
      'He don’t like coffee.',
      'He not like coffee.',
    ],
    correctIndex: 1,
    correctSentence: 'He doesn’t like coffee.',
    rule: {
      tanglish: 'He + doesn’t + V1 (plain base verb, NO "s").',
      tamil: 'He + doesn’t + V1 (அடிப்படை வினைச்சொல் மட்டுமே, s வராது).',
      english: 'After "doesn’t", the verb returns to base form V1 without "-s".',
    },
    explanation: {
      tanglish:
        'Aadhaa! "Does"-la ஏற்கெனவே "es" irukku. So "like" kooda marubadiyum "s" poda koodadhu! "He doesn’t like coffee" dhaan correct. "He doesn’t likes" thappu!',
      tamil:
        '"Does" சொல்லில் ஏற்கெனவே "-es" இருப்பதால், பிரதான வினைச்சொல்லில் "s" வரக்கூடாது. "He doesn’t like" என்பதுதான் சரியான பயன்பாடு.',
      english:
        'The helper "does" already contains the singular "-es" inflection. Do not double up by adding "s" to like. "He doesn’t like" is correct.',
    },
    similarFollowup: {
      prompt: 'Quick Drill: Which one is correct for negative?',
      options: [
        'She doesn’t plays tennis.',
        'She doesn’t play tennis.',
        'She don’t play tennis.',
        'She not plays tennis.',
      ],
      correctIndex: 1,
      correctSentence: 'She doesn’t play tennis.',
      ruleExplanation: 'After "doesn’t", always use plain "play", never "plays".',
    },
  },

  // Question 4 (Medium): Spelling -es for watch
  {
    id: 'guided-4',
    level: 'medium',
    levelLabel: 'Step 4: Medium (Spelling -es)',
    prompt: 'Fill in the blank:\n"My brother _______ the news every evening."',
    hint: {
      tanglish: 'Hint: "watch" ends in "-ch". So He/She/It kku "-es" serkanum!',
      tamil: 'குறிப்பு: "watch" என்பது -ch இல் முடிவதால் "-es" சேர்க்க வேண்டும்.',
      english: 'Hint: Verbs ending in -ch add "-es" for third-person singular.',
    },
    options: ['watch', 'watchs', 'watches', 'is watch'],
    correctIndex: 2,
    correctSentence: 'My brother watches the news every evening.',
    rule: {
      tanglish: 'Verbs ending in -ch, -sh, -ss, -x, -o add "-es".',
      tamil: '-ch, -sh, -ss, -x, -o என முடியும் வினைச்சொற்களுக்கு "-es" சேர்க்க வேண்டும்.',
      english: 'Add "-es" to verbs ending in -ch, -sh, -ss, -x, -o.',
    },
    explanation: {
      tanglish:
        '"My brother" na He (oru aalu). "watch" word "-ch" la mudiyudhu, adhanaala "watches" nu "-es" serkanum. "watchs" nu ezhudha koodadhu.',
      tamil:
        '"My brother" ஒருமை நபர். "watch" சொல் -ch இல் முடிவதால் "-es" சேர்த்து "watches" என எழுத வேண்டும்.',
      english:
        '"My brother" equals he. Verbs ending with "-ch" require "-es" for correct pronunciation: watch + es = watches.',
    },
    similarFollowup: {
      prompt: 'Quick Drill: Complete this similar sentence:\n"The teacher _______ grammar with patience."',
      options: ['teaches', 'teachs', 'teach', 'is teach'],
      correctIndex: 0,
      correctSentence: 'The teacher teaches grammar with patience.',
      ruleExplanation: '"teach" ends in -ch, so add "-es" -> teaches.',
    },
  },

  // Question 5 (Medium): Question formation with Do / Does
  {
    id: 'guided-5',
    level: 'medium',
    levelLabel: 'Step 5: Medium (Questions)',
    prompt: 'Choose the correct question to ask your friend:\n"_______ you know the answer?"',
    hint: {
      tanglish: 'Hint: "you" vandhaa munnadi "Do" poda venduma, "Does" poda venduma?',
      tamil: 'குறிப்பு: "you" வரும்போது முன்னால் "Do" வர வேண்டுமா அல்லது "Does" வர வேண்டுமா?',
      english: 'Hint: Do we use "Do" or "Does" with subject "you"?',
    },
    options: ['Does', 'Do', 'Are', 'Is'],
    correctIndex: 1,
    correctSentence: 'Do you know the answer?',
    rule: {
      tanglish: 'Do + I / You / We / They + V1?',
      tamil: 'Do + I / You / We / They + V1?',
      english: 'Use "Do" with I, You, We, and They for present questions.',
    },
    explanation: {
      tanglish:
        'Subject "you" kku eppovume "Do" dhaan varum. "Does" He/She/It kku mattum dhaan varum. "Are" active verb "know" kooda varadhu.',
      tamil:
        '"You" எழுவாய்க்கு கேள்வி கேட்கும்போது "Do" என்ற துணை வினைச்சொல் மட்டுமே வர வேண்டும்.',
      english:
        'Subject "you" pairs with "Do" to form questions. "Does" is only for singular third person (he/she/it).',
    },
    similarFollowup: {
      prompt: 'Quick Drill: How to ask about your friends (plural)?\n"_______ they live in Madurai?"',
      options: ['Does', 'Do', 'Are', 'Is'],
      correctIndex: 1,
      correctSentence: 'Do they live in Madurai?',
      ruleExplanation: '"they" takes "Do" -> "Do they live...?"',
    },
  },

  // Question 6 (Challenge): Identifying and fixing the trap sentence
  {
    id: 'guided-6',
    level: 'challenge',
    levelLabel: 'Step 6: Beginner Challenge',
    prompt:
      'Spot the trap: An office colleague says:\n"Suresh doesn’t understands the project requirement."\nHow should this sentence be corrected?',
    hint: {
      tanglish: 'Hint: "doesn’t" vandhirukku! Main verb "understands" sari-aa thappa?',
      tamil: 'குறிப்பு: "doesn’t" வந்துள்ளது. பிரதான சொல்லில் "s" இருக்கலாமா?',
      english: 'Hint: Look at the verb after "doesn’t". Does it need an "s"?',
    },
    options: [
      'Suresh doesn’t understand the project requirement.',
      'Suresh don’t understand the project requirement.',
      'Suresh not understand the project requirement.',
      'Suresh is not understand the project requirement.',
    ],
    correctIndex: 0,
    correctSentence: 'Suresh doesn’t understand the project requirement.',
    rule: {
      tanglish: 'Subject + doesn’t + V1 (no s/es on the main verb).',
      tamil: 'Subject + doesn’t + V1 (பிரதான சொல்லில் s வராது).',
      english: 'Subject + doesn’t + base verb V1.',
    },
    explanation: {
      tanglish:
        'Kattayamaaga! "doesn’t" vandhaalae aduthu vara verb "understand" nu plain V1-ah dhaan irukkanum. "understands" nu solradhu big mistake.',
      tamil:
        '"doesn’t" வந்திருப்பதால் பிரதான வினைச்சொல் அதன் அடிப்படை வடிவான "understand" ஆக மட்டுமே இருக்க வேண்டும்.',
      english:
        'Spot on! After "doesn’t", the verb must revert to its pure base form "understand". Writing "understands" is ungrammatical.',
    },
    similarFollowup: {
      prompt: 'Quick Drill: Spot the correct sentence for this challenge:',
      options: [
        'He does not speaks Spanish.',
        'He does not speak Spanish.',
        'He do not speak Spanish.',
        'He not speak Spanish.',
      ],
      correctIndex: 1,
      correctSentence: 'He does not speak Spanish.',
      ruleExplanation: 'After "does not", the verb is base form "speak".',
    },
  },
];

// -------------------------------------------------------------
// 10-QUESTION MASTERY TEST (Unlocked only after Guided Practice)
// Multilingual explanations for Tanglish, Tamil, Simple English
// -------------------------------------------------------------

export const TEN_QUESTION_MASTERY_TEST = [
  {
    id: 1,
    topic: '3rd Person Singular (-s)',
    prompt: 'Complete the sentence:\n"My father _______ newspaper every morning."',
    options: ['read', 'reads', 'reading', 'is read'],
    correctIndex: 1,
    correctSentence: 'My father reads newspaper every morning.',
    rule: {
      tanglish: 'My father = He (oru aalu) → Verb kooda "s" serkanum: read + s = reads.',
      tamil: 'My father = He (ஒருமை) → வினைச்சொல்லுடன் "s" சேர்க்க வேண்டும்: reads.',
      english: 'My father = He (singular) → Add "-s" to verb: reads.',
    },
    explanation: {
      tanglish:
        '"My father" oru aalu (He). Present Simple-la He vandhaa verb kooda "s" serkanum, adhanaala "reads" dhaan correct.',
      tamil:
        '"My father" ஒருமை எழுவாய் (He) என்பதால் வழக்கமான செயலுக்கு "reads" என "-s" சேர்க்க வேண்டும்.',
      english:
        '"My father" is a third-person singular noun (he). Regular verbs take "-s" in Present Simple positive statements.',
    },
  },
  {
    id: 2,
    topic: 'Negative with doesn’t',
    prompt: 'Which sentence is grammatically correct?',
    options: [
      'Priya doesn’t likes sweets.',
      'Priya don’t like sweets.',
      'Priya doesn’t like sweets.',
      'Priya not likes sweets.',
    ],
    correctIndex: 2,
    correctSentence: 'Priya doesn’t like sweets.',
    rule: {
      tanglish: 'Priya (She) + doesn’t + V1 (plain base verb, "s" poda koodadhu).',
      tamil: 'Priya + doesn’t + V1 (அடிப்படை வினைச்சொல் மட்டுமே வர வேண்டும்).',
      english: 'Third person negative uses "doesn’t" + base verb V1.',
    },
    explanation: {
      tanglish:
        '"doesn’t" vandha verb kooda marubadiyum "s" serka koodadhu! So "Priya doesn’t like sweets" dhaan correct.',
      tamil:
        '"doesn’t" வந்த பின்னர் மீண்டும் "likes" என "s" சேர்க்கக்கூடாது. "like" மட்டுமே வர வேண்டும்.',
      english:
        'Because "doesn’t" already carries the third-person inflection, the main verb stays in base form: "like".',
    },
  },
  {
    id: 3,
    topic: 'Subject "They" + V1',
    prompt: 'Fill in the blank:\n"They _______ in London."',
    options: ['lives', 'live', 'living', 'is live'],
    correctIndex: 1,
    correctSentence: 'They live in London.',
    rule: {
      tanglish: 'They (Plural) + V1 (No "s" added).',
      tamil: 'They (பன்மை) + V1 (s சேர்க்கக்கூடாது).',
      english: 'With "They", use base verb V1 without "-s".',
    },
    explanation: {
      tanglish:
        '"They" na pala per (plural). I/You/We/They kku verb kooda "s" serka koodadhu. So "live" dhaan correct.',
      tamil:
        '"They" என்பது பன்மை எழுவாய். எனவே வினைச்சொல்லில் "s" வராது. "live" என்பதே சரி.',
      english:
        '"They" is plural. Plural subjects in Present Simple take the base verb "live" without "-s".',
    },
  },
  {
    id: 4,
    topic: 'Question with Does',
    prompt: 'Choose the correct question form:\n"_______ your sister work at the bank?"',
    options: ['Do', 'Does', 'Is', 'Are'],
    correctIndex: 1,
    correctSentence: 'Does your sister work at the bank?',
    rule: {
      tanglish: 'Your sister = She (oru aalu) → kelvi kekka "Does" use pannanum.',
      tamil: 'Your sister = She (ஒருமை) → கேள்விக்கு "Does" பயன்படுத்த வேண்டும்.',
      english: 'Use "Does" for questions with singular subjects (she/he/it).',
    },
    explanation: {
      tanglish:
        '"Your sister" na She (oru aalu). Oru aal pathi kelvi kekkum podhu "Does" dhaan munnadi podanum.',
      tamil:
        '"Your sister" ஒருமை என்பதால் வாக்கியத்தின் தொடக்கத்தில் "Does" வரவேண்டும்.',
      english:
        '"Your sister" is singular (she), which requires the auxiliary "Does" to ask a Present Simple question.',
    },
  },
  {
    id: 5,
    topic: 'Spelling -ies for fly/try/study',
    prompt: 'Choose the correct form of "study":\n"Anand _______ for 3 hours every night."',
    options: ['studys', 'studies', 'study', 'studying'],
    correctIndex: 1,
    correctSentence: 'Anand studies for 3 hours every night.',
    rule: {
      tanglish: 'study ends in consonant + y → y eduthutu "-ies" serkanum (studies).',
      tamil: 'study மெய்யெழுத்து + y இல் முடிவதால் y நீக்கி "-ies" சேர்க்க வேண்டும்.',
      english: 'Consonant + y changes to "-ies": study → studies.',
    },
    explanation: {
      tanglish:
        '"Anand" (He) oru aalu. "study" la "d + y" irukku, spelling rule padi "y" ah eduthutu "ies" pottu "studies" nu ezhudhanum.',
      tamil:
        '"Anand" ஒருமை. study சொல்லின் கடைசி y நீக்கப்பட்டு "studies" என எழுதப்படும்.',
      english:
        'When a verb ends in a consonant + y (d + y), drop the y and add "-ies" to form "studies".',
    },
  },
  {
    id: 6,
    topic: 'Spelling -es for go/do',
    prompt: 'Fill in the blank:\n"She _______ to the gym on Mondays."',
    options: ['gos', 'goes', 'go', 'is go'],
    correctIndex: 1,
    correctSentence: 'She goes to the gym on Mondays.',
    rule: {
      tanglish: 'go ends in -o → add "-es" (goes).',
      tamil: 'go என்பது -o வில் முடிவதால் "-es" சேர்க்க வேண்டும் (goes).',
      english: 'Verbs ending in -o add "-es": go → goes.',
    },
    explanation: {
      tanglish:
        '"She" vandhaa verb kooda "s/es" serkanum. "go" letter "o" la mudiyaradhala "-es" serthu "goes" nu aagum.',
      tamil:
        '"She" எழுவாயாக வரும்போது go சொல்லுடன் "-es" சேர்த்து "goes" என மாறும்.',
      english:
        'Third-person singular "She" requires "-es" on the verb "go", making it "goes".',
    },
  },
  {
    id: 7,
    topic: 'Negative with don’t for We',
    prompt: 'Fill in the blank:\n"We _______ eat meat on Tuesdays."',
    options: ['doesn’t', 'don’t', 'not', 'aren’t'],
    correctIndex: 1,
    correctSentence: 'We don’t eat meat on Tuesdays.',
    rule: {
      tanglish: 'We + don’t + V1 (We kku "doesn’t" varadhu).',
      tamil: 'We + don’t + V1 (We எழுவாய்க்கு don’t மட்டுமே வரும்).',
      english: 'Use "don’t" for negative statements with We.',
    },
    explanation: {
      tanglish:
        '"We" na naanga (plural). I/You/We/They kku negative-la "don’t" dhaan varum. "doesn’t" He/She/It kku mattum dhaan.',
      tamil:
        '"We" பன்மை என்பதால் எதிர்மறைக்கு "don’t" மட்டுமே பயன்படுத்த வேண்டும்.',
      english:
        'With "We", the negative auxiliary is "do not" (don’t), never "doesn’t".',
    },
  },
  {
    id: 8,
    topic: 'Question with Does (base verb check)',
    prompt: 'Which question is correct?',
    options: [
      'Does he speaks Tamil?',
      'Does he speak Tamil?',
      'Do he speak Tamil?',
      'Is he speak Tamil?',
    ],
    correctIndex: 1,
    correctSentence: 'Does he speak Tamil?',
    rule: {
      tanglish: 'Does + He + V1 (kelviyila "speak" kooda "s" poda koodadhu).',
      tamil: 'Does + He + V1 (கேள்வியில் வினைச்சொல்லுடன் "s" வரக்கூடாது).',
      english: 'Does + subject + base verb (no "s" on speak).',
    },
    explanation: {
      tanglish:
        '"Does" munnadi vandhutale, "speak" kooda marubadiyum "s" serka koodadhu! So "Does he speak Tamil?" dhaan correct.',
      tamil:
        '"Does" ஏற்கெனவே இருப்பதால் வினைச்சொல்லில் மீண்டும் "s" வராது. "Does he speak Tamil?" என்பதே சரி.',
      english:
        'In questions beginning with "Does", the main verb must remain in base form "speak" without "-s".',
    },
  },
  {
    id: 9,
    topic: 'Irregular verb (have vs has)',
    prompt: 'Fill in the blank:\n"Kavitha _______ two brothers."',
    options: ['have', 'has', 'haves', 'having'],
    correctIndex: 1,
    correctSentence: 'Kavitha has two brothers.',
    rule: {
      tanglish: 'He/She/It kku "have" maaridum → "has" aagum.',
      tamil: 'He/She/It வரும்போது have என்பது "has" என மாறும்.',
      english: 'Third person singular of "have" is the irregular form "has".',
    },
    explanation: {
      tanglish:
        '"Kavitha" oru pen (She). English-la He/She/It kku "have" varadhu, irregular form "has" dhaan varum.',
      tamil:
        '"Kavitha" ஒருமை (She). எனவே "have" என்பதற்கு பதிலாக "has" வரவேண்டும்.',
      english:
        '"Kavitha" is singular (she). In the third person singular, "have" becomes "has".',
    },
  },
  {
    id: 10,
    topic: 'Beginner trap: is + active verb',
    prompt: 'Fix the beginner error in:\n"Karthik is work in Bangalore."',
    options: [
      'Karthik works in Bangalore.',
      'Karthik work in Bangalore.',
      'Karthik is works in Bangalore.',
      'Karthik does works in Bangalore.',
    ],
    correctIndex: 0,
    correctSentence: 'Karthik works in Bangalore.',
    rule: {
      tanglish: 'Present Simple-la "is" kooda active verb serka koodadhu. Direct-ah "Karthik works" nu sollanum.',
      tamil: '"is" மற்றும் வினைச்சொல்லை ஒன்றாக சேர்க்கக்கூடாது. நேரடியாக "Karthik works" என்று சொல்ல வேண்டும்.',
      english: 'Do not combine "is" with a base verb in Present Simple. Say "Karthik works".',
    },
    explanation: {
      tanglish:
        'Tamil-la irundhu translate pannum podhu neraya per "is work" nu solvaanga. Adhu thappu! Routine action kku "Karthik works" nu dhaan sollanum.',
      tamil:
        'வழக்கமான செயலைச் சொல்லும்போது "is work" என்று சொல்லக்கூடாது. "Karthik works" என்பதே சரியான வடிவம்.',
      english:
        'A common beginner mistake is combining "is" with a base verb. For habits or permanent facts, simply use "Karthik works".',
    },
  },
];
