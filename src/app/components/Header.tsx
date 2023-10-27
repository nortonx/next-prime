"use client";

import Link from "next/link";
import "./Header.css";
import { Button } from "primereact/button";
const Header = () => {
  return(
    <header data-testid="header" className="flex w-full">
      <nav className="flex w-full align-items-center justify-content-between">
        <div className="brand ml-3">Brand</div>
        <ul className="flex mr-3" >
          <li className="mr-2">
            <Link href="/password-generator">
              <Button
                label="Password Generator"
                icon="pi pi-lock"
              />
            </Link>
          </li>
          <li className="mr-2">
            <Link href="/repositories">
              <Button
                label="Repositories"
                icon="pi pi-github"
              />
            </Link>
          </li>
          <li className="mr-2">
            <Link href="/word-count">
              <Button
                label="Word Count"
                icon="pi pi-check-circle"
              />
            </Link>
          </li>
          <li className="mr-2">
            <Link href="/about">
              <Button
                label="About"
                icon="pi pi-info-circle"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;