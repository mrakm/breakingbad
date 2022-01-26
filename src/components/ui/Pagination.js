import React from "react";

function Pagination({ postsPerPage , totalPosts, paginate})
{
    const pageNumbers =[]
    for(let i=1 ; i<=Math.ceil(totalPosts/postsPerPage);i++)
    {
        pageNumbers.push(i);
    }

    return(
        <nav>
            <ul className="pagination">
{pageNumbers.map(number => (
    <div>
    <li key={number} className="page-item"></li>
    <a onClick={() => paginate(number)} href="javascript:void(0);" className="page-link">{number}</a>
    </div>
))}
            </ul>
        </nav>
    )
}

export default Pagination;
