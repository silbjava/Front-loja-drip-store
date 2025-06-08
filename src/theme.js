export const theme = {
  colors: {
    // Cores Principais
    primary: '#C92071',       // Cor primária (botões, elementos principais)
    secondary: '#B5B6F2',     // Ações e destaques
    tertiary: '#991956',      // Ações secundárias
    
    // Cores de Feedback
    error: '#EE4266',         // Erros
    success: '#52CA76',       // Sucesso
    warning: '#F6AA1C',       // Alertas
    
    // Escala de Cinza (com semântica)
    grayscale: {
      title: '#1F1F1F',       // Títulos (Dark Gray)
      body: '#474747',        // Texto corrido (Dark Gray 2)
      label: '#666666',       // Rótulos (Dark Gray 3)
      copy: '#8F8F8F',        // Textos secundários (Light Gray)
      shape: '#CCCCCC',       // Formas (Light Gray 2)
      inputBg: '#F5F5F5',     // Fundo de inputs (Light Gray 3)
      bg: '#FFFFFF',          // Fundo geral (White)
    },
    
    // Cores de Fundo (opcional)
    backgrounds: {
      primary: '#F5F5F5',     // (Light Gray 3)
      secondary: '#FFFFFF',   // (White)
    }
  },
  fonts: {
    primary: 'Inter, sans-serif' // Substitua pela fonte do Figma
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px'
  }
};