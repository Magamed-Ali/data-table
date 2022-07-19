import React from 'react';

function Pagination({cuntriesPerPage, totalCountries, paginate, currentPage}) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalCountries / cuntriesPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <ul className="pagination">
            {
                pageNumbers.map((number, index) => (
                    <li className={`page-item ${number == currentPage ? "active" : ""}`} >
                        <a href="!#" className="page-link" onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </li>
                ))
            }
        </ul>
    );
}

export default Pagination;