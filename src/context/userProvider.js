"use client";

import React, { useEffect, useState } from 'react'
import UserContext from './UserContext'
import { toast } from 'react-toastify';
import { httpAxios } from '@/helper/httpHelper';
import { currentUser } from '@/services/userService';

const UserProvider = ({children}) => {

   const [user,setUser] = useState(undefined);

  

        useEffect(()=>{


          const logUser=async()=>{

           try {
                const userDetails = await currentUser();

                

                if(userDetails.success==false)
                {
                    return;
                }
           
                setUser({...userDetails.user})
            } catch (error) {
                console.log(error);
                toast.error("Error in loading current user",{
                    autoClose:1000,
                    pauseOnFocusLoss:false,
                    pauseOnHover:false,
                    position:"top-center"
                });
                setUser(undefined);
            }
        }

        logUser();
        
        },[])

   

  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider