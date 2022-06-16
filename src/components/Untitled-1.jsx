{routes.map((route) =>
    route.routes ? (
      <Sidebardropdown route={route} key={route.name} />
    ) : (
      <li className="relative px-6 py-3" key={route.name}>
        <NavLink
          exact
          to={route.path}
          className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
          activeClassName="text-gray-800 dark:text-gray-100"
        >
          <Route path={route.path} exact={route.exact}>
            <span
              className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
              aria-hidden="true"
            ></span>
          </Route>
          {/* <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} /> */}
          <span className="ml-4">{route.name}</span>
        </NavLink>
      </li>
    )
  )}












  {!activeSubMenu ? (
    <li className="relative px-6 py-3" key={route.name}>
      <button
        className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
        onClick={() => setActiveSubMenu(!activeSubMenu)}
        aria-haspopup="true"
      >
        <span className="inline-flex items-center">
          {/* <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} /> */}
          <span className="ml-4">{route.name}</span>
        </span>
        {/* <DropdownIcon className="w-4 h-4" aria-hidden="true" /> */}
      </button>
    </li>
  ) : (
    <>
      <li className="relative px-6 py-3" key={route.name}>
        <button
          className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
          onClick={() => setActiveSubMenu(!activeSubMenu)}
          aria-haspopup="true"
        >
          <span className="inline-flex items-center">
            {/* <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} /> */}
            <span className="ml-4">{route.name}</span>
          </span>
          {/* <DropdownIcon className="w-4 h-4" aria-hidden="true" /> */}
        </button>
      </li>
      <div
        className={`pt-2 pl-4 ${
          activeSubMenu ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <ul className="flex flex-col pl-2 text-gray-500 border-l border-gray-700">
          <li>
            <a
              href="#"
              className="inline-block w-full px-4 py-2 text-xs rounded hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-500 focus:text-white"
            >
              Courses
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-block w-full px-4 py-2 text-xs rounded hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-500 focus:text-white"
            >
              Categories
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-block w-full px-4 py-2 text-xs rounded hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-500 focus:text-white"
            >
              Instructors
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-block w-full px-4 py-2 text-xs rounded hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-500 focus:text-white"
            >
              Video Library
            </a>
          </li>
        </ul>
      </div>
    </>
  )}

