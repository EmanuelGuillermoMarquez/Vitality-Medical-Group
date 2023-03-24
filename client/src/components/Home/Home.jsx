import React from 'react';
import Header from '../Header/Header';
import Cards from '../HomeCards/Cards'
import ContainerNews from '../News/ContainerNews2';
import styles from "./Home.module.css";


export default function Home() {

// Aca va la logica

  return (
    
    <div className={styles.container__home}>

    <Header/>

    <Cards/>

    <ContainerNews />


    </div>
  )
}
