import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Example from '@/Components/Example';
import NavBarGuest from '@/Components/NavBarGuest';
import Modal from '@/Components/Modal';

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            {props.auth.user ? (
                <Link href={route('dashboard')} className="text-sm text-gray-700 underline">
                    Dashboard
                </Link>
            ) : (
                <>
                    <NavBarGuest></NavBarGuest>
                </>
            )}            
            
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    
                </div>
                
                <Modal></Modal>

            </div>
        </>
    );
}
