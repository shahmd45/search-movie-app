/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { useEffect, useState } from 'react';

import './Navbar.css';

type NavbarProps = {
    onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleClick: () => void;
    handleReset: () => void;
    search: string;
    iconFlag: boolean;
}

function Navbar({ onSearch, handleClick, handleReset, search, iconFlag }: NavbarProps) {
    const [navbarShow, setNavbarShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setNavbarShow(true);
            } else {
                setNavbarShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll", () => true);
        };
    }, []);

    return (
        <div className={`movie__navbar--container ${navbarShow && 'movie__navbar--blackContainer'}`}>
            <img
                className="movie__navbar--logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                alt="Netflix Logo"
            />

            <div className='navbar--search'>
                <div className='navbar--input'>
                    <input
                        type='text'
                        placeholder="Search"
                        className="movie__navbar--input"
                        value={search}
                        onChange={(event) => onSearch(event)}
                    />
                    {!iconFlag ? (
                        <a className='navbar-close' href='#' onClick={handleReset} />
                    ) : (
                        <a className='navbar-search' href='#' onClick={handleClick} />
                    )
                    }
                </div>
                <img
                    className="movie__navbar--avatar"
                    src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                    alt="Avatar"
                />
            </div>
        </div>
    )
}

export default Navbar