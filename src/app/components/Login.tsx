'use client';

import { useSession, signIn } from 'next-auth/react';

const Login = () => {
  const { status } = useSession();

  return (() => {
    switch (status) {
      case 'loading':
        return (
          <div className='min-h-screen flex items-center justify-center'>
            <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900'></div>
          </div>
        );

      case 'authenticated':
        return null;

      default:
        return (
          <div className='min-h-screen flex flex-col items-center justify-center bg-gray-50'>
            <div className='max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg'>
              <div className='text-center'>
                <h2 className='mt-6 text-3xl font-bold text-gray-900'>ログイン</h2>
                <p className='mt-2 text-sm text-gray-600'>
                  アカウントにアクセスするにはログインしてください
                </p>
              </div>
              <button
                onClick={() => signIn('google', { callbackUrl: '/todo' })}
                className='w-full flex items-center justify-center gap-3 bg-white text-gray-700 hover:bg-gray-50 font-medium rounded-lg px-4 py-3 border transition-colors'
              >
                <svg className='w-5 h-5' viewBox='0 0 24 24'>
                  <path
                    d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                    fill='#4285F4'
                  />
                  <path
                    d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                    fill='#34A853'
                  />
                  <path
                    d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                    fill='#FBBC05'
                  />
                  <path
                    d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                    fill='#EA4335'
                  />
                </svg>
                Google でログイン
              </button>
            </div>
          </div>
        );
    }
  })();
};

export default Login;
