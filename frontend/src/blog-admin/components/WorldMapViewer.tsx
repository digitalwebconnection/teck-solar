import React, { useState, useMemo } from 'react';
import { geoMercator, geoPath, geoGraticule } from 'd3-geo';
import { feature } from 'topojson-client';
import type { Topology, Objects } from 'topojson-specification';
import { worldData } from '../data/worldData';
import { formatNumber, getCountryName } from '../countryUtils';

export interface MapCountryData {
  code: string;
  country?: string;
  count: number;
  percentage?: number;
}

interface WorldMapViewerProps {
  countries: MapCountryData[];
  hoveredCode?: string | null;
  onHoverCountry?: (code: string | null) => void;
  className?: string;
}

/**
 * ISO 3166-1 Numeric to Alpha-2 Two-Letter Code Mapping Dictionary
 * Maps all 177 recognized countries and territories in Natural Earth TopoJSON
 */
const NUMERIC_TO_ALPHA2: Record<string, string> = {
  '004': 'AF', '008': 'AL', '012': 'DZ', '024': 'AO', '032': 'AR', '036': 'AU', '040': 'AT', '031': 'AZ',
  '044': 'BS', '050': 'BD', '056': 'BE', '064': 'BT', '068': 'BO', '070': 'BA', '072': 'BW', '076': 'BR',
  '084': 'BZ', '096': 'BN', '100': 'BG', '104': 'MM', '108': 'BI', '112': 'BY', '116': 'KH', '120': 'CM',
  '124': 'CA', '140': 'CF', '144': 'LK', '148': 'TD', '152': 'CL', '156': 'CN', '158': 'TW', '170': 'CO',
  '178': 'CG', '180': 'CD', '188': 'CR', '191': 'HR', '192': 'CU', '196': 'CY', '203': 'CZ', '204': 'BJ',
  '208': 'DK', '214': 'DO', '218': 'EC', '222': 'SV', '226': 'GQ', '231': 'ET', '232': 'ER', '233': 'EE',
  '238': 'FK', '242': 'FJ', '246': 'FI', '250': 'FR', '260': 'TF', '262': 'DJ', '266': 'GA', '268': 'GE',
  '270': 'GM', '275': 'PS', '276': 'DE', '288': 'GH', '300': 'GR', '304': 'GL', '320': 'GT', '324': 'GN',
  '328': 'GY', '332': 'HT', '340': 'HN', '348': 'HU', '352': 'IS', '356': 'IN', '360': 'ID', '364': 'IR',
  '368': 'IQ', '372': 'IE', '376': 'IL', '380': 'IT', '384': 'CI', '388': 'JM', '392': 'JP', '398': 'KZ',
  '400': 'JO', '404': 'KE', '408': 'KP', '410': 'KR', '414': 'KW', '417': 'KG', '418': 'LA', '422': 'LB',
  '426': 'LS', '428': 'LV', '430': 'LR', '434': 'LY', '440': 'LT', '442': 'LU', '450': 'MG', '454': 'MW',
  '458': 'MY', '462': 'MV', '466': 'ML', '478': 'MR', '484': 'MX', '496': 'MN', '498': 'MD', '499': 'ME',
  '504': 'MA', '508': 'MZ', '512': 'OM', '516': 'NA', '524': 'NP', '528': 'NL', '554': 'NZ', '558': 'NI',
  '562': 'NE', '566': 'NG', '578': 'NO', '586': 'PK', '591': 'PA', '598': 'PG', '600': 'PY', '604': 'PE',
  '608': 'PH', '616': 'PL', '620': 'PT', '624': 'GW', '626': 'TL', '630': 'PR', '634': 'QA', '642': 'RO',
  '643': 'RU', '646': 'RW', '682': 'SA', '686': 'SN', '688': 'RS', '694': 'SL', '702': 'SG', '703': 'SK',
  '704': 'VN', '705': 'SI', '706': 'SO', '710': 'ZA', '716': 'ZW', '724': 'ES', '728': 'SS', '729': 'SD',
  '732': 'EH', '740': 'SR', '748': 'SZ', '752': 'SE', '756': 'CH', '760': 'SY', '762': 'TJ', '764': 'TH',
  '768': 'TG', '780': 'TT', '784': 'AE', '788': 'TN', '792': 'TR', '795': 'TM', '800': 'UG', '804': 'UA',
  '807': 'MK', '818': 'EG', '826': 'GB', '834': 'TZ', '840': 'US', '854': 'BF', '858': 'UY', '860': 'UZ',
  '862': 'VE', '887': 'YE', '894': 'ZM',
};

// Fallback lookup by common natural earth names
const NAME_TO_ALPHA2: Record<string, string> = {
  'India': 'IN',
  'Australia': 'AU',
  'United States of America': 'US',
  'United States': 'US',
  'United Kingdom': 'GB',
  'Germany': 'DE',
  'Japan': 'JP',
  'Canada': 'CA',
  'France': 'FR',
  'Brazil': 'BR',
  'China': 'CN',
  'Russia': 'RU',
  'South Africa': 'ZA',
  'New Zealand': 'NZ',
  'Italy': 'IT',
  'Spain': 'ES',
  'Netherlands': 'NL',
  'Saudi Arabia': 'SA',
  'United Arab Emirates': 'AE',
  'Singapore': 'SG',
};

/**
 * Standard Geographic Longitude & Latitude Coordinates for Core Territories
 * Resolves exact visual centers on Mercator projection
 */
const GEO_COORDS: Record<string, [number, number]> = {
  IN: [78.9629, 22.5937],   // India Center
  AU: [133.7751, -25.2744], // Australia Center
  US: [-98.5795, 39.8283],  // Continental US Center
  GB: [-1.5, 52.8],         // United Kingdom Center
  DE: [10.4515, 51.1657],   // Germany Center
  JP: [138.2529, 36.2048],  // Japan Center
  CA: [-106.3468, 56.1304], // Canada Center
  FR: [2.2137, 46.2276],    // France Center
  BR: [-51.9253, -14.2350], // Brazil Center
  CN: [104.1954, 35.8617],  // China Center
  RU: [90.0, 60.0],         // Russia Center
  ZA: [24.0, -29.0],        // South Africa Center
  NZ: [174.8860, -40.9006], // New Zealand
};

export const WorldMapViewer: React.FC<WorldMapViewerProps> = ({
  countries,
  hoveredCode,
  onHoverCountry,
  className = '',
}) => {
  const [internalHover, setInternalHover] = useState<string | null>(null);

  const activeCode = hoveredCode || internalHover;

  // Active countries lookup dictionary (key: uppercase alpha-2 code)
  const activeCountryMap = useMemo(() => {
    const map = new Map<string, { data: MapCountryData; rank: number }>();
    countries.forEach((c, idx) => {
      map.set(c.code.toUpperCase(), { data: c, rank: idx + 1 });
    });
    return map;
  }, [countries]);

  // Pre-calculate realistic TopoJSON geographic paths & centroids on flat Mercator map
  const { countryFeatures, graticulePath, countryCentroids, equatorY, primeMeridianX } = useMemo(() => {
    const topo = worldData as unknown as Topology<Objects>;
    // Extract GeoJSON features
    const extracted = feature(topo, topo.objects.countries as any) as any;
    const allFeatures: any[] = extracted.features || [];

    // Filter out Antarctica (id: '010' and '028') so the inhabited world spans the canvas cleanly
    const inhabitedFeatures = allFeatures.filter(f => f.id !== '010' && f.id !== '028');
    const inhabited = {
      type: 'FeatureCollection',
      features: inhabitedFeatures,
    };

    // Setup Flat Mercator projection precisely fitted into 800x500 viewport (zero clipping on all edges)
    const proj = geoMercator().fitExtent([[25, 18], [775, 482]], inhabited as any);
    const pathGen = geoPath().projection(proj);

    // Straight Flat Graticule Grid Lines (30° parallels and meridians)
    const graticule = pathGen(geoGraticule().step([30, 30])()) || '';

    // Calculate reference line positions
    const primePt = proj([0, 0]) || [400, 348];

    const centroids: Record<string, { x: number; y: number; name: string }> = {};

    const list = inhabitedFeatures.map(f => {
      const numericId = String(f.id || '').padStart(3, '0');
      const countryName = f.properties?.name || '';
      const alpha2 = (NUMERIC_TO_ALPHA2[numericId] || NAME_TO_ALPHA2[countryName] || f.id || '').toUpperCase();
      const d = pathGen(f) || '';

      // High-precision centroid: prefer known standard geo coords, fallback to pathGen.centroid
      let centroidPt: { x: number; y: number; name: string } | null = null;
      if (alpha2 && GEO_COORDS[alpha2]) {
        const pt = proj(GEO_COORDS[alpha2]);
        if (pt && !isNaN(pt[0]) && !isNaN(pt[1])) {
          centroidPt = { x: pt[0], y: pt[1], name: countryName };
        }
      }
      if (!centroidPt) {
        const c = pathGen.centroid(f);
        if (c && !isNaN(c[0]) && !isNaN(c[1])) {
          centroidPt = { x: c[0], y: c[1], name: countryName };
        }
      }

      if (centroidPt) {
        if (alpha2) centroids[alpha2] = centroidPt;
        if (countryName) centroids[countryName.toLowerCase()] = centroidPt;
      }

      return {
        id: numericId,
        alpha2,
        name: countryName,
        d,
        centroid: centroidPt,
      };
    });

    return {
      countryFeatures: list,
      graticulePath: graticule,
      countryCentroids: centroids,
      equatorY: primePt[1],
      primeMeridianX: primePt[0],
    };
  }, []);

  // Primary Hub (India) Centroid Coordinates
  const hubCoords = countryCentroids['IN'] || { x: 557, y: 302, name: 'India' };

  // Active hovered country info (resolves whether hovered directly on map or via leaderboard)
  const displayTooltipInfo = useMemo(() => {
    if (!activeCode) return null;
    const upper = activeCode.toUpperCase();
    const tracked = activeCountryMap.get(upper);
    const featureItem = countryFeatures.find(
      f => f.alpha2 === upper || f.name.toLowerCase() === activeCode.toLowerCase()
    );
    const name = tracked?.data.country || featureItem?.name || getCountryName(upper);
    const coords =
      countryCentroids[upper] ||
      countryCentroids[activeCode.toLowerCase()] ||
      featureItem?.centroid ||
      null;

    return {
      code: upper,
      name,
      count: tracked?.data.count,
      percentage: tracked?.data.percentage,
      isTracked: !!tracked,
      rank: tracked?.rank,
      coords,
    };
  }, [activeCode, activeCountryMap, countryFeatures, countryCentroids]);

  // Handle Country Hover
  const handleCountryMouseEnter = (
    _e: React.MouseEvent<SVGPathElement | SVGGElement>,
    alpha2: string,
    name: string
  ) => {
    setInternalHover(alpha2 || name);
    onHoverCountry?.(alpha2 || null);
  };

  const handleCountryMouseLeave = () => {
    setInternalHover(null);
    onHoverCountry?.(null);
  };

  return (
    <div
      className={`relative w-full overflow-hidden rounded-3xl bg-gradient-to-b from-slate-50 via-white to-slate-100/70 border border-slate-200/90 shadow-xs flex flex-col ${className}`}
    >
      {/* ── Top Map HUD Header (Dedicated Top Margin - Not Overlapping Map) ── */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 pt-3.5 pb-1 select-none">
        <div className="inline-flex items-center gap-2 px-3 py-1.5">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-[11px] font-bold text-slate-800 tracking-tight font-heading">
            Live Global Telemetry
          </span>
        </div>

        {/* Legend */}
        <div className="hidden sm:flex items-center gap-3.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xs text-[11px] font-medium text-slate-600">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 ring-2 ring-blue-100" />
            <span className="font-semibold text-slate-800">Primary Hub (IN)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-emerald-100" />
            <span>High Volume (AU)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 ring-2 ring-amber-100" />
            <span>Active Reach</span>
          </div>
        </div>
      </div>

      {/* ── SVG World Map Viewport (Cleanly separated from header) ── */}
      <div className="w-full flex-1 min-h-[380px] sm:min-h-[440px] flex items-center justify-center p-2 sm:p-3">
        <svg
          viewBox="0 0 800 500"
          className="w-full h-full max-h-[520px] overflow-hidden rounded-2xl"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Map Canvas Clip Boundary */}
            <clipPath id="mapCanvasClip">
              <rect x="0" y="0" width="800" height="500" rx="16" />
            </clipPath>
            {/* Luminous Glow Filters for Active Borders & Beacons */}
            <filter id="hubGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="activeBorderGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#2563EB" floodOpacity="0.5" />
            </filter>
            <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.12" />
            </filter>
          </defs>

          {/* ── Seamless Flat Ocean Canvas (Clean Flat 1.6:1 Frame) ── */}
          <rect
            x="0"
            y="0"
            width="800"
            height="500"
            rx="16"
            fill="#F8FAFC"
            className="transition-colors"
          />

          {/* ── Straight Flat Latitude & Longitude Graticule Lines ─── */}
          {graticulePath && (
            <path
              d={graticulePath}
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="0.6"
              strokeDasharray="2 3"
              className="pointer-events-none"
            />
          )}

          {/* ── Straight Flat Equator & Prime Meridian Reference Lines ── */}
          <g className="pointer-events-none opacity-45">
            <line
              x1="20"
              y1={equatorY}
              x2="780"
              y2={equatorY}
              stroke="#CBD5E1"
              strokeWidth="0.8"
              strokeDasharray="3 3"
            />
            <text x="25" y={equatorY - 4} fill="#94A3B8" fontSize="8" fontFamily="monospace" fontWeight="bold">
              0° EQUATOR
            </text>
            <line
              x1={primeMeridianX}
              y1="20"
              x2={primeMeridianX}
              y2="480"
              stroke="#CBD5E1"
              strokeWidth="0.8"
              strokeDasharray="3 3"
            />
            <text x={primeMeridianX + 5} y="32" fill="#94A3B8" fontSize="8" fontFamily="monospace" fontWeight="bold">
              0° PRIME MERIDIAN
            </text>
          </g>

          {/* ── Realistic Geographic Country Polygons (All 176 Inhabited Territories) */}
          <g className="transition-all duration-150">
            {countryFeatures.map(f => {
              const code = f.alpha2;
              const trackedEntry = activeCountryMap.get(code);
              const isHovered =
                activeCode && (activeCode.toUpperCase() === code || activeCode === f.name);

              // ── Flat Enterprise Color Palette Matrix ──
              let fill = '#E2E8F0'; // Default clean slate for untracked country
              let stroke = '#CBD5E1';
              let strokeWidth = 0.75;

              if (trackedEntry) {
                const rank = trackedEntry.rank;
                if (rank === 1) {
                  // India (Primary Hub)
                  fill = isHovered ? '#60A5FA' : '#BFDBFE';
                  stroke = '#1D4ED8';
                  strokeWidth = isHovered ? 2.4 : 1.7;
                } else if (rank === 2) {
                  // Australia (High Volume)
                  fill = isHovered ? '#34D399' : '#A7F3D0';
                  stroke = '#059669';
                  strokeWidth = isHovered ? 2.4 : 1.6;
                } else if (rank === 3) {
                  // United States
                  fill = isHovered ? '#FBBF24' : '#FDE68A';
                  stroke = '#D97706';
                  strokeWidth = isHovered ? 2.2 : 1.4;
                } else {
                  // UK, Japan, Germany
                  fill = isHovered ? '#38BDF8' : '#CFFAFE';
                  stroke = '#0284C7';
                  strokeWidth = isHovered ? 2.0 : 1.3;
                }
              } else if (isHovered) {
                // Any other country in the world hovered!
                fill = '#DBEAFE'; // Luminous sky blue
                stroke = '#2563EB'; // Sharp bold royal blue border
                strokeWidth = 2.0;
              }

              return (
                <path
                  key={`country-${f.id}-${code || f.name}`}
                  d={f.d}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={strokeWidth}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  className="cursor-pointer transition-all duration-150 ease-out hover:filter"
                  filter={isHovered ? 'url(#activeBorderGlow)' : undefined}
                  onMouseEnter={e => handleCountryMouseEnter(e, code, f.name)}
                  onMouseOver={e => handleCountryMouseEnter(e, code, f.name)}
                  onMouseLeave={handleCountryMouseLeave}
                />
              );
            })}
          </g>

          {/* ── Active / Hovered Country Crisp Foreground Border Overlay ── */}
          {(() => {
            if (!activeCode) return null;
            const activeFeature = countryFeatures.find(
              f => f.alpha2 === activeCode.toUpperCase() || f.name.toLowerCase() === activeCode.toLowerCase()
            );
            if (!activeFeature || !activeFeature.d) return null;

            const trackedEntry = activeCountryMap.get(activeFeature.alpha2);
            let overlayStroke = '#2563EB';
            let overlayFill = '#DBEAFE';
            let strokeWidth = 2.4;

            if (trackedEntry) {
              if (trackedEntry.rank === 1) {
                overlayStroke = '#1D4ED8';
                overlayFill = '#60A5FA';
                strokeWidth = 2.6;
              } else if (trackedEntry.rank === 2) {
                overlayStroke = '#047857';
                overlayFill = '#34D399';
                strokeWidth = 2.6;
              } else if (trackedEntry.rank === 3) {
                overlayStroke = '#B45309';
                overlayFill = '#FBBF24';
                strokeWidth = 2.4;
              } else {
                overlayStroke = '#0369A1';
                overlayFill = '#38BDF8';
                strokeWidth = 2.2;
              }
            }

            return (
              <path
                d={activeFeature.d}
                fill={overlayFill}
                stroke={overlayStroke}
                strokeWidth={strokeWidth}
                strokeLinejoin="round"
                strokeLinecap="round"
                className="pointer-events-none transition-all duration-150"
                filter="url(#activeBorderGlow)"
              />
            );
          })()}

          {/* ── Dynamic Telemetry Arcs (Connecting Readers to India Hub) ───── */}
          <g fill="none" strokeWidth="1.8" strokeLinecap="round" className="pointer-events-none">
            {countries.map(c => {
              const code = c.code.toUpperCase();
              if (code === 'IN') return null; // India is the hub destination
              const target = countryCentroids[code];
              if (!target) return null;

              const isHighlighted = activeCode?.toUpperCase() === code;

              // Arc Quadratic Control Point
              const midX = (hubCoords.x + target.x) / 2;
              const dist = Math.abs(hubCoords.x - target.x);
              const midY = Math.min(hubCoords.y, target.y) - 25 - dist * 0.05;

              return (
                <g key={`telemetry-arc-${code}`}>
                  {/* Flight Path Arc */}
                  <path
                    d={`M ${target.x} ${target.y} Q ${midX} ${midY}, ${hubCoords.x} ${hubCoords.y}`}
                    stroke={isHighlighted ? '#2563EB' : '#94A3B8'}
                    strokeOpacity={isHighlighted ? 0.85 : 0.28}
                    strokeWidth={isHighlighted ? 2.4 : 1.2}
                    strokeDasharray={isHighlighted ? '6 4' : '3 5'}
                    className="transition-all duration-300"
                  />
                </g>
              );
            })}
          </g>

          {/* ── Active Country Beacons & Pins ────────────────────────── */}
          {countries.map((c, idx) => {
            const code = c.code.toUpperCase();
            const coords = countryCentroids[code];
            if (!coords) return null;

            const isHub = code === 'IN';
            const isHovered = activeCode?.toUpperCase() === code;

            const color = isHub
              ? '#2563EB'
              : idx === 1
                ? '#059669'
                : idx === 2
                  ? '#D97706'
                  : '#0284C7';

            return (
              <g
                key={`beacon-${code}`}
                className="cursor-pointer"
                onMouseEnter={e => handleCountryMouseEnter(e, code, coords.name)}
                onMouseOver={e => handleCountryMouseEnter(e, code, coords.name)}
                onMouseLeave={handleCountryMouseLeave}
              >

                {/* Soft Aura Ring */}
                <circle
                  cx={coords.x}
                  cy={coords.y}
                  r={isHub ? 12 : isHovered ? 10 : 7}
                  fill={color}
                  fillOpacity={isHovered ? 0.35 : 0.18}
                  className="transition-all duration-300"
                />

                {/* Solid Core Circle */}
                <circle
                  cx={coords.x}
                  cy={coords.y}
                  r={isHub ? 5.5 : isHovered ? 5 : 4}
                  fill={color}
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  filter={isHub ? 'url(#hubGlow)' : undefined}
                  className="transition-all duration-200"
                />

                {/* Floating ISO Tag Chip */}
                <g
                  transform={`translate(${coords.x}, ${coords.y - (isHovered ? 15 : 11)})`}
                  className="pointer-events-none transition-all duration-200"
                >
                  <rect
                    x="-14"
                    y="-9"
                    width="28"
                    height="14"
                    rx="4"
                    fill={isHovered ? '#0F172A' : '#FFFFFF'}
                    stroke={isHovered ? '#0F172A' : '#CBD5E1'}
                    strokeWidth="1"
                    className="shadow-xs"
                  />
                  <text
                    x="0"
                    y="1.5"
                    textAnchor="middle"
                    fill={isHovered ? '#FFFFFF' : '#334155'}
                    fontSize="8.5"
                    fontWeight="bold"
                    fontFamily="monospace"
                  >
                    {code}
                  </text>
                </g>
              </g>
            );
          })}

          {/* ── Native SVG High-Precision Tooltip HUD ────────────────── */}
          {displayTooltipInfo && displayTooltipInfo.coords && (() => {
            const coords = displayTooltipInfo.coords;
            // Prevent top clipping for northern territories
            const isNearTop = coords.y < 90;
            // Prevent horizontal edge clipping with 224px width card
            const clampX = Math.max(120, Math.min(680, coords.x));
            const cardY = isNearTop ? coords.y + 14 : coords.y - 14;

            return (
              <g
                transform={`translate(${clampX}, ${cardY})`}
                className="pointer-events-none transition-all duration-150 animate-in fade-in"
              >
                {/* Pointer Arrow */}
                {isNearTop ? (
                  <polygon points="-6,0 6,0 0,-7" fill="#0F172A" />
                ) : (
                  <polygon points="-6,0 6,0 0,7" fill="#0F172A" />
                )}

                {/* Glassmorphic Dark Container Card (Enlarged Detail Box) */}
                <rect
                  x="-112"
                  y={isNearTop ? 0 : -72}
                  width="224"
                  height="72"
                  rx="12"
                  fill="#0F172A"
                  fillOpacity="0.97"
                  stroke="#334155"
                  strokeWidth="1.2"
                  filter="url(#cardShadow)"
                />

                {/* Country Name */}
                <text
                  x="-96"
                  y={isNearTop ? 26 : -46}
                  fill="#FFFFFF"
                  fontSize="13"
                  fontWeight="bold"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  {displayTooltipInfo.name.length > 19
                    ? `${displayTooltipInfo.name.substring(0, 17)}…`
                    : displayTooltipInfo.name}
                </text>

                {/* ISO Code Tag Chip */}
                <rect
                  x="66"
                  y={isNearTop ? 11 : -61}
                  width="28"
                  height="17"
                  rx="4"
                  fill="#1E293B"
                  stroke="#475569"
                  strokeWidth="0.8"
                />
                <text
                  x="80"
                  y={isNearTop ? 23 : -49}
                  textAnchor="middle"
                  fill="#94A3B8"
                  fontSize="9.5"
                  fontWeight="bold"
                  fontFamily="monospace"
                >
                  {displayTooltipInfo.code}
                </text>

                {/* Subtle Divider Line */}
                <line
                  x1="-96"
                  y1={isNearTop ? 37 : -35}
                  x2="96"
                  y2={isNearTop ? 37 : -35}
                  stroke="#334155"
                  strokeWidth="0.8"
                  strokeOpacity="0.8"
                />

                {/* Metrics: Verified Views & Audience Share */}
                {displayTooltipInfo.isTracked ? (
                  <>
                    <text
                      x="-96"
                      y={isNearTop ? 55 : -16}
                      fill="#38BDF8"
                      fontSize="12"
                      fontWeight="bold"
                      fontFamily="monospace"
                    >
                      {formatNumber(displayTooltipInfo.count)} views
                    </text>
                    <text
                      x="96"
                      y={isNearTop ? 55 : -16}
                      textAnchor="end"
                      fill="#34D399"
                      fontSize="12"
                      fontWeight="bold"
                      fontFamily="monospace"
                    >
                      {displayTooltipInfo.percentage ?? 0}% share
                    </text>
                  </>
                ) : (
                  <text
                    x="-96"
                    y={isNearTop ? 55 : -16}
                    fill="#94A3B8"
                    fontSize="11"
                    fontFamily="system-ui, -apple-system, sans-serif"
                  >
                    0 verified views • Monitored
                  </text>
                )}
              </g>
            );
          })()}
        </svg>
      </div>
    </div>
  );
};
