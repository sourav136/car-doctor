import React from 'react';
import LoginForm from '../components/LoginForm';
import GoogleAuthButton from '../components/GoogleAuthButton';

const login = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-17.5 mt-10 md:mt-15'>
            <div className='flex items-center order-2 md:order-1'>
                <img className='w-full' src="/assets/images/auth.png" alt="authentication banner" />
            </div>
            <div className='flex flex-col gap-7 p-10 md:p-12 lg:p-19 rounded-lg border border-form order-1 md:order-2'>
                <h1 className='font-semibold text-4xl text-light-dark text-center mb-5'>Login</h1>
                <LoginForm/>
                <p className='font-medium text-light-dark text-lg text-center'>Or Sign In With</p>
                <div className='flex justify-center w-full'>
                    <GoogleAuthButton/>
                </div>
            </div>
        </section>
    );
};

export default login;