import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const useTable = ({ moviesDb }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get("filter") ?? "";
    const [pageNumber, setPageNumber] = useState(0);
    const [moviesPerPage, setMoviesPerPage] = useState({ select: 10 });
    const firstItemShowedPerPage = pageNumber * moviesPerPage.select;
    const lastItemShowedPerPage = firstItemShowedPerPage + moviesPerPage.select;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMoviesPerPage({
            [name]: parseInt(value)
        })
    }

    const handleFilter = (e) => {
        setSearchParams({ filter: e.target.value })
    }

    const filterMovies = moviesDb.filter((movie) => {
        return (movie.clasificacion.toLowerCase().includes(filter.toLowerCase()) ||
            movie.idioma.toLowerCase().includes(filter.toLowerCase()) ||
            movie.fecha_estreno.toLowerCase().includes(filter.toLowerCase()))
    })

    const pageCount = () => {
        if (!filter) return Math.ceil(moviesDb.length / moviesPerPage.select);
        return Math.ceil(filterMovies.length / moviesPerPage.select);
    }

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    const range = () => {
        if (!filter) return moviesDb.length;
        return filterMovies.length
    }

    return {
        filter,
        pageNumber,
        moviesPerPage,
        firstItemShowedPerPage,
        lastItemShowedPerPage,
        handleChange,
        handleFilter,
        filterMovies,
        pageCount,
        changePage,
        range
    }
}

export default useTable;