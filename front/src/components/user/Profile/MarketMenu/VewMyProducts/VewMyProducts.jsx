import './vewMayProducts.scss';

const VewMayProducts = ({ values }) => {

    return (
        <div className="viewMyProducts">
            <table>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Stock</th>
                        <th>Acciónes</th>
                    </tr>
                </thead>
                <tbody>
                    {values && values.map((prod) => (
                        <tr key={prod._id}>
                            <td>
                                <div className="contImg">
                                    <img className="imgAvat" src={prod.img[0].imgUrl} alt={prod.name} />
                                    <div className="vAcontImg">
                                        <img src={prod.img[0].imgUrl} alt={prod.name} />
                                    </div>
                                </div>
                            </td>
                            <td>{prod.name}</td>
                            <td>{prod.quantity}</td>
                            <td>
                                <div className="btnActions">
                                    <button>Ver</button>
                                    <button>Modificar</button>
                                    <button>imagenes</button>
                                    <button>Act/des</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VewMayProducts;