import Link from "next/link"

const Header = (props) => (
  <header className="page-header">
    <Link href="/">
      <img className="header-logo" src="/assets/logo.svg" alt="Search icon" />
    </Link>
    {props.children}
  </header>
)

export default Header
