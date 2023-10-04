"use client"
import NavBar from '../molecules/dynamicNavBar';
export default function LayoutWithNavBar({ children }: { children: React.ReactNode }) {
    return <>
        <main className="min-h-screen">
            <NavBar />
            <div className='flex'>{children}</div>
        </main>
    </>
}