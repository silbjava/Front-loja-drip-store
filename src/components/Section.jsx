import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Wrapper geral da seção
const SectionContainer = styled.section`
  width: 100%;
  padding: 2rem 5.2vw;
  margin-bottom: 3rem;
`;

// Header da seção (título + link opcional)
const SectionHeader = styled.div`
  display: flex;
  justify-content: ${({ align }) => (align === 'center' ? 'center' : 'space-between')};
  align-items: center;
  margin-bottom: 1.5rem;
`;

// Título
const Title = styled.h2`
  font-size: 24px;
  color: #474747; /* dark-gray-2 */
  text-align: ${({ align }) => align || 'left'};
  flex: 1;
`;

// Link opcional
const StyledLink = styled(Link)`
  font-size: 18px;
  color: #c92071; /* primary */
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const Section = ({ title, titleAlign = 'left', link, children }) => {
  return (
    <SectionContainer>
      <SectionHeader align={titleAlign}>
        <Title align={titleAlign}>{title}</Title>
        {link && titleAlign !== 'center' && (
          <StyledLink to={link.href}>{link.text}</StyledLink>
        )}
      </SectionHeader>
      {children}
    </SectionContainer>
  );
};

export default Section;
