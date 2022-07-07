import { TableTop, TableRows, TableBottom } from "./";
import useTable from "../hooks/useTable";
import { Crud } from "../services/Crud";

const Table = ({ moviesDb, setMoviesDb, loader, setMovieToEdit }) => {
    const { deleteMovie } = Crud(moviesDb, setMoviesDb)

    const { filter, pageNumber, moviesPerPage,
        firstItemShowedPerPage, lastItemShowedPerPage,
        handleChange, handleFilter,
        filterMovies,
        pageCount, changePage, range
    } = useTable({ moviesDb })

    const tableHeaders = [
        {
            id: 1,
            label: "#",
            className: "align-middle"
        },
        {
            id: 2,
            label: "Nombre",
            className: "align-middle"
        },
        {
            id: 3,
            label: "Clasificación",
            className: "align-middle"
        },
        {
            id: 4,
            label: "Fecha de Estreno",
            className: "align-middle text-nowrap"
        },
        {
            id: 5,
            label: ""
        },
    ]

    return (
        <div className="container">
            <TableTop
                moviesPerPage={moviesPerPage}
                handleChange={handleChange}
                moviesDb={moviesDb}
                filter={filter}
                handleFilter={handleFilter}
                range={range}
            />
            <div className="table-responsive-md">
                <table className="table table-hover text-center">
                    <thead>
                        <tr>
                            {tableHeaders.map((header) => (
                                <th key={header.id} className={header.className}>{header.label}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {moviesDb.length > 0 ?
                            <>
                                {filterMovies.slice(firstItemShowedPerPage, lastItemShowedPerPage).map((movie, index) => (
                                    <TableRows
                                        key={movie.id}
                                        nro_registro={index + 1 + firstItemShowedPerPage}
                                        movie={movie}
                                        setMovieToEdit={setMovieToEdit}
                                        deleteMovie={deleteMovie}
                                    />
                                ))}
                            </>
                            : (
                                <tr>
                                    <td colSpan={6}>
                                        <h2 className="text-center m-5">
                                            {loader}{!loader && "¡No hay información!"}
                                        </h2>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <TableBottom
                firstItemShowedPerPage={firstItemShowedPerPage}
                pageNumber={pageNumber}
                pageCount={pageCount}
                range={range}
                lastItemShowedPerPage={lastItemShowedPerPage}
                changePage={changePage}
            />
        </div >
    )
}

export default Table