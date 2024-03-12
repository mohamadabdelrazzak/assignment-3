'use client';
import React from 'react';
import style from '../styles/modules/title.module.scss';
interface PageTitleProps {
  children: React.ReactNode;
}
const PageTitle: React.FC<PageTitleProps> = ({children, ...props}) => {
  return (
  
      <p className={style.title} {...props}>{children}</p>
  );
};

export default PageTitle;