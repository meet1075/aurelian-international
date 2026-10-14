import React, { useState } from 'react';
import { globalDestinations } from '../data/companyData';

export default function GlobalReachMap() {
  const [viewMode, setViewMode] = useState('routes'); // 'routes' or 'minimal'
  const [hoveredNode, setHoveredNode] = useState(null);

  // Geographic coordinates mapped to SVG viewBox (1000 x 562 for 16:9 aspect ratio)
  // India origin: ~ x: 700, y: 245
  const origin = { x: 705, y: 240, label: "India (Mundra & Cochin Ports)", hub: true };

  const destinations = [
    {
      id: "na-east",
      name: "North America (East Coast)",
      ports: "New York, Savannah",
      x: 220,
      y: 180,
      controlX: 450,
      controlY: 70,
      region: "North America"
    },
    {
      id: "na-west",
      name: "North America (West Coast)",
      ports: "Long Beach, Los Angeles",
      x: 160,
      y: 195,
      controlX: 400,
      controlY: 50,
      region: "North America"
    },
    {
      id: "europe",
      name: "Europe & UK",
      ports: "Rotterdam, Hamburg, Felixstowe",
      x: 485,
      y: 155,
      controlX: 580,
      controlY: 130,
      region: "Europe & UK"
    },
    {
      id: "middle-east",
      name: "Middle East & GCC",
      ports: "Jebel Ali (Dubai), Dammam, Jeddah",
      x: 605,
      y: 235,
      controlX: 655,
      controlY: 225,
      region: "Middle East & GCC"
    },
    {
      id: "africa-east",
      name: "East Africa & Levant",
      ports: "Mombasa, Dar es Salaam",
      x: 575,
      y: 310,
      controlX: 630,
      controlY: 280,
      region: "Africa & Levant"
    },
    {
      id: "africa-south",
      name: "Southern Africa",
      ports: "Durban, Cape Town",
      x: 545,
      y: 410,
      controlX: 610,
      controlY: 340,
      region: "Africa & Levant"
    },
    {
      id: "south-america",
      name: "South America",
      ports: "Santos (Brazil)",
      x: 315,
      y: 395,
      controlX: 500,
      controlY: 330,
      region: "Latin America"
    },
    {
      id: "se-asia",
      name: "Southeast Asia",
      ports: "Singapore, Port Klang",
      x: 780,
      y: 295,
      controlX: 745,
      controlY: 260,
      region: "Southeast Asia"
    },
    {
      id: "australia",
      name: "Australia & Oceania",
      ports: "Sydney, Melbourne",
      x: 900,
      y: 430,
      controlX: 810,
      controlY: 360,
      region: "Australia"
    }
  ];

  return (
    <div className="relative rounded-3xl overflow-hidden border border-gold/30 shadow-2xl bg-forest-950 text-ivory">
      
      {/* Top Controls Bar: View Toggle (like in screenshot 3) */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex items-center">
        <div className="flex items-center p-1 rounded-full bg-forest-950/85 backdrop-blur-md border border-gold/30 shadow-lg">
          <button
            onClick={() => setViewMode('routes')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
              viewMode === 'routes'
                ? 'bg-gradient-to-r from-gold-400 to-gold text-forest-950 shadow-md font-bold'
                : 'text-ivory-300 hover:text-white'
            }`}
          >
            Export Routes
          </button>
          <button
            onClick={() => setViewMode('minimal')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
              viewMode === 'minimal'
                ? 'bg-gradient-to-r from-gold-400 to-gold text-forest-950 shadow-md font-bold'
                : 'text-ivory-300 hover:text-white'
            }`}
          >
            Minimal View
          </button>
        </div>
      </div>

      {/* Map Display Frame (16:9 Aspect Ratio) */}
      <div className="relative aspect-[16/9] w-full min-h-[380px] sm:min-h-[480px] bg-forest-950 overflow-hidden">
        
        {/* Realistic Night Satellite Earth Map Background */}
        <img
          src="/images/world-night-map.jpg"
          alt="World Satellite Night Map - Aurelian Global Export Network"
          className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
        />

        {/* Ambient Dark Green Vignette & Atmosphere Overlay */}
        <div className="absolute inset-0 bg-forest-950/20 pointer-events-none mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-transparent to-forest-950/40 pointer-events-none" />

        {/* Interactive SVG Layer for Arcs & Glowing Nodes */}
        <svg
          viewBox="0 0 1000 562"
          className="absolute inset-0 w-full h-full pointer-events-auto"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Glowing Golden Route Gradient */}
            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DFBE82" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#B8893B" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.95" />
            </linearGradient>

            {/* Subtle glow filter */}
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            <filter id="beaconGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* 1. Curved Golden Maritime & Air Routes (Rendered when in 'routes' mode) */}
          {viewMode === 'routes' && destinations.map((dest) => {
            const isHovered = hoveredNode === dest.id;
            const pathData = `M ${origin.x} ${origin.y} Q ${dest.controlX} ${dest.controlY} ${dest.x} ${dest.y}`;

            return (
              <g key={dest.id} className="transition-opacity duration-500">
                {/* Glow layer */}
                <path
                  d={pathData}
                  fill="none"
                  stroke="#B8893B"
                  strokeWidth={isHovered ? "3.5" : "1.8"}
                  strokeOpacity={isHovered ? "0.9" : "0.5"}
                  filter="url(#goldGlow)"
                  className="transition-all duration-300"
                />
                {/* Sharp core route line */}
                <path
                  d={pathData}
                  fill="none"
                  stroke="#F3E8CE"
                  strokeWidth={isHovered ? "2" : "1.2"}
                  strokeOpacity={isHovered ? "1" : "0.75"}
                  className="transition-all duration-300"
                />

                {/* Animated traveling light pulse along the curve */}
                <circle r={isHovered ? "3.5" : "2"} fill="#FFF">
                  <animateMotion
                    path={pathData}
                    dur={`${4 + (dest.x % 3)}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}

          {/* 2. Destination Node Pins */}
          {destinations.map((dest) => {
            const isHovered = hoveredNode === dest.id;
            return (
              <g
                key={dest.id}
                transform={`translate(${dest.x}, ${dest.y})`}
                className="cursor-pointer group"
                onMouseEnter={() => setHoveredNode(dest.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* Outer halo */}
                <circle
                  r={isHovered ? "12" : "7"}
                  fill="#B8893B"
                  fillOpacity={isHovered ? "0.4" : "0.2"}
                  className="animate-pulse transition-all duration-300"
                />
                {/* Core shining pin */}
                <circle
                  r={isHovered ? "5" : "3.5"}
                  fill="#FFDF85"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                  filter="url(#goldGlow)"
                  className="transition-all duration-300"
                />
                
                {/* Subtle pin spark rays on hover */}
                {isHovered && (
                  <circle
                    r="8"
                    fill="none"
                    stroke="#FFDF85"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                    className="animate-spin"
                  />
                )}
              </g>
            );
          })}

          {/* 3. Origin Hub (India: Mundra & Cochin Seaports) */}
          <g transform={`translate(${origin.x}, ${origin.y})`} className="cursor-pointer">
            {/* Large radial beacon ring */}
            <circle
              r="22"
              fill="#B8893B"
              fillOpacity="0.25"
              filter="url(#beaconGlow)"
              className="animate-ping"
              style={{ animationDuration: '3s' }}
            />
            <circle
              r="14"
              fill="#D4AF37"
              fillOpacity="0.4"
            />
            {/* Center golden star / diamond beacon */}
            <circle
              r="7"
              fill="#FFF"
              stroke="#B8893B"
              strokeWidth="2"
              filter="url(#goldGlow)"
            />
            <circle
              r="3"
              fill="#B8893B"
            />
          </g>

        </svg>

        {/* Hover Information Card Tooltip */}
        {hoveredNode && (() => {
          const node = destinations.find(d => d.id === hoveredNode);
          if (!node) return null;
          return (
            <div
              className="absolute z-30 pointer-events-none p-3.5 rounded-xl bg-forest-950/95 border border-gold/60 text-ivory text-xs shadow-2xl backdrop-blur-md animate-fade-in"
              style={{
                left: `${Math.min(Math.max((node.x / 1000) * 100, 10), 80)}%`,
                top: `${Math.min(Math.max((node.y / 562) * 100 - 15, 10), 75)}%`
              }}
            >
              <div className="flex items-center gap-1.5 text-gold font-bold uppercase tracking-wider text-[11px] mb-1">
                <span>●</span>
                <span>{node.name}</span>
              </div>
              <p className="text-ivory-200/80 text-[11px]">Primary Discharge Ports: <strong>{node.ports}</strong></p>
              <p className="text-ivory-300/60 text-[10px] mt-0.5">Maritime ocean transit from Mundra & Cochin</p>
            </div>
          );
        })()}

        {/* Floating Origin Tag at Bottom Center */}
        <div className="absolute bottom-4 left-6 sm:bottom-6 sm:left-8 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-950/80 backdrop-blur-md border border-gold/30 text-xs">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
          <span className="font-semibold text-ivory">Dispatch Seaports:</span>
          <span className="text-gold font-medium">Mundra, Cochin & JNPT</span>
        </div>

      </div>

      {/* Region Data Cards Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 p-4 sm:p-6 bg-forest-900/90 border-t border-gold/20 text-xs">
        {globalDestinations.map((dest, i) => (
          <div key={i} className="bg-forest-950/60 p-3 rounded-xl border border-gold/15 hover:border-gold/40 transition-colors">
            <div className="flex items-center justify-between mb-1">
              <span className="text-gold font-bold">{dest.region}</span>
              <span className="text-[10px] text-ivory-300/60 font-mono">{dest.share}</span>
            </div>
            <p className="text-[11px] text-ivory-200/70 truncate">{dest.countries}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
