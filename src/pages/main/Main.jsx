import { useDispatch, useSelector } from "react-redux";
import {
  currentQuestionIndex,
  userAnswer,
  userScore,
  QuizIncorrectAnswer,
  correctAnswer,
  incorrectAnswer,
} from "../../Redux/actions/quizAction";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import avatar from "../../images/avatar.png";

export function Main() {
  const questions = useSelector((state) => state.questions);
  const QuestionIndexx = useSelector((state) => state.currentindex);
  const useranswer = useSelector((state) => state.userAnswer);
  const userscore = useSelector((state) => state.score);
  const incorrectanswer = useSelector((state) => state.incorrectAnswer);

  //start to set currentQuestion to display one Question in display
  const currentQuestion = questions[QuestionIndexx];
  const numberofquestions = ` ${QuestionIndexx + 1}/${questions.length}`;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  /*
  - To Handle first case if user not select any answer
  - second case to update user answer Based on condition
  and dispatch index
  - in the end if user answer all question he see a popup to know score 
   */
  const handleNextQuestion = () => {
    if (useranswer === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select an answer before submitting!",
        allowOutsideClick: false,
      });
      return;
    }

    if (QuestionIndexx < questions.length - 1) {
      dispatch(userAnswer(null));
      dispatch(currentQuestionIndex(QuestionIndexx + 1));
    } else {
      Swal.fire({
        icon: "success",
        title: "Great work",
        text: `Your Score is ${userscore} `,
        allowOutsideClick: false,
        showClass: {
          popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
        },
        hideClass: {
          popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
        },
        confirmButtonText: "Show Results",
      }).then((data) => {
        if (data.isConfirmed) {
          navigate("/result");
        }
      });
    }
  };

  // this function for know the index of answer and convert to number
  const HandleChangeAnswer = (e) => {
    const answerIndex = parseInt(e.target.dataset.index);
    dispatch(userAnswer(answerIndex));
  };

  /*here i handle score based on correct and incorrect answer
  - and i save the answer to display to user in the end 
   */
  // const HandleScore = () => {
  //   let Newscore = userscore;
  //   let incorrect = incorrectanswer;

  //   if (useranswer === currentQuestion.correct_choice) {
  //     dispatch(userScore((Newscore += currentQuestion.degree)));
  //     dispatch(correctAnswer(currentQuestion));
  //   } else if (useranswer != currentQuestion.correct_choice) {
  //     if (useranswer === null) {
  //     } else {
  //       dispatch(QuizIncorrectAnswer((incorrect += 1)));
  //       dispatch(incorrectAnswer(currentQuestion));
  //     }
  //   } else {
  //     console.log(`done ${Newscore}`);
  //   }
  // };
  const HandleScore = () => {
    let newScore = userscore;
    let incorrectCount = incorrectanswer;

    if (useranswer === currentQuestion.correct_choice) {
      dispatch(userScore(newScore + currentQuestion.degree));
      dispatch(correctAnswer(currentQuestion));
    } else if (
      useranswer !== currentQuestion.correct_choice &&
      useranswer !== null
    ) {
      dispatch(QuizIncorrectAnswer(incorrectCount + 1));
      dispatch(incorrectAnswer(currentQuestion));
    } else {
      console.log(`done ${newScore}`);
    }
  };
  return (
    <main>
      <section className="main-section container">
        <div className="avater-questions">
          <div className="avater">
            <img src={avatar} alt="avatar" />
          </div>
          {/* Start display a current question and see number of total number of questions*/}
          <div className="question">
            <h3>{currentQuestion.question}</h3>
            <span>{numberofquestions}</span>
            {/* here make a map To display each choices individually  */}
            <ul className="all-inputs">
              {currentQuestion.choices.map((choice, choiceIndex) => {
                const isUserChoice = choiceIndex + 1 === useranswer;
                return (
                  <li key={choiceIndex}>
                    <label htmlFor={`choice-${choiceIndex}`}>
                      <input
                        type="radio"
                        id={`choice-${choiceIndex}`}
                        name="answer"
                        onChange={HandleChangeAnswer}
                        value={choice}
                        data-index={choiceIndex + 1}
                        checked={isUserChoice}
                      />
                      {choice}
                    </label>
                  </li>
                );
              })}
            </ul>
            <button
              onClick={() => {
                handleNextQuestion();
                HandleScore();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
