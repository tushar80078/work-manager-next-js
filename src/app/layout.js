import Footer from '../components/Footer'
import Customenavbar from '../components/CustomeNavbar'
import './globals.css'
import { Inter } from 'next/font/google'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import UserContext from '@/context/UserContext';
import UserProvider from '@/context/userProvider';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={inter.className}> 
      <UserProvider>
        <Customenavbar/>
        
        <ToastContainer />
        <div className='mt-2'>{children}</div>

        <Footer/>
      </UserProvider>
      </body>
    </html>
  )
}
