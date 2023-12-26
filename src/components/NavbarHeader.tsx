type AnchorTag = {
  name: string;
  address: string;
};

export const NavbarHeader = ({
  links,
  logo,
}: {
  links: AnchorTag[];
  logo: string;
}) => {
  return (
    <>
      <header className="main-header">
        <nav className="navbar">
          <div className="logo">{logo}</div>
          <ul className="navbar-nav ul-defaults-none">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.address}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};
