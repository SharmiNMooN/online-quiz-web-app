export const quizListLoader = async () => {
  const allQuizTopics = "https://openapi.programming-hero.com/api/quiz";
  const quizData = await fetch(allQuizTopics);
  const quizes = await quizData.json();
  console.log(quizes);
  return { quizes: quizes.data };
};
