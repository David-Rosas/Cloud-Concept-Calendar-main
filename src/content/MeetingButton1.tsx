import React, { useState } from 'react';
import jquery from 'jquery';

import Button from '@mui/material/Button';
import { sendMessage } from 'utils/sendMessages';
import { Snackbar, Alert } from '@mui/material';
import { asyncTimeOut } from 'utils/asyncTimeout';

const MeetingButton1 = () => {
    const [open, setOpen] = useState(false);

    const handleAddMeetingLink = async () => {
        const link = await sendMessage({ type: 'GET_LINK' });

        if (!link?.data) {
            setOpen(true);
            return;
        }

        const descriptionButton = jquery('.aZpV8b.iWO5td .K0f0Xc button.bHjvad.bnPQpd.sIcmgc');
        descriptionButton.trigger('click');

        await asyncTimeOut(1000);

        // Inserting text in description.
        const descriptionEle = jquery('.aZpV8b.iWO5td .K0f0Xc .T2Ybvb.KRoqRc.editable');

        (descriptionEle?.[0] as any)?.focus();
        for (const type of ['keydown', 'keypress', 'keyup'])
            (descriptionEle?.[0] as any)?.dispatchEvent(new KeyboardEvent(type));
        document.execCommand(
            'insertHTML',
            false,
            `<a href="${link.data}" __is_owner="true">Meeting Link</a><p><br>──────────<br><br>Inviting you to a scheduled meeting.<br><br>Join Meeting<br>${link.data}<br><br>──────────</p>`,
        );
    };

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'end' }}>
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

export default MeetingButton1;
