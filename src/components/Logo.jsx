import logoHeader from '../assets/logo-header.svg'
const Logo = () => {
  return (
    <div className="flex justify-content-center align-items-center">
      <img 
        src={logoHeader} 
        alt="Logo Drip Store" 
        className="w-15rem h-3rem" // 253px ≈ 15rem, 44px ≈ 3rem
      />
    </div>
  );
};

export default Logo;