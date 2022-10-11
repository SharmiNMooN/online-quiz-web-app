import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import QuizDetails from "./components/QuizDetails/QuizDetails";
import Statistics from "./components/Statistics/Statistics";
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
          path: "/statistics",
          loader: quizListLoader,
          element: <Statistics></Statistics>,
        },
        {
          path: "/quiz/:id",
          loader: async ({ params }) => {
            return await quizDetailsLoader(params.id);
          },
          element: <QuizDetails></QuizDetails>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "*",
          element: <NotFound></NotFound>,
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
