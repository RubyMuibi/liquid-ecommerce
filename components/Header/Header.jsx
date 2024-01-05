"use client"
import headerStyles from "./header.module.css"
import fontsStyles from "../../css/fonts.module.css"

import { Icon } from '@iconify/react';

export default function Header () {
  return (
    <>
      <header className={headerStyles.container} >

      <div> 
      <h1 className={fontsStyles.mediumB}> Liquid </h1>
      </div>

       <div className={headerStyles.headerOptions} > 
       <p> ALL </p>
       <p> SHOP SHIRTS </p>
       <p> SHOP PANTS </p>
       <div className={headerStyles.icon}>
           <Icon icon="pepicons-pencil:line-y" color="white" width="20" height="20" />
           <Icon icon="mdi:cart-outline" color="white" width="16" height="16" className={headerStyles.shopIcon} />
       </div>
       </div>

      </header>
    </>
  );
};
