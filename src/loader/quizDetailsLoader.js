export const quizDetailsLoader = async (id) => {
  const quizDetails = "https://openapi.programming-hero.com/api/quiz/" + id;
  const quizData = await fetch(quizDetails);
  const quiz = await quizData.json();
  console.log(quiz);

  return { quiz: quiz.data };
};
