import './generalHelp.scss';
import NewEventHelp from './NewEventHelp/NewEventHelp';
import ContactUsHelp from './ContactUsHelp/ContactUsHelp';

const GeneralHelp = () => {

    return (
        <div className='generalHelp'>
            <div className='userHelpHeader'>
                <h4 id='generalHelp'>General</h4>
            </div>
            <ContactUsHelp />
            <NewEventHelp />
        </div>
    );
};

export default GeneralHelp;