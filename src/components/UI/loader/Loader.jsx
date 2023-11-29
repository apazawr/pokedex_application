import React from 'react';
import loader1 from '../../../images/loaders/loader1.gif';
import loader2 from '../../../images/loaders/loader2.gif';
import loader3 from '../../../images/loaders/loader3.gif';
import loader4 from '../../../images/loaders/loader4.gif';
import loader5 from '../../../images/loaders/loader5.gif';
import loader6 from '../../../images/loaders/loader6.gif';
import cl from './Loader.module.css';

const loaderArr = [loader1, loader2, loader3, loader4, loader5, loader6];

const Loader = () => {
  
  const randomLoader = loaderArr[Math.floor(Math.random() * loaderArr.length)];

  return (
    <div className={cl.loader}>
      <img src={randomLoader} alt="loader" style={{alignItems: 'center', width: '100px', height: '100px'}}/>
    </div>
  );
}

export default Loader;
