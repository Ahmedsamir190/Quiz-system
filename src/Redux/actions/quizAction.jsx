import {
  QuizData,
  QuestionIndex,
  QuizAnswer,
  QuizScore,
  QuizincorrectAnswer,
  QuizReset,
  Quizcorrectanswer,
  Quizincorrectanswers,
} from "../actionsTypes";

export const quizdata = (payload) => {
  return {
    type: QuizData,
    payload,
  };
};

export const currentQuestionIndex = (payload) => {
  return {
    type: QuestionIndex,
    payload,
  };
};

export const QuizIncorrectAnswer = (payload) => {
  return {
    type: QuizincorrectAnswer,
    payload,
  };
};
export const userAnswer = (payload) => {
  return {
    type: QuizAnswer,
    payload,
  };
};
export const userScore = (payload) => {
  return {
    type: QuizScore,
    payload,
  };
};

export const quizReset = (payload) => {
  return {
    type: QuizReset,
    payload,
  };
};
export const correctAnswer = (answer) => ({
  type: Quizcorrectanswer,
  payload: answer,
});

export const incorrectAnswer = (answer) => ({
  type: Quizincorrectanswers,
  payload: answer,
});
