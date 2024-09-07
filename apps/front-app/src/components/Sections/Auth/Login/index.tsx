import Layout from '@/src/components/Layout';
import AuthLayout from '../AuthLayout';

const title = 'Login';

const Login = () => {
  return (
    <Layout title={title}>
      <AuthLayout title={title}>Login Form</AuthLayout>
    </Layout>
  );
};

export default Login;
