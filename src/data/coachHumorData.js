/**
 * Controlled, friendly coach humor data in Tanglish (default) and Simple English.
 * Strictly targets the grammar mistake, never the learner.
 * Short and skippable.
 */

export const COACH_HUMOR_QUIPS = {
  // Trap 1: Double "s" (doesn't + verb with s)
  doubleS: {
    tanglish: "Does-ke 'es' potachu boss! Thirumba verb-ku 's' pota double-tax mathiri aaidum! 😅 Single 'es' in 'doesn't' is enough.",
    english: "The helper verb 'does' already absorbed the 'es'! Adding another 's' to the main verb is like double taxation. 😅 One 's' is enough.",
  },

  // Trap 2: Missing "s" on He/She/It
  missingS: {
    tanglish: "Aiyo! 'He' oru VIP boss, avan kooda vara verb-ku oru 's' mariyaadhai serkanum! 😉 He works, not He work.",
    english: "Remember: 'He, She, and It' are VIPs in grammar — their present tense verbs always demand an '-s' badge! 😉",
  },

  // Trap 3: Mixing "is" + base verb (is work / is speak)
  isPlusVerb: {
    tanglish: "English-la 'is' and 'work' rendathaiyum mix panna koodadhu! Idhu mixture illa boss! Direct-ah 'works' nu sollunga. 👍",
    english: "Don't blend 'is' with an active verb! In Present Simple habits, go direct: 'He works', no 'is' required. 👍",
  },

  // Trap 4: Using "don't" with He/She/It
  dontWithSingular: {
    tanglish: "He-kku 'don't' sertha grammar police vandhirum! He/She/It-oda official partner 'doesn't' mattum dhaan. 🤝",
    english: "'He' and 'don't' are not friends in grammar! 'He' only partners with 'doesn't'. 🤝",
  },

  // Success 1: High accuracy / tricky trap overcome
  trapAvoided: {
    tanglish: "Semma sharpness boss! Indha beginner trap-la neraya per vizhuvaanga, aana neenga thappaaga maatama thapichiteenga! 🎯",
    english: "Sharp thinking! Beginners frequently fall into this exact trap, but you navigated it flawlessly. 🎯",
  },

  // Success 2: Clean streak
  cleanRule: {
    tanglish: "Vera level! Oru 's' kooda miss aagama rule-ah clean-ah apply panneenga. Coach certified! 🚀",
    english: "Flawless execution! You applied the rule cleanly without dropping a single '-s'. Coach approved! 🚀",
  },
};
