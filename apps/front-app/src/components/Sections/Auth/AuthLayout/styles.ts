import { Box, styled } from '@mui/material';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 4rem;
  align-items: center;
`;

export const ContentWrapper = styled(Box)`
  border: 1px solid white;
  border-radius: 0.5rem;
  min-width: 35rem;
  min-height: 20rem;
  padding: 1.5rem;
`;
