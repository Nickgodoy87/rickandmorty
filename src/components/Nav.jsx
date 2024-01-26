import React from "react";
import SearchBar  from "./SearchBar";
import styles from './Nav.module.css';
import { Link } from "react-router-dom";











function Nav({onSearch}){

    return(
          
         <nav className={styles.divNav}>
            <div className={styles.contBtn}>
            <div className={styles.btn1}>
           <Link to="/about">
            <button>About</button>
           </Link>
           </div>
           <div className={styles.btn2}>
           <Link to="/home">
            <button>Home</button>
           </Link>
           </div>
           </div>
           
           <div className={styles.search}>
           <SearchBar onSearch = {onSearch}/>
           </div>
           </nav>
           
          


    )
    

}


export default Nav