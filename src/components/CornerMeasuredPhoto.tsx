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
  { x1: 50, y1: 11, x2: 50, y2: 48, label: '6.5"', labelX: 57, labelY: 31 },
  { x1: 50, y1: 14, x2: 22, y2: 38, label: '5"', labelX: 30, labelY: 22 },
  { x1: 18, y1: 91, x2: 82, y2: 91, label: '10"', labelX: 50, labelY: 96 },
];

const OUTSIDE_LINES: DimLine[] = [
  { x1: 50, y1: 8, x2: 50, y2: 48, label: '7"', labelX: 57.5, labelY: 26 },
  { x1: 16, y1: 93, x2: 84, y2: 93, label: '10"', labelX: 50, labelY: 97.2 },
  { x1: 88, y1: 52, x2: 88, y2: 86, label: '10"', labelX: 94, labelY: 70 },
  { x1: 28, y1: 52, x2: 46, y2: 50, label: '4.5"', labelX: 32, labelY: 47 },
];

function arrowHead(x: number, y: number, fromX: number, fromY: number) {
  const angle = Math.atan2(y - fromY, x - fromX);
  const size = 1.7;
  const spread = 0.72;
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
            stroke="#111"
            strokeWidth="0.32"
          />
          <polygon points={arrowHead(line.x1, line.y1, line.x2, line.y2)} fill="#111" />
          <polygon points={arrowHead(line.x2, line.y2, line.x1, line.y1)} fill="#111" />
          <text
            x={line.labelX}
            y={line.labelY}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#111"
            fontSize="3.1"
            fontWeight="700"
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
