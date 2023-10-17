import React, { useState } from 'react';
import jquery from 'jquery';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import Button from '@mui/material/Button';
import { sendMessage } from 'utils/sendMessages';
import { Snackbar, Alert } from '@mui/material';

const MeetingButton = () => {
    const [open, setOpen] = useState(false);

    const handleAddMeetingLink = async () => {
        const link = await sendMessage({ type: 'GET_LINK' });

        if (!link?.data) {
            setOpen(true);
            return;
        }
        // Inserting text in description.
        const descriptionEle = jquery('.ewPPR .T2Ybvb.KRoqRc.editable');

        descriptionEle.append(`<a href="${link.data}" __is_owner="true">Meeting Link</a>`);

        descriptionEle.append(
            `<p><br>──────────<br><br>Inviting you to a scheduled meeting.<br><br>Join Meeting<br>${link.data}<br><br>──────────</p>`,
        );
    };

    return (
        <>
            <div aria-hidden="true" className="tzcF6">
                <VideoCameraFrontIcon color="primary" />
            </div>{' '}
            <div className="j3nyw PxPKzc">
                <Button
                    color="primary"
                    variant="contained"
                    onClick={handleAddMeetingLink}
                    sx={{ textTransform: 'none' }}
                >
                    Add my meeting link
                </Button>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
                <Alert variant="filled" severity="error">
                    Please configure a meeting link in the pop up page
                </Alert>
            </Snackbar>
        </>
    );
};

export default MeetingButton;
