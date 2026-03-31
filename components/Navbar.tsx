"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Search, Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Live Scores', path: '/live' },
  { name: 'Fixtures', path: '/fixtures' },
  { name: 'Results', path: '/results' },
  { name: 'Standings', path: '/standings' },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  
  // Theme state
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Search state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');

  // Handle scroll effect
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/?q=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push('/');
    }
  };

  return (
    <nav 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        hasScrolled 
          ? 'bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800' 
          : 'bg-white dark:bg-[#0a0a0a]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          
          {/* Logo & Desktop Nav */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ScoreLive
              </span>
            </Link>
            
            <div className="hidden md:flex space-x-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive 
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2 md:gap-4">
            
            {/* Search Input Area */}
            {isSearchOpen ? (
              <form onSubmit={handleSearchSubmit} className="flex items-center animate-in fade-in slide-in-from-right-4 duration-200">
                <input
                  type="text"
                  placeholder="Search teams..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-32 sm:w-48 px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 border-none rounded-l-full focus:ring-0 text-gray-900 dark:text-white placeholder-gray-500"
                />
                <button 
                  type="submit" 
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-r-full transition-colors"
                >
                  <Search size={16} />
                </button>
                <button 
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="ml-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <X size={18} />
                </button>
              </form>
            ) : (
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-full text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Search size={20} />
              </button>
            )}

            {/* Dark Mode Toggle */}
            {mounted && (
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            
            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0a0a0a]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive 
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
