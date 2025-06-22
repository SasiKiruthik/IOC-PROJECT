import VetDashboard from './components/VetDashboard';
import SymptomForm from './components/SymptomForm';
import HistoryList from './components/HistoryList';
import AboutThisPage from './components/AboutThisPage';

export const routes = [
  { path: '/dashboard', element: <VetDashboard /> },
  { path: '/symptoms', element: <SymptomForm /> },
  { path: '/history', element: <HistoryList /> },
  { path: '/about', element: <AboutThisPage /> }
];
