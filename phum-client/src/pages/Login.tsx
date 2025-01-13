import { Button, Form, Input, Typography } from 'antd';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { setUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';
import { useAppDispatch } from '../redux/features/hooks';
import toast from 'react-hot-toast';

const { Title } = Typography;

const Login = () => {
    const dispatch = useAppDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            id: '0001',
            password: 'admin12345',
        },
    });

    const [login, { isLoading }] = useLoginMutation();

    const onSubmit = async (data) => {
        try {
            const userInfo = {
                id: data.id,
                password: data.password,
            };

            const res = await login(userInfo).unwrap();
            const user = verifyToken(res.data.accessToken);

            dispatch(setUser({ user, token: res.data.accessToken }));

            // Success toast
            toast.success('Login successful!', {
                duration: 3000,
            });
        } catch (err) {
            // Error toast
            toast.error(err?.data?.message || 'Login failed. Please try again.', {
                duration: 3000,
            });
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #f0f0f0', borderRadius: '8px' }}>
            <Title level={3} style={{ textAlign: 'center', marginBottom: '20px' }}>Login</Title>
            <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
                <Form.Item label="ID" required>
                    <Input
                        placeholder="Enter your ID"
                        {...register('id', { required: 'ID is required' })}
                    />
                    {errors.id && <span style={{ color: 'red', fontSize: '12px' }}>{errors.id.message}</span>}
                </Form.Item>
                <Form.Item label="Password" required>
                    <Input.Password
                        placeholder="Enter your password"
                        {...register('password', { required: 'Password is required' })}
                    />
                    {errors.password && <span style={{ color: 'red', fontSize: '12px' }}>{errors.password.message}</span>}
                </Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={isLoading}
                    block
                    style={{ marginTop: '10px' }}
                >
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;
