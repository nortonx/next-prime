import Link from "next/link";
import "./Header.css";
const Header = () => {
  return(
    <header data-testid="header" className="flex w-full">
      <nav className="flex w-full align-items-center justify-content-between">
        <div className="brand ml-3">Brand</div>
        <ul className="flex mr-3" >
          <li className="mr-2">
            <Link href="/password-generator">
              Password Generator
            </Link>
          </li>
          <li className="mr-2">ToDo</li>
          <li className="mr-2">About</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;