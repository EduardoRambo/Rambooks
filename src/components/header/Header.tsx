import './header.css'
import { FaBars, FaTimes } from "react-icons/fa";
import { MutableRefObject, useRef } from 'react';

export function Header() {
  const navRef = useRef() as MutableRefObject<HTMLDivElement>;

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header className="topo">
      <h1>Rambooks</h1>
      <nav ref={navRef} className="menu">
        <ul>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
          <li>
            <a className="botao-assinatura" href="#assinatura">FAÇA JÁ SUA ASSINATURA</a>
          </li>
          <li>
            <a href="#sobre-nos">SOBRE NÓS</a>
          </li>
          <li>
            <a href="#catalogo">CATÁLOGO</a>
          </li>
          <li>
            <a href="#home">ÍNICIO</a>
          </li>
        </ul>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  )
}