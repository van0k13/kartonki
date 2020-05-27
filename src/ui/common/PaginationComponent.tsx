import React from 'react';
import styles from "../features/uniCardsFeatures/uniCardsDeck/uniCardsDeck.module.css";


interface IProps {
    itemsTotalCount: number,
    pageCount: number,
    onCurrentPageClick: (value: number) => void,
    currentPage: number
}

const Paginator3000: React.FC<IProps> = ({
                                             itemsTotalCount, pageCount,
                                             onCurrentPageClick, currentPage
                                         }) => {
    const pages = [];
    const pagesCount = Math.ceil(itemsTotalCount / pageCount);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={styles.pages}>
            {pages.map(p => {
                return (
                    <span key={p +1 } onClick={() => onCurrentPageClick(p)}
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