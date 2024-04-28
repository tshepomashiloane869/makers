import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar max-w-xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown text-green-600">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-600/40 rounded-box w-52">
            <li><a>Home</a></li>
            <li>
              <a>Shop</a>
              <ul className="p-2">
                <li><a>Beats</a></li>
                <li><a>Merch</a></li>
              </ul>
            </li>
            <li><a>Interact</a></li>
          </ul>
        </div>
        <a className="text-xl text-green-500 font-semibold">Makers</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li>
            <details>
              <summary>Shop</summary>
              <ul className="p-2">
                <li><a>Beats</a></li>
                <li><a>Merch</a></li>
              </ul>
            </details>
          </li>
          {/* <li><a>Item 3</a></li> */}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline btn-sm text-green-600">Login</a>
      </div>
</div>
  )
}

export default Navbar