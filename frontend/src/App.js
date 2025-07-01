import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AddProperty from './pages/AddProperty';
import EditProperty from './pages/EditProperty';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add-property" element={<PrivateRoute />}>
              <Route path="/add-property" element={<AddProperty />} />
            </Route>
            <Route path="/edit-property/:id" element={<PrivateRoute />}>
              <Route path="/edit-property/:id" element={<EditProperty />} />
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;