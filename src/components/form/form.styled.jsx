import styled from '@emotion/styled';

export const InputLabel = styled.label`
  // display: block;
  margin-right: auto;
  font-weight: bold;

  font-size: ${p => p.theme.fontSizes.m};
`;

export const Input = styled.input`
  margin-bottom: ${p => p.theme.sizes.xs};
`;
