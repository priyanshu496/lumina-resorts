"use client";

import { useState, useRef, useEffect } from "react";
import { Calendar, Users, Search, ChevronDown } from "lucide-react";

export default function AvailabilityBar() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  
  // State for our custom premium dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close guest dropdown when clicking anywhere outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto bg-black/40 backdrop-blur-xl border border-white/20 rounded-3xl md:rounded-full p-2 md:p-3 shadow-2xl relative z-40">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">

        {/* Check-In */}
        <div className="flex-1 flex items-center gap-4 w-full md:w-auto px-6 py-4 hover:bg-white/10 rounded-2xl md:rounded-full transition-all">
          <Calendar className="w-5 h-5 text-white/70 shrink-0" />
          <div className="flex flex-col w-full">
            <label className="text-[10px] text-white/60 uppercase tracking-widest font-semibold mb-1 cursor-pointer">Check In</label>
            {/* Visible, beautifully styled native date input */}
            <input 
              type="date" 
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="bg-transparent text-white outline-none w-full text-sm font-medium cursor-pointer [color-scheme:dark] [&::-webkit-calendar-picker-indicator]:opacity-50 hover:[&::-webkit-calendar-picker-indicator]:opacity-100 transition-opacity"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-12 bg-white/20"></div>

        {/* Check-Out */}
        <div className="flex-1 flex items-center gap-4 w-full md:w-auto px-6 py-4 hover:bg-white/10 rounded-2xl md:rounded-full transition-all">
          <Calendar className="w-5 h-5 text-white/70 shrink-0" />
          <div className="flex flex-col w-full">
            <label className="text-[10px] text-white/60 uppercase tracking-widest font-semibold mb-1 cursor-pointer">Check Out</label>
            <input 
              type="date" 
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="bg-transparent text-white outline-none w-full text-sm font-medium cursor-pointer [color-scheme:dark] [&::-webkit-calendar-picker-indicator]:opacity-50 hover:[&::-webkit-calendar-picker-indicator]:opacity-100 transition-opacity"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-12 bg-white/20"></div>

        {/* Custom Guests Dropdown */}
        <div className="flex-1 relative w-full md:w-auto" ref={dropdownRef}>
          <div 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between md:justify-start gap-4 w-full px-6 py-4 hover:bg-white/10 rounded-2xl md:rounded-full transition-all cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <Users className="w-5 h-5 text-white/70 shrink-0" />
              <div className="flex flex-col">
                <span className="text-[10px] text-white/60 uppercase tracking-widest font-semibold mb-1">Guests</span>
                <span className="text-sm text-white font-medium">
                  {guests} {guests === 1 ? 'Adult' : 'Adults'}
                </span>
              </div>
            </div>
            <ChevronDown className={`w-4 h-4 text-white/50 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </div>

          {/* Premium Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-4 w-full bg-white text-black rounded-2xl shadow-[0_20px_50px_rgb(0,0,0,0.15)] overflow-hidden py-2 z-50 border border-gray-100">
              {[1, 2, 3, 4, 5].map((num) => (
                <div 
                  key={num}
                  onClick={() => {
                    setGuests(num);
                    setIsDropdownOpen(false);
                  }}
                  className="px-6 py-4 hover:bg-gray-50 cursor-pointer text-sm font-medium transition-colors flex items-center justify-between group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">{num} {num === 1 ? 'Adult' : 'Adults'}</span>
                  {/* Show a little black dot if this option is the currently selected one */}
                  {guests === num && <div className="w-2 h-2 rounded-full bg-black"></div>}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Search Button */}
        <div className="px-2 pb-2 md:pb-0 w-full md:w-auto mt-2 md:mt-0">
          <button 
            onClick={() => alert(`Searching for: ${checkIn || 'Any'} to ${checkOut || 'Any'} for ${guests} guests`)}
            className="w-full md:w-auto bg-white text-black px-8 py-4 md:py-5 rounded-xl md:rounded-full flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors z-10 shadow-lg"
          >
            <Search className="w-4 h-4 shrink-0" />
            <span className="font-semibold text-sm uppercase tracking-widest">Search</span>
          </button>
        </div>
        
      </div>
    </div>
  );
}