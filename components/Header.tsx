import Image from 'next/image'
import React from 'react'
import {
    HomeIcon,
    MenuIcon,
    SearchIcon,
} from "@heroicons/react/solid"
import {
    SpeakerphoneIcon,
    BellIcon,
    CakeIcon,
    ChevronDownIcon,
    GlobeIcon,
    VideoCameraIcon,
    PlusIcon,
    SparklesIcon
} from "@heroicons/react/outline"
import { signIn, signOut, useSession } from 'next-auth/react'
function Header() {
    const { data: session } = useSession()
    return (
        <div className=' sticky top-0 z-50 flex bg-white px-4 py-2  shadow-md'>
            <div className=' relative h-10 w-20 flex-shrink-0  cursor-pointer'>
                <Image src="https://links.papareact.com/fqy" layout='fill' objectFit='contain' />
            </div>
            <div className=' flex mx-7 items-center xl:min-w-[300px]'>
                <HomeIcon className=' h-5 w-5' />
                <p className=' flex-1 ml-2 hidden lg:inline'>Home</p>
                <ChevronDownIcon className=' h-5 w-5' />
            </div>
            {/* search */}
            <form className=' flex flex-1 items-center space-x-2 border border-gray-200 rounded-sm bg-gray-100 px-3 py-1'>
                <SearchIcon className=' w-6 h-6 text-gray-400' />
                <input className=' flex-1 bg-transparent outline-none ' type="text" placeholder='Search Reddit' />
                <button type='submit' hidden />
            </form>

            <div className=' mx-5 hidden lg:inline-flex text-gray-500 space-x-2 items-center'>
                <SparklesIcon className=' icon' />
                <GlobeIcon className=' icon' />
                <VideoCameraIcon className=' icon' />
                <hr className='h-10 border border-gray-200' />
                <CakeIcon className=' icon' />
                <BellIcon className=' icon' />
                <PlusIcon className=' icon' />
                <SpeakerphoneIcon className=' icon' />
            </div>
            <div className="ml-5 flex items-center lg:hidden">
                <MenuIcon className='icon' />
            </div>
            {/* Sign in/ Sign out */}
            {session ? (
                <div
                    onClick={() => signOut()}
                    className=' hidden lg:flex items-center space-x-2 border border-gray-100 p-2  cursor-pointer'>
                    <div className=' relative flex-shrink-0 w-5 h-5'>
                        <Image src="https://links.papareact.com/23l" objectFit='contain' alt="" layout='fill' />
                    </div>

                    <div className=' flex-1 text-xs'>
                        <p className=' truncate'>{session.user?.name}</p>
                        <p>1 Karma</p>
                    </div>

                    <ChevronDownIcon className='h-5  flex-shrink-0 text-gray-400' />
                </div>
            ) : (<div
                onClick={() => signIn()}
                className=' hidden lg:flex items-center space-x-2 border border-gray-100 p-2  cursor-pointer'>
                <div className=' relative flex-shrink-0 w-5 h-5'>
                    <Image src="https://links.papareact.com/23l" objectFit='contain' alt="" layout='fill' />
                </div>
                <p>Sign In</p>
            </div>)}

        </div>
    )
}

export default Header