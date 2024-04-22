import ContactUsHelp from './ContactUsHelp/ContactUsHelp';
import NewEventHelp from './NewEventHelp/NewEventHelp';
import './generalHelp.scss';

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