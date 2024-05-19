import './socialMedia.scss';
import EmailIcon from '@mui/icons-material/Email';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const SocialMedia = ({ values }) => {

    return (
        <>
            {values &&
                <div className='socialMedia'>
                    {values.email &&
                        <div className='socialMediaData'>
                            <EmailIcon />
                            <p>{values.email}</p>
                        </div>
                    }
                    <div className='socialMediaData'>
                        <RoomIcon />
                        <p>{values.location.city} - {values.location.province}</p>
                    </div>
                    {values.phone &&
                        <div className='socialMediaData'>
                            <PhoneIphoneIcon />
                            <p>{values.phone}</p>
                        </div>
                    }
                    {values.socialNetworks &&
                        <div className='socialMediaIcon'>
                            {values.socialNetworks.facebook &&
                                <a href={values.socialNetworks.facebook} target="_blank" rel="noopener noreferrer">
                                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="facebook-new" />
                                </a>
                            }

                            {values.socialNetworks.instagram &&
                                <a href={values.socialNetworks.instagram} target="_blank" rel="noopener noreferrer">
                                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/instagram-new--v1.png" alt="instagram-new--v1"/>
                                </a>
                            }
                            
                            {values.socialNetworks.spotify &&
                                <a href={values.socialNetworks.spotify} target="_blank" rel="noopener noreferrer">
                                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/spotify.png" alt="spotify"/>
                                </a>
                            }
                            
                            {values.socialNetworks.tiktok &&
                                <a href={values.socialNetworks.tiktok} target="_blank" rel="noopener noreferrer">
                                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/tiktok--v1.png" alt="tiktok--v1"/>
                                </a>
                            }
                            
                            {values.socialNetworks.twitter &&
                                <a href={values.socialNetworks.twitter} target="_blank" rel="noopener noreferrer">
                                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/x-coordinate.png" alt="x-coordinate"/>
                                </a>
                            }
                            
                            {values.socialNetworks.youtube &&
                                <a href={values.socialNetworks.youtube} target="_blank" rel="noopener noreferrer">
                                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/youtube-squared.png" alt="youtube-squared"/>
                                </a>
                            }
                        </div>
                    }
                </div>
            }
        </>
    );
};

export default SocialMedia;