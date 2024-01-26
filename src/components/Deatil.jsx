import React from "react"

import { useParams , } from "react-router-dom"
import { useState , useEffect} from "react"
import axios from "axios"
import styles from './Detail.module.css'






const Deatil = () => {
    
     const {id} = useParams();

     const [characters , setCharacters] = useState({})


     
     useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacters(data);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         });
         return setCharacters({});
     },[id]

     )





    return(

        <>
        <div className={styles.principal}>
        <div className={styles.primer}>
        <div className={styles.nombre}>{characters.name}</div>
        <div className={styles.div}>STATUS|{characters.status}</div>
        <div className={styles.div}>SPECIES|{characters.species}</div>
        <div className={styles.div}>GENDER|{characters.gender}</div>
        <div className={styles.div}>ORIGIN|{}</div>
        </div>
        <div className={styles.segundo}>
        <img className={styles.image} src={characters.image} alt='' /> 
        </div>
        </div>
        </>
    )
   
    }
export default Deatil