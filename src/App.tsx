import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DietPage from './pages/DietPage';
import DietWritePage from './pages/DietWritePage';
import DietResultPage from './pages/DietResultPage';
import MedicationPage from './pages/MedicationPage';
import MedicationRegisterPage from './pages/MedicationRegisterPage';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/diet" element={<DietPage />} />
        <Route path="/diet/write" element={<DietWritePage />} />
        <Route path="/diet/result" element={<DietResultPage />} />
        <Route path="/medication" element={<MedicationPage />} />
        <Route path="/medication/register" element={<MedicationRegisterPage />} />
      </Routes>
      <Toaster />
    </HashRouter>
  );
}
