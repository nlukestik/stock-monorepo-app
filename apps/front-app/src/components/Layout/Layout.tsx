import { Box, styled } from '@mui/material';
import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const StyledWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  padding: 6rem 10rem;
`;

type Props = {
  children: React.ReactNode;
  title: string;
};

const Layout = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Stock App for Shops' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <StyledWrapper className={inter.className}>
        {/* Header */}
        {children}
      </StyledWrapper>
    </>
  );
};

export default Layout;
