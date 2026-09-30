/**
 * API & Service Layer Placeholder
 *
 * This file will manage external communication with backend services,
 * AI inference (e.g., Gemini API), and speech services when implemented in future iterations.
 */

export const apiService = {
  /**
   * Health check / ping
   */
  async checkHealth() {
    return { status: 'ok', timestamp: new Date().toISOString() };
  },

  /**
   * Future AI evaluation endpoint placeholder
   */
  async evaluateSentence(sentence, targetTense) {
    console.log(`[Service Placeholder] Evaluating "${sentence}" for tense "${targetTense}"`);
    return {
      isValid: true,
      feedback: 'Service integration pending.',
    };
  },
};
