import { useNavigate } from 'react-router-dom';
import { ToolTip } from './';

const TableRows = ({ movie, nro_registro, setMovieToEdit, deleteMovie }) => {
    let { id, nombre, clasificacion, fecha_estreno } = movie || {};
    const navigate = useNavigate()

    return (
        <tr>
            <th className="align-middle">{nro_registro}</th>
            <td className="align-middle">{nombre}</td>
            <td className="align-middle">{clasificacion}</td>
            <td className="align-middle">{fecha_estreno}</td>
            <td className="align-middle text-nowrap">
                <ToolTip place="top" msg="Editar">
                    <button
                        data-tip data-for="toolTipEdit"
                        className="btn btn-success m-1"
                        onClick={() => {
                            setMovieToEdit(movie)
                            navigate(`edit/${id}`)
                        }}
                    >
                        <i className="fa-solid fa-pen" />
                    </button>
                </ToolTip>
                <ToolTip place="top" msg="Eliminar">
                    <button
                        data-tip data-for="toolTipDelete"
                        className="btn btn-danger"
                        onClick={() => deleteMovie(id, nombre)}
                    >
                        <i className="fa-solid fa-trash-can" />
                    </button>
                </ToolTip>
            </td>
        </tr>
    );
};

export default TableRows;
