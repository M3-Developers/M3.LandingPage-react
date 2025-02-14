import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home"
import Projects from "./pages/Projects";

//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡶⢶⣾⠻⣦⡀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠋⠀⠀⠙⢶⡾⠃⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢾⡋⠀⠀⠀⢀⣴⠟⢷⣄⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠻⣦⣀⣴⠟⠁⠀⠀⠙⢷⣄⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠋⠀⣠⡾⠛⢷⡀⠀⠀⠀⠀⠀⠙⣷⣄⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠋⠀⣠⡾⠋⠀⠀⢸⡇⠀⠀⠀⠀⢀⣴⠏⣹⠇
//⠀⠀⠀⠀⠀⠀⣠⡾⠋⠀⣠⡾⠋⠀⠀⠀⠀⣼⠃⠀⠀⢀⣴⠟⢁⡼⠋⠀
//⠀⠀⠀⠀⣠⡾⠋⠀⣠⡾⠋⠀⠀⠀⠀⠀⣾⠃⢀⣤⠾⠋⣡⡶⠋⠀⠀⠀
//⠀⠀⣠⡾⠋⠀⣠⡾⠋⠀⠀⠀⠀⠀⠀⠀⠻⣾⣋⣡⡴⠟⠉⠀⠀⠀⠀⠀
//⢠⡾⠋⠀⣠⡾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀
//⠈⠻⣦⡾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀


const router = createBrowserRouter([
  {
      path: "/",
      element: <Home/>,
  },
  {
    path: "/Projects",
    element: <Projects/>,
  },
  // {
  //   path: "*",
  //   element: <Error />
  // },
]);

export default function App() {
return (
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);