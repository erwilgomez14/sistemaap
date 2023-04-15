import React from 'react';

function Welcome() {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800">
        {/* Navbar Content */}
      </nav>
      {/* Navbar */}
      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-4xl font-extrabold text-gray-900">Welcome to my App</h1>
          <p className="mt-1 max-w-2xl text-xl text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis est quis odio
            hendrerit, sed malesuada odio volutpat. Nulla fringilla augue auctor, hendrerit ex vel,
            tempus ipsum. Nulla faucibus massa non sapien commodo, vitae congue eros interdum. Sed
            ac sapien in dolor sagittis hendrerit vel et leo.
          </p>
        </div>
      </div>
      {/* Main Content */}
    </div>
  );
}

export default Welcome;
