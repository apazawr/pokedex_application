import React from 'react';
import cl from './Footer.module.css';
import js from '../../../images/icons/js.svg';
import html from '../../../images/icons/html.svg';
import css from '../../../images/icons/css.svg';
import react from '../../../images/icons/react.svg';


export default function Footer() {
  return (
    <div className={`${cl.footer}`}>
      <img className={`${cl.footer__icon}`} src={html} alt='html'></img>
      <img className={`${cl.footer__icon}`} src={css} alt='css'></img>
      <img className={`${cl.footer__icon}`} src={js} alt='js'></img>
      <img className={`${cl.footer__icon}`} src={react} alt='react'></img>
    </div>
  )
}
