'use client';
import React , {  useEffect , useState } from "react";
import { useDispatch ,Provider} from "react-redux";
import styles from '../styles/modules/modal.module.scss';
import toast from "react-hot-toast";
import { MdOutlineClose } from "react-icons/md";
import Button from "./Button";
import { addTodo, } from "@/slice/todoSlice";
import { v4 as uuid } from "uuid";
import {format} from 'date-fns'
import { time } from "console";
function TodoModal({ type, modalOpen , setModalOpen ,todo   }: any) {
 const [title, setTitle] = useState('');
 const [status, setStatus] = useState('incomplete');
 
 useEffect(() => {
    if (type === 'update' && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
    } else {
      setTitle('');
      setStatus('incomplete');
    }
  }, [type, todo, modalOpen]);

 const dispatch = useDispatch();
 const handleSubmit = (e:any) => {
    e.preventDefault();
    if (title && status){
        dispatch(
            addTodo({
                id: uuid(),
                title,
                status,
                date: format(new Date(), 'dd MMM yyyy'),
            })
        );
        toast.success('Todo Added Successfully');
        setModalOpen(false);
    }else {
        toast.error('Please fill in all fields');
    }
    
 };

 
 return (
<div>
    {modalOpen  && (    
    <div className={styles.wrapper}>
       <div className= {styles.container}>
        <div className={styles.closeButton}
             onClick={() => setModalOpen(false)}
             onKeyDown={() => setModalOpen(false)}
             tabIndex={0}
             role="button"
             >

             <MdOutlineClose/>
             </div>
             <form className={styles.form} onSubmit={(e)=>handleSubmit(e)}>
                <h1 className={styles.formTitle}>Add Task</h1>
                <label htmlFor="title">
                    Title
                    <input type="text" id="title" value={title} 
                    onChange={(e) => setTitle(e.target.value)}/>
                </label>
                <label htmlFor="status">
                    Status
                    <select name="status" id="status" value={status} 
                    onChange={(e) => setStatus(e.target.value)} >
                        <option value="incomplete">Incomplete</option>
                        <option value="complete">Complete</option>
                    </select>
                </label>
                <div className={styles.buttonContainer}>
                    <Button type="submit" variant="primary">Add Task</Button>
                    <Button type ="button" variant="secondary"
                    onClick={() => setModalOpen(false)}
                    onKeyDown={() => setModalOpen(false)}>Cancel</Button>
                </div>
             </form>
       </div>
    </div> 
)}</div> );
}

export default TodoModal;