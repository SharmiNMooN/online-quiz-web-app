import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import QuizDetails from "./components/QuizDetails/QuizDetails";
import Main from "./layouts/Main";
import { quizDetailsLoader } from "./loader/quizDetailsLoader";
import { quizListLoader } from "./loader/quizListLoader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: quizListLoader,
          element: <Home></Home>,
        },
        {
          path: "/quiz/:id",
          loader: async ({ params }) => {
            return await quizDetailsLoader(params.id);
          },
          element: <QuizDetails></QuizDetails>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
