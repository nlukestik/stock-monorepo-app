import * as SC from './styles';

type Props = {
  title: string;
  children: React.ReactNode;
};

const AuthLayout = ({ title, children }: Props) => {
  return (
    <SC.Wrapper>
      <h1>{title}</h1>

      <SC.ContentWrapper>{children}</SC.ContentWrapper>
    </SC.Wrapper>
  );
};

export default AuthLayout;
