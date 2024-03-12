'use client';
import React from "react";
import styles from '../styles/modules/button.module.scss'
import { getClasses } from "@/utils/getClasses";

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    type?: "submit" | "button";
    onClick?: () => void;
    onKeyDown?: () => void;
}


const Button: React.FC<ButtonProps> = ({children, type ,variant,...rest}) => {
    return (
        <button 
        className={getClasses([
            styles.button,
             styles['button--' + variant+'']])}
        type={type==="submit" ? "submit" : "button"}
        {...rest}>
            {children} 
        </button>
        

        
)};

interface SelecButtonProps extends React.ComponentPropsWithoutRef<'select'>{
    children: React.ReactNode;

}
const SelecButton: React.FC<SelecButtonProps> = function SelecButton({
    children,
    ...rest
}){
    return (
        <select className={getClasses([styles.button, 
       styles.button__select])}
        {...rest}>
            {children}
        </select>
    )
}
export {SelecButton}
export default Button