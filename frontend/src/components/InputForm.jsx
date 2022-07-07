const InputForm = ({ id, name, label, type, className, onChange, ...inputProps }) => {

    const idioma = ["Alemán", "Español", "Francés", "Inglés", "Italiano"]
    const clasificacion = ["Todo público", "+7 años", "+12 años", "+15 años", "+18 años"]

    return (
        <div className={className}>
            <label htmlFor={id} className="form-label blue-label">
                {label}
            </label>
            {type === "select"
                ?
                <>
                    <select
                        {...inputProps}
                        id={id}
                        name={name}
                        className="form-select"
                        onChange={onChange}
                    >
                        {label === "Idioma" ?
                            <>
                                <option defaultValue>Seleccionar</option>
                                {idioma.map((item) => (
                                    <option key={item} value={item}>{item}</option>
                                ))}
                            </>
                            :
                            <>
                                <option defaultValue>Seleccionar</option>
                                {clasificacion.map((item) => (
                                    <option key={item} value={item}>{item}</option>
                                ))}
                            </>
                        }
                    </select>
                </>
                :
                <>
                    <div className="input-group has-validation">
                        <input
                            {...inputProps}
                            id={id}
                            type={type}
                            name={name}
                            className="form-control"
                            onChange={onChange}
                        />
                    </div>
                </>
            }
        </div>
    )
}

export default InputForm