class Question {
  /**
   *
   * @param {string} text El texto de ña pregunta
   * @param {string[]} choices una lista con todas la opcciones
   * @param {string} answer la opcion seelccionada
   */
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  /**
   *
   * @param {string} choice la opcion seleccionada
   * @returns {boolean} retorna en caso de seer correcta
   */
  correctAnswer(choice) {
    return choice === this.answer;
  }
}

export { Question };
