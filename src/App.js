import { CssBaseline } from '@mui/material';
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
// import RRoutes from './routes/index';
import RRoutes from './Route';

function App() {
  const { routes } = RRoutes();

  return (
    <Fragment>
      <CssBaseline />
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.component />}></Route>
        ))}
      </Routes>
    </Fragment>
  );
}

export default App;
