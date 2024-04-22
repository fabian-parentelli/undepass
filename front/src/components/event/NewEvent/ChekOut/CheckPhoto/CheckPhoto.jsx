import './chekPhoto.scss';
import PreSetEvent from '../../../../utils/PreSetEvent/PreSetEvent';
import { useEffect, useState } from 'react';

const ChekPhoto = ({ values }) => {

    const [picture, setPicture] = useState(null);
    const [isFlyer, setIsFlyer] = useState(null);

    useEffect(() => {
        if (values.photo.isFlyer) {
            setPicture(values.photo.img);
            setIsFlyer('isFlyer');
        } else {
            setPicture(values.photo.img);
            setIsFlyer('isPreset');
        };
    }, [values.photo]);

    return (
        <div className='chekPhoto'>
            {isFlyer === 'isFlyer' && picture && <img src={picture} alt="flyer" />}
            {isFlyer === 'isPreset' && picture && <PreSetEvent comp={picture} data={values} />}
        </div>
    );
};

export default ChekPhoto;