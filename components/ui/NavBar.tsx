"use client"
import * as React from "react"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import  Logo  from '@/components/ui/Logo'
import { signOut, useSession} from "next-auth/react";

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Workshops', href: '/workshops' },
    { name: 'Contact Us', href: '/contact' },
]

export function Navbar() {
  const [menuState, setMenuState] = React.useState(false);   
  const session = useSession();
  const [token, setToken] = React.useState<string | null>(null);
  
  React.useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);
  return (
    <nav
    data-state={menuState && 'active'}
    className="group fixed top-0 z-50 w-full h-18 border-b border-dashed bg-white backdrop-blur dark:bg-zinc-950/50 lg:dark:bg-black">
    <div className="m-auto max-w-8xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-10 py-5 lg:gap-0 lg:py-4">
            <div className="flex w-auto justify-start ">
                <Link
                    href="/"
                    aria-label="home"
                    className="flex items-center w-full space-x-2">
                    <Logo/>
                    <span className="hidden text-xl font-bold text-gray-100 lg:block">
                        RBased Services Pvt. Ltd.
                    </span>
                </Link>

                <button
                    onClick={() => setMenuState(!menuState)}
                    aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                    className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                    <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                    <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                </button>
            </div>

            <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                <div className="lg:pr-4">
                    <ul className="space-y-8 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className="text-xl text-muted-foreground hover:text-accent-foreground block duration-150">
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex w-full flex-col space-y-8 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                    
                { (token || session.data?.user) && <Button
                        asChild
                        variant="outline"
                        size="lg">
                        <Link onClick={() => {
                            localStorage.removeItem("token") ;
                            signOut();
                        }} href="#">
                            <span>Logout</span>
                        </Link>
                    </Button>}
                    { !token && !session.data?.user &&
                    <Button
                        asChild
                        variant="outline"
                        size="sm">
                        <Link href="/login">
                            <span>Login</span>
                        </Link>
                    </Button>}
                 { (!token && !session.data?.user) && <Button
                        asChild
                        variant="outline"
                        size="sm">
                        <Link href="./signup">
                            <span>Signup</span>
                        </Link>
                    </Button>}
                  </div> 
                </div>
            </div>
    
    </div>
</nav>
  );
}



