import React from 'react';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="text-center text-lg-start text-muted " sticky="bottom">
            <div className="text-center p-3">
                <b>&copy; {year} Copyright:</b> <a className="text-white" href="https://github.com/youba1993/">Youba IDJIS</a>
            </div>      
        </footer>
    )
}