import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({ info ,pageNumber, setPageNumber }) => {
    return ( <ReactPaginate
      className="pagination justify-content-center my-4 gap-4"
      nextLabel="Next"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      previousLabel="Prev"
      previousclassName="btn btn-primary "
      nextclassName="btn btn-primary "
      activeclassName="active"
      
      pageCount={info?.pages}
      onPageChange={(data)=> {
        setPageNumber(data.selected+1);
      }}
      pageclassName="page-item"
      pageLinkclassName="page-link"
    />);
}

export default Pagination
