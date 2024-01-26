import React , { useState } from 'react';
import styles from './SearchBar.module.css'




export default function SearchBar({onSearch}) {

   const[id , setId]= useState([]);

   const handleChange = (event) =>{
       setId(event.target.value)
   }








   return (
      <div className={styles.divFondo}>
         <div className={styles.centrar}>
         <div className={styles.divInput}>
         <input className={styles.inp} onChange={handleChange} type="search"/>
         </div>
         { 
          <div>
         <button  className={styles.boton} onClick={() => onSearch(id)}>Agregar</button>
         </div>
         }
         </div>
      </div>
   );
}
