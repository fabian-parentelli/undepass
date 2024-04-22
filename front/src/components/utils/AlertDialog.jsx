import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({ open, setOpen, message, setOkUpdate }) {

    const handleClose = () => setOpen(false);
    const handleOk = () => setOkUpdate(true);

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {message.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {message.text}
                    </DialogContentText>
                </DialogContent>
                {message.isButton &&
                    <DialogActions>
                        <Button onClick={handleClose}>{message.buttonNo}</Button>
                        <Button onClick={() => { handleClose(); handleOk(); }} autoFocus>
                            {message.buttonYes}
                        </Button>
                    </DialogActions>

                }
            </Dialog>
        </>
    );
}

/*
    const messgae = {
        title: string
        text: string
        isButton: boolean,
        buttonNo: 'volver'
        buttonYes: 'modificar',
    }
*/