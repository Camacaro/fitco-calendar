import {useEffect} from "react";
import {useSelector} from "react-redux";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router";

import {CalendarScreen} from "../components/calendar/CalendarScreen.jsx";
import {LoginScreen} from "../components/auth/LoginScreen.jsx";
import {ProtectedRoute} from "./ProtectedRoute.jsx";
import {PublicRoute} from "./PublicRoute.jsx";

export const AppRouter = () => {
  const auth = useSelector(state => state.auth )

  useEffect(() => {
    console.log({auth})
  }, [auth]);

  return (
    <Router>
      <Routes>

        <Route element={<ProtectedRoute token={auth.token} />}>
          <Route path="/" element={<CalendarScreen />} />
        </Route>

        <Route element={<PublicRoute token={auth.token} />}>
          <Route path="/login" element={<LoginScreen />} />
        </Route>

        <Route
          path="*"
          element={<Navigate to="/" replace />} />

      </Routes>
    </Router>
  )
}
