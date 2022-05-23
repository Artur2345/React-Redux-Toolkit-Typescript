import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import {
  privateRoutes,
  publicRoutes,
  RouteNames,
} from '../../routes';
import { useTypedSelector } from '../../hooks';

const Index = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);

  return (isAuth || localStorage.getItem('auth') ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          path={route.path}
          element={<route.element />}
          key={route.path}
        />
      ))}
      <Route
        path="*"
        element={<Navigate to={RouteNames.EVENT} replace />}
      />
    </Routes>
    ) : (
      <Routes>
        {publicRoutes.map((route) => (
          <Route
            path={route.path}
            element={<route.element />}
            key={route.path}
          />
        ))}
        <Route
          path="*"
          element={<Navigate to={RouteNames.LOGIN} replace />}
        />
      </Routes>
    )
  )
}

export default Index
