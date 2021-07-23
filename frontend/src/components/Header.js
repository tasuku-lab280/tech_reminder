const Header = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <p className="text-xl text-white">TechReminder</p>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* 通知 */}
            <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            {/* END 通知 */}

            {/* ドロップダウン */}
            <div className="ml-3 relative">
              <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <img className="h-8 w-8 rounded-full" src="https://lh3.googleusercontent.com/a/AATXAJzW7L03oYzhU8pbEB2qVXaKNRE8hL2NYtTCCYbo=s96-c" alt="" />
              </button>
            </div>
            {/* END ドロップダウン */}

            {/* ログインボタン */}
            <div className="ml-10 relative">
              <button onClick="location.href='login'" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                ログイン
              </button>
            </div>
            {/* END ログインボタン */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
