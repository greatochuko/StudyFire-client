import HomePage from "./pages/landing/HomePage";
import Layout from "./components/layout/Layout";
import NotFoundPage from "./pages/layout/NotFoundPage";
import LoginPage from "./pages/landing/LoginPage";
import { createBrowserRouter } from "react-router";
import SignupPage from "./pages/landing/SignupPage";
import AuthWrapper from "./components/layout/AuthWrapper";
import DashboardPage from "./pages/dashboard/DashboardPage";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardNotFoundPage from "./pages/dashboard/DashboardNotFoundPage";
import MyDocumentsPage from "./pages/dashboard/MyDocumentsPage";
import FlashcardsPage from "./pages/dashboard/FlashcardsPage";
import FlashcardSessionPage from "./pages/dashboard/FlashcardSessionPage";
import QuizzesPage from "./pages/dashboard/QuizzesPage";
import QuizActiveSessionPage from "./pages/dashboard/QuizActiveSessionPage";
import QuizResultsPage from "./pages/dashboard/QuizResultsPage";
import StudyCoachPage from "./pages/dashboard/StudyCoachPage";
import SettingsPage from "./pages/dashboard/SettingsPage";
import BillingPage from "./pages/dashboard/BillingPage";
import PrivacyPolicyPage from "./pages/landing/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/landing/TermsOfServicePage";

export const router = createBrowserRouter([
  {
    Component: AuthWrapper,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "login", element: <LoginPage /> },
          { path: "signup", element: <SignupPage /> },
          { path: "privacy-policy", element: <PrivacyPolicyPage /> },
          { path: "terms-of-service", element: <TermsOfServicePage /> },
        ],
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          { index: true, element: <DashboardPage /> },
          { path: "materials", element: <MyDocumentsPage /> },
          { path: "flashcards", element: <FlashcardsPage /> },
          { path: "flashcards/:id", element: <FlashcardSessionPage /> },
          { path: "quizzes", element: <QuizzesPage /> },
          { path: "quizzes/:id", element: <QuizActiveSessionPage /> },
          { path: "quizzes/:id/results", element: <QuizResultsPage /> },
          { path: "coach", element: <StudyCoachPage /> },
          { path: "settings", element: <SettingsPage /> },
          { path: "billing", element: <BillingPage /> },
          { path: "*", element: <DashboardNotFoundPage /> },
        ],
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
