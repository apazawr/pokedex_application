import React, { useContext} from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import { getPagesArray } from '../../../utils/pages';
import MyButton from '../../MyButton';
import cl from './pagination.module.css';

export default function Pagination({ totalPages, currentPage, setCurrentPage}) {

  const { theme } = useContext(ThemeContext);

  const getVisiblePages = () => {
    const pagesArr = getPagesArray(totalPages);
    const visiblePages = [];
    const nextPages = '>';
    const prevPages = '<';

    if (totalPages <= 7) {
      return pagesArr;
    }

    if (currentPage <= 3) {
      visiblePages.push(...pagesArr.slice(0, 5), nextPages, totalPages);
    } else if (currentPage >= totalPages - 2) {
      visiblePages.push(1, prevPages, ...pagesArr.slice(-5));
    } else {
      visiblePages.push(
        1,
        prevPages,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        nextPages,
        totalPages
      );
    }

    return visiblePages;
  };

  const goToPage = (p) => {
    if (setCurrentPage) {
      setCurrentPage(p);
    }
  };

  const goToPrev = () => {
    let newPage = currentPage - 2;
    if (currentPage >= totalPages - 4) {
      newPage = totalPages - 6;
    }
    if (newPage >= 1) {
      goToPage(newPage);
    }
  };

  const goToNext = () => {
    let newPage = currentPage + 2;
    if (currentPage <= 5) {
      newPage = 7;
    }
    if (newPage <= totalPages) {
      goToPage(newPage);
    }
  };

  const visiblePages = getVisiblePages();

  return (
    <div className={`${cl.pagination} nes-container is-rounded ${theme === 'light' ? '' : 'is-dark'}`}>
      {visiblePages.length === 0 ? (
        <MyButton baseCl={'is-error'}>
          {'-'}
        </MyButton>
      ):(
        visiblePages.map((p, index) => {
          if (typeof p === 'number') {
            return (
              <MyButton
                key={p}
                baseCl={p === currentPage ? 'is-success' : 'is-warning'}
                onClick={() => goToPage(p)}
                style={theme === 'is-dark' && p === currentPage ? { background: '#adafbc' } : null}
              >
                {p}
              </MyButton>
            );
          }else{
            if (index === 1) {
              return (
                <MyButton
                  key={index + p}
                  baseCl='is-warning'
                  onClick={() => goToPrev()}
                >
                  {p}
                </MyButton>
              );
            }else{
              return (
                <MyButton
                  key={index + p}
                  baseCl='is-warning'
                  onClick={() => goToNext()}
                >
                  {p}
                </MyButton>
              );
            }
          }
        })
      )}
    </div>
  );
}
