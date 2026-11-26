import "./Avatar.css";

const PALETTE = ["#0f766e", "#b45309", "#7c3aed", "#be123c", "#1d4ed8", "#4d7c0f"];

// Same name always gives the same colour.
function colorFor(name) {
  let sum = 0;
  for (const char of name) sum += char.charCodeAt(0);
  return PALETTE[sum % PALETTE.length];
}

function initialsOf(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/**
 * Reusable profile image.
 * Shows `src` when given, otherwise initials on a coloured background.
 */
function Avatar({ name, src, size = "md", shape = "circle" }) {
  const className = `avatar avatar--${size} avatar--${shape}`;

  if (src) {
    return <img className={className} src={src} alt={name} />;
  }

  return (
    <span
      className={className}
      style={{ background: colorFor(name) }}
      role="img"
      aria-label={name}
    >
      {initialsOf(name)}
    </span>
  );
}

export default Avatar;
