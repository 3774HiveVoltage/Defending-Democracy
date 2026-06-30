import React from 'react';
import logo from '../assets/R.png';

const navItems = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About DD' },
  { key: 'projects', label: 'Projects' },
  { key: 'issues', label: 'Issues' },
  { key: 'testimonies', label: 'Testimonies' },
  { key: 'students', label: 'For Students' },
  { key: 'educate', label: 'Educate' },
];

const TopNav = ({ currentPage, setPage }) => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 px-6 py-4 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setPage('home')}
          className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:border-white/20 hover:bg-white/10"
        >
          Defending Democracy
        </button>

        <nav className="hidden grow items-center justify-center gap-4 text-sm font-medium text-gray-300 md:flex">
          {navItems.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setPage(item.key)}
              className={`rounded-full px-4 py-2 transition ${currentPage === item.key ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
          <div className="block md:hidden">
            <select
              aria-label="Select page"
              className="rounded-2xl border border-white/10 bg-black px-3 py-2 text-sm text-white outline-none"
              value={currentPage}
              onChange={(e) => setPage(e.target.value)}
            >
              {navItems.map((item) => (
                <option key={item.key} value={item.key}>{item.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
