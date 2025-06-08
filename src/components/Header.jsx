import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from './Logo';

export function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        if (search.trim()) {
            navigate(`/products?search=${encodeURIComponent(search.trim())}`);
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSearch();
    };

    const isActive = (path) => location.pathname === path;

    return (
        <header className="w-full  surface-border">
            {/* Top Section */}
            <div className="p-3 flex justify-content-center">
                <div className="w-full" style={{ maxWidth: '1440px' }}>
                    <div className="flex flex-wrap align-items-center justify-content-between gap-4">
                        {/* Logo */}
                        <Logo />

                        {/* Search */}
                        <div className="flex-grow-1 " >
                            <IconField iconPosition="right" className="w-full">
                                <InputIcon
                                    className="pi pi-search"
                                    onClick={handleSearch}
                                    style={{ cursor: 'pointer' }}
                                />
                                <InputText

                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Pesquisar produto..."
                                    className="w-full border-none shadow-none border-round-lg max-w-[559px] h-3rem text-[16px] leading-[28px] tracking-[0.75px] font-normal font-[Inter] opacity-60 "
                                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.04)' }}
                                />
                            </IconField>
                        </div>

                        {/* Access / Cart */}
                        <div className="flex align-items-center gap-4">
                            <Link
                                to="/register"
                                className="text-sm text-600 underline"
                                style={{ textDecoration: 'underline' }}
                            >
                                Cadastre-se
                            </Link>

                            <Button
                                label="Entrar"
                                className="p-button"
                                style={{
                                    backgroundColor: '#C92071',
                                    border: 'none',
                                    fontWeight: 'bold',
                                    fontSize: '14px',
                                    width: '114px',
                                    height: '40px',
                                    borderRadius: '4px',
                                    color: 'white'
                                }}
                            />

                            <img
                                src="src/assets/mini-cart.svg"
                                alt="Carrinho"
                                style={{ height: '24px', width: '24px' }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="pb-3 flex justify-content-center">
                <nav className="flex gap-4" style={{ width: '100%', maxWidth: '1440px', paddingRight: '2rem' }}>
                    {[
                        { name: 'Home', path: '/' },
                        { name: 'Produtos', path: '/products' },
                        { name: 'Categorias', path: '/categories' },
                        { name: 'Meus Pedidos', path: '/orders' },
                    ].map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-sm pb-1 ${isActive(link.path)
                                    ? 'text-pink-600 font-semibold border-bottom-2 border-pink-600'
                                    : 'text-700'
                                }`}
                            style={{ textDecoration: 'none' }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
