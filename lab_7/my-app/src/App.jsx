import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/a" style={{ marginRight: "10px" }}>Сторінка A</NavLink>
          <NavLink to="/b">Сторінка B</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
