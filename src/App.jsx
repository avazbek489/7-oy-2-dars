import React from "react";
import { Routes, Route } from "react-router-dom";
import Todo from "./Todo";
import Form from "./Form";
import Api from "./Api";
import Counter from "./Counter";
import DarkMode from "./DarkMode";
import MainLayout from "./MainLayout";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route
          index
          element={
            <MainLayout>
              <Todo />
            </MainLayout>
          }
        />
        <Route
          path="/form"
          element={
            <MainLayout>
              <Form />
            </MainLayout>
          }
        />
        <Route
          path="/api"
          element={
            <MainLayout>
              <Api />
            </MainLayout>
          }
        />
        <Route
          path="/counter"
          element={
            <MainLayout>
              <Counter />
            </MainLayout>
          }
        />
        <Route
          path="/darkmode"
          element={
            <MainLayout>
              <DarkMode />
            </MainLayout>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
