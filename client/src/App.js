import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import RecipeDisplay from './RecipeDisplay';
import Register from './Register';
import Login from './Login';
import LogMeal from './LogMeal';
import MealLog from './MealLog';
import './App.css';

function App() {
  const location = useLocation(); // Hook to detect current route

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-heading">Welcome to SpoonFeed</h1>
        <nav className="nav-links">
          {location.pathname !== '/' ? (
            <Link to="/" className="home-button">Home</Link>
          ) : (
            <Link to="/log-meal" className="log-meal-button">Log Meal</Link>
          )}
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<RecipeDisplay />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/log-meal" element={<LogMeal />} />
          <Route path="/meal-logs" element={<MealLog />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
