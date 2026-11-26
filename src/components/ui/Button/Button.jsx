import "./Button.css";

/**
 * Reusable button.
 * - `variant` and `size` control appearance.
 * - `onClick` is a function passed down from the parent.
 * - Default values are set while destructuring the props.
 */
function Button({
  children,
  variant = "primary", // "primary" | "secondary" | "ghost"
  size = "md", // "sm" | "md"
  fullWidth = false,
  disabled = false,
  type = "button",
  onClick,
  ariaPressed,
}) {
  const className = [
    "btn",
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth ? "btn--full" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
      aria-pressed={ariaPressed}
    >
      {children}
    </button>
  );
}

export default Button;
