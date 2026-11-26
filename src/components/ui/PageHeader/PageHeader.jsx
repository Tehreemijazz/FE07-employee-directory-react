import "./PageHeader.css";

/**
 * Reusable page header.
 * `children` lets the parent place anything (buttons, stats) on the right.
 */
function PageHeader({ title, subtitle, children }) {
  return (
    <header className="page-header">
      <div>
        <h1 className="page-header__title">{title}</h1>
        {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
      </div>
      {children && <div className="page-header__actions">{children}</div>}
    </header>
  );
}

export default PageHeader;
