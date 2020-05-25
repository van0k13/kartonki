import React from 'react';
import styles from "../features/uniCardsFeatures/uniCardsDeck/uniCardsDeck.module.css";


interface IProps {
    cardPacksTotalCount: number,
    pageCount:number,
    onCurrentPageClick: (value:number) => void,
    currentPage: number
}

const Paginator3000: React.FC<IProps> = ({cardPacksTotalCount,pageCount,
                                             onCurrentPageClick, currentPage}) => {
    const pages = [];
    const pagesCount = Math.ceil(cardPacksTotalCount / pageCount);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return(
        <div className={styles.pages}>
            {pages.map(p => {
                return (
                    <span onClick={()=>onCurrentPageClick(p)}
                          className={currentPage === p
                              ? styles.selectedPage
                              : styles.spanPage}>{p}
                            </span>
                )
            })}
        </div>
    )
}

export default Paginator3000