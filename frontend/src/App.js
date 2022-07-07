import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { Navbar, Container, Table, Loader, Form, AutoScrollToTop } from './components';
import GetData from './services/GetData';
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { moviesDb, setMoviesDb, loading } = GetData()
  const [movieToEdit, setMovieToEdit] = useState(null);

  return (
    <>
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route exact path="/"
              element={
                <Table
                  moviesDb={moviesDb}
                  setMoviesDb={setMoviesDb}
                  loader={loading && <Loader />}
                  setMovieToEdit={setMovieToEdit}
                />
              }
            />
            <Route exact path="/create"
              element={
                <Form
                  moviesDb={moviesDb}
                  setMoviesDb={setMoviesDb}
                  btnText="Crear"
                />}
            />
            <Route path="/edit/:id"
              element={
                <Form
                  moviesDb={moviesDb}
                  setMoviesDb={setMoviesDb}
                  movieToEdit={movieToEdit}
                  btnText="Editar"
                />}
            />
          </Routes>
        </Container>
        <AutoScrollToTop />
      </Router>
      <ToastContainer position="top-center" newestOnTop transition={Flip} />
    </>
  );
}

export default App;
