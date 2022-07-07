import { useRef } from "react";
import { ToolTip } from "./";

const TableTop = ({ moviesPerPage, handleChange, moviesDb, filter, handleFilter, range }) => {
    const selectRef = useRef();

    return (
        <div className="dataTable-top mb-2">
            <div className="col-4 col-sm-6 col-md-4">
                <select name="select" ref={selectRef} className="dataTable-selector"
                    value={moviesPerPage.select} onChange={handleChange}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value={moviesDb.length}>All</option>
                </select>
                <label className="table-labels-top"> Películas por página</label>
            </div>
            <div className="col-7 col-sm-6 col-lg-4">
                <ToolTip place="topLeft"
                    msg={
                        <span>
                            Filtrar por <em>Clasificación</em>, <em>Idioma</em> o <em>Fecha de Estreno</em>
                        </span>}
                >
                    <input
                        className="col-12 col-sm-7 col-md-7 col-lg-8 dataTable-input"
                        placeholder="Filtrar..." type="text" value={filter}
                        onChange={handleFilter}
                    />
                </ToolTip>
                <label className="table-labels-top">
                    {range()} {range() === 1 ? "Pelicula" : "Películas"}
                </label>
            </div>
        </div>
    )
}

export default TableTop;