import ReactPaginate from "react-paginate";

const TableBottom = ({ firstItemShowedPerPage, pageNumber, pageCount,
    range, lastItemShowedPerPage, changePage }) => {
        
    return (
        <div className="dataTable-bottom">
            <div className="d-none d-sm-block mt-4">
                <span className="table-labels-bottom">
                    Mostrando {firstItemShowedPerPage + 1} a {pageNumber + 1 === pageCount() ?
                        range()
                        :
                        lastItemShowedPerPage} de {range()}
                </span>
            </div>
            <nav className="dataTable-pagination mt-3">
                <ReactPaginate
                    breakLabel="..."
                    previousLabel={<i className="fa-solid fa-chevron-left" />}
                    nextLabel={<i className="fa-solid fa-chevron-right" />}
                    marginPagesDisplayed={0}
                    pageRangeDisplayed={5}
                    pageCount={pageCount()}
                    onPageChange={changePage}
                    previousLinkClassName="paginate"
                    nextLinkClassName="paginate"
                    activeClassName="active"
                />
            </nav>
        </div>
    )
}

export default TableBottom;