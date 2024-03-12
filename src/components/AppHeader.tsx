'use client';
import React , { useState } from "react";
import Button, { SelecButton } from "./Button";
import styles from '../styles/modules/app.module.scss';
import TodoModal from "./TodoModal";
import { Provider } from "react-redux";

interface AppHeaderProps {
    children?: React.ReactNode;
}

const AppHeader: React.FC<AppHeaderProps>  = () => {
 const [modalOpen , setModalOpen ] = React.useState(false);
    
    return (

    <div className={styles.appHeader}>
    
        <Button variant="primary" onClick={() => setModalOpen(true)}>Add Task</Button>
        <SelecButton id="status" >
            <option value="all">all</option>
            <option value="complete">complete</option>
            <option value="incomplete">incomplete</option>
        </SelecButton>
        <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
     

    
    
    );
};

export default AppHeader;