// ============================================================
// Navbar.jsx
//
// Shows on every page (it's rendered once, above <Routes>, in
// routes.jsx — not inside any individual page).
// ============================================================

// TODO (Part 2): bring in the nav-link component that knows whether
//   it's the active route. Docs:
//   https://reactrouter.com/start/declarative/navigating#navlink
import { NavLink } from "react-router"

function Navbar(props) {
  console.log(props)

  return (
    <>
    <nav className="navbar">

      <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}> 
        Home 
      </NavLink>

      <NavLink to="/quotes/new" className={({ isActive }) => isActive ? "active" : ""}>
        Add Quote  
      </NavLink>

      {/* TODO (Part 2): a link to the home page */}
      {/* TODO (Part 2): a link to the add-quote page */}
      {/*
        Hint: this link component takes a function for its class name
        instead of a plain string, so it can style itself differently
        when it's the active route. Check the docs above for the
        exact shape, then add a small ".active" style in App.css —
        there isn't one yet, so pick something simple (e.g. font-weight
        or color).
      */}
    </nav>
    <div> {props.children} </div>
    </>
  )
}

export default Navbar
