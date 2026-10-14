import React from 'react';

type CornerType = 'inside' | 'outside';

interface DimLine {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label: string;
  labelX: number;
  labelY: number;
}

/** Same numbers as the old-site measured photos, remapped to the current (upside-down) poses. */
const INSIDE_LINES: DimLine[] = [
  { x1: 50, y1: 10, x2: 50, y2: 46, label: '6.5"', labelX: 68, labelY: 28 },
  { x1: 50, y1: 13, x2: 18, y2: 36, label: '5"', labelX: 22, labelY: 18 },
  { x1: 16, y1: 92, x2: 84, y2: 92, label: '10"', labelX: 50, labelY: 96.2 },
];

const OUTSIDE_LINES: DimLine[] = [
  { x1: 50, y1: 6, x2: 50, y2: 46, label: '7"', labelX: 64, labelY: 24 },
  { x1: 14, y1: 92, x2: 86, y2: 92, label: '10"', labelX: 50, labelY: 96.2 },
  { x1: 90, y1: 52, x2: 90, y2: 86, label: '10"', labelX: 90, labelY: 46 },
  { x1: 22, y1: 50, x2: 46, y2: 49, label: '4.5"', labelX: 28, labelY: 43 },
];

function arrowHead(x: number, y: number, fromX: number, fromY: number, size: number) {
  const angle = Math.atan2(y - fromY, x - fromX);
  const spread = 0.7;
  const x1 = x - size * Math.cos(angle - spread);
  const y1 = y - size * Math.sin(angle - spread);
  const x2 = x - size * Math.cos(angle + spread);
  const y2 = y - size * Math.sin(angle + spread);
  return `${x},${y} ${x1},${y1} ${x2},${y2}`;
}

function DimensionOverlay({ lines }: { lines: DimLine[] }) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {lines.map((line) => (
        <g key={`${line.label}-${line.x1}-${line.y1}`}>
          <line
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="#fff"
            strokeWidth="1.15"
          />
          <line
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="#111"
            strokeWidth="0.55"
          />
          <polygon points={arrowHead(line.x1, line.y1, line.x2, line.y2, 2.3)} fill="#fff" />
          <polygon points={arrowHead(line.x2, line.y2, line.x1, line.y1, 2.3)} fill="#fff" />
          <polygon points={arrowHead(line.x1, line.y1, line.x2, line.y2, 1.7)} fill="#111" />
          <polygon points={arrowHead(line.x2, line.y2, line.x1, line.y1, 1.7)} fill="#111" />
          <rect
            x={line.labelX - (line.label.length > 3 ? 7.1 : 5.4)}
            y={line.labelY - 3.4}
            width={line.label.length > 3 ? 14.2 : 10.8}
            height="6.6"
            rx="1.2"
            fill="#fff"
            stroke="#111"
            strokeWidth="0.35"
          />
          <text
            x={line.labelX}
            y={line.labelY}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#111"
            fontSize="4.4"
            fontWeight="800"
            fontFamily="Inter, system-ui, sans-serif"
          >
            {line.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

interface CornerMeasuredPhotoProps {
  src: string;
  alt: string;
  type: CornerType;
  className?: string;
  imgClassName?: string;
}

export const CornerMeasuredPhoto: React.FC<CornerMeasuredPhotoProps> = ({
  src,
  alt,
  type,
  className = '',
  imgClassName = '',
}) => (
  <div className={`relative inline-block max-h-full max-w-full ${className}`}>
    <img src={src} alt={alt} className={`block max-h-full max-w-full object-contain ${imgClassName}`} />
    <DimensionOverlay lines={type === 'inside' ? INSIDE_LINES : OUTSIDE_LINES} />
  </div>
);
