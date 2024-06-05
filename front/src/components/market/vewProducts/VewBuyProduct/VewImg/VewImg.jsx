import './vewImg.scss';

const VewImg = ({ img }) => {

    return (
        <div className='vewImg'>
            {img &&
                <img src={img.imgUrl} alt="" />
            }
        </div>
    );
};

export default VewImg;