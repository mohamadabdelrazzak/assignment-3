'use client';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import { Toaster } from 'react-hot-toast';
import Image from "next/image";
import PageTitle from "@/components/PageTitle";
import "../styles/GlobalStyles.css";
import '@fontsource/poppins';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import style from '../styles/modules/app.module.scss'
import AppHeader from '@/components/AppHeader';
import AppContent from "@/components/AppContent";
export default function Home() {
  return (
    
    <Provider store={store}>
<div className="container">
 < PageTitle>Task Management</PageTitle>
 <div className={style.app__Wrapper}>
 <AppHeader/>
 <AppContent/>
 <Toaster/>
 </div>
 </div>
  </Provider>
  
  ); 
}
