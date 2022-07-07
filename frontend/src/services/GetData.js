import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import { http } from "../helpers/http";

const GetData = () => {
    const [moviesDb, setMoviesDb] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        http().get(`/movies`)
            .then((res) => {
                if (res.estado) {
                    if (res.movies) {
                        setMoviesDb(res.movies);
                    } else {
                        toast.error(
                            "Error, no hay conexión con la Base de Datos!!!",
                            { theme: "colored", autoClose: false, toastId: "serverError" });
                    }
                } else {
                    toast.error(
                        "Error, no hay conexión con el servidor!!!",
                        { theme: "colored", autoClose: false, toastId: "serverError" });
                }
                setLoading(false);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        moviesDb,
        setMoviesDb,
        loading,
        setLoading
    }
}

export default GetData;