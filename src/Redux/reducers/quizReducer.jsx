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
import data from "../../data/data.json";

const initialState = {
  questions: data.questions,
  currentindex: 0,
  userAnswer: null,
  score: 0,
  incorrectAnswer: 0,
  Timer: 30,
  correctAnswers: [],
  incorrectAnswers: [],
};

export const dataReducers = (state = initialState, action) => {
  switch (action.type) {
    case QuizData:
      return state.questions;
    case QuestionIndex:
      return { ...state, currentindex: action.payload, userAnswer: null };
    case QuizAnswer:
      return { ...state, userAnswer: action.payload };
    case QuizScore:
      return { ...state, score: action.payload };
    case QuizincorrectAnswer:
      return { ...state, incorrectAnswer: action.payload };

    case Quizcorrectanswer:
      return {
        ...state,
        correctAnswers: [...state.correctAnswers, action.payload],
      };
    case Quizincorrectanswers:
      return {
        ...state,
        incorrectAnswers: [...state.incorrectAnswers, action.payload],
      };
    case QuizReset:
      return initialState;
    default:
      return state;
  }
};
