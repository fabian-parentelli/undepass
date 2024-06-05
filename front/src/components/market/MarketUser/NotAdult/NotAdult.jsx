import './notAdult.scss';

const NotAdult = () => {

    return (
        <div className='notAdult'>
            <div>
                <h2>Lo siento pero debes de ser mayor de 18 años.</h2>
                <p>
                    Para poder publicar artículos debes de ser mayor de 18 años.<br />
                    Para poder hacerte los pagos de los productos vendidos debes tener una cuenta asociada a tu perfil.<br/>
                    Por motivos de seguridad solo permitímos perfiles adultos con cuentas asociadas bancarias o de billeteras digitales
                </p>
            </div>
        </div>
    );
};

export default NotAdult;