import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/Navbar";

import Header from "./components/header/Header";

const Dialogs = React.lazy(() => import("./components/dialogs/dialogs"));

const Music = React.lazy(() => import("./components/Music/Music"));

const News = React.lazy(() => import("./components/News/News"));

const Setting = React.lazy(() => import("./components/Setting/Setting"));

const Profile = React.lazy(() => import("./components/profile/Profile"));

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Suspense fallback={<div>...</div>}>
                {" "}
                <Profile />
              </Suspense>
            }
          />
          <Route
            path="/dialogs"
            element={
              <Suspense fallback={<div>...</div>}>
                <Dialogs />
              </Suspense>
            }
          />
          <Route
            path="/news"
            element={
              <Suspense fallback={<div>...</div>}>
                <News />
              </Suspense>
            }
          />
          <Route
            path="/music"
            element={
              <Suspense fallback={<div>...</div>}>
                <Music />
              </Suspense>
            }
          />
          <Route
            path="/setting"
            element={
              <Suspense fallback={<div>...</div>}>
                <Setting />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
