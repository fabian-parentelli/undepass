import './socialNetworks.scss';
import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

const SocialNetworks = ({ setValues }) => {
    const [checkedItems, setCheckedItems] = useState({});
    const [showURLInputs, setShowURLInputs] = useState({});

    const handleChange = (event, network) => {
        const isChecked = event.target.checked;
        setCheckedItems(prevState => ({
            ...prevState,
            [network]: isChecked
        }));
        setShowURLInputs(prevState => ({
            ...prevState,
            [network]: isChecked 
        }));
        if (isChecked) {
            setValues(prevValues => ({
                ...prevValues,
                socialNetworks: {
                    ...prevValues.socialNetworks,
                    [network]: ''
                }
            }));
        } else {
            setValues(prevValues => ({
                ...prevValues,
                socialNetworks: {
                    ...prevValues.socialNetworks,
                    [network]: ''
                }
            }));
        }
    };

    const handleURLChange = (event, network) => {
        const { value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            socialNetworks: {
                ...prevValues.socialNetworks,
                [network]: value 
            }
        }));
    };

    return (
        <div className='socialNetworks'>
            <div className='socialNetCont'>
                <div className='socialNetDiv'>
                    <Checkbox
                        checked={checkedItems.facebook || false}
                        onChange={(event) => handleChange(event, 'facebook')}
                        inputProps={{ 'aria-label': 'Checkbox demo' }}
                    />
                    Facebook
                </div>
                {showURLInputs.facebook &&
                    <input
                        type="text"
                        placeholder="URL de Facebook"
                        onChange={(event) => handleURLChange(event, 'facebook')}
                    />
                }
            </div>
            <div className='socialNetCont'>
                <div className='socialNetDiv'>
                    <Checkbox
                        checked={checkedItems.instagram || false}
                        onChange={(event) => handleChange(event, 'instagram')}
                        inputProps={{ 'aria-label': 'Checkbox demo' }}
                    />
                    Instagram
                </div>
                {showURLInputs.instagram &&
                    <input
                        type="text"
                        placeholder="URL de Instagram"
                        onChange={(event) => handleURLChange(event, 'instagram')}
                    />
                }
            </div>
            <div className='socialNetCont'>
                <div className='socialNetDiv'>
                    <Checkbox
                        checked={checkedItems.youtube || false}
                        onChange={(event) => handleChange(event, 'youtube')}
                        inputProps={{ 'aria-label': 'Checkbox demo' }}
                    />
                    YouTube
                </div>
                {showURLInputs.youtube &&
                    <input
                        type="text"
                        placeholder="URL de YouTube"
                        onChange={(event) => handleURLChange(event, 'youtube')}
                    />
                }
            </div>
            <div className='socialNetCont'>
                <div className='socialNetDiv'>
                    <Checkbox
                        checked={checkedItems.spotify || false}
                        onChange={(event) => handleChange(event, 'spotify')}
                        inputProps={{ 'aria-label': 'Checkbox demo' }}
                    />
                    Spotify
                </div>
                {showURLInputs.spotify &&
                    <input
                        type="text"
                        placeholder="URL de Spotify"
                        onChange={(event) => handleURLChange(event, 'spotify')}
                    />
                }
            </div>
            <div className='socialNetCont'>
                <div className='socialNetDiv'>
                    <Checkbox
                        checked={checkedItems.twitter || false}
                        onChange={(event) => handleChange(event, 'twitter')}
                        inputProps={{ 'aria-label': 'Checkbox demo' }}
                    />
                    X - Twitter
                </div>
                {showURLInputs.twitter &&
                    <input
                        type="text"
                        placeholder="URL de X - Twitter"
                        onChange={(event) => handleURLChange(event, 'twitter')}
                    />
                }
            </div>
            <div className='socialNetCont'>
                <div className='socialNetDiv'>
                    <Checkbox
                        checked={checkedItems.tiktok || false}
                        onChange={(event) => handleChange(event, 'tiktok')}
                        inputProps={{ 'aria-label': 'Checkbox demo' }}
                    />
                    Tik Tok
                </div>
                {showURLInputs.tiktok &&
                    <input
                        type="text"
                        placeholder="URL de Tik Tok"
                        onChange={(event) => handleURLChange(event, 'tiktok')}
                    />
                }
            </div>
        </div>
    );
};

export default SocialNetworks;