import React, { useState, useEffect } from 'react';
import { sendMessage } from 'utils/sendMessages';
import { Grid, Button, TextField, Box } from '@mui/material';

const expression =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
const regex = new RegExp(expression);

export const Popup = () => {
    const [link, setLink] = useState('');

    const [error, setError] = useState('');

    useEffect(() => {
        const getLink = async () => {
            const link = await sendMessage({ type: 'GET_LINK' });
            if (link.data) {
                setLink(link.data);
            }
        };

        getLink();
    }, []);

    const handleSaveMeetingLink = () => {
        if (!link || !link.match(regex)) {
            setError('Please input valid link');
            return;
        }

        sendMessage({ type: 'SAVE_LINK', data: link });
        window.close();
    };

    const handleChangeLink = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError('');
        setLink(e.target.value);
    };

    return (
        <Box margin={2}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <TextField
                        size="small"
                        variant="outlined"
                        label="Meeting link!"
                        value={link}
                        onChange={handleChangeLink}
                        error={!!error}
                        helperText={error}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" onClick={handleSaveMeetingLink}>
                        Save
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Popup;
