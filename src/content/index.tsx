/* global document */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { runtime } from 'webextension-polyfill';
import MessageListener from './messageListener';
import jquery from 'jquery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { enUS } from '@mui/material/locale';

import MeetingButton from './MeetingButton';
import MeetingButton1 from './MeetingButton1';

// import "./content.css";

runtime.onMessage.addListener(MessageListener);

let observer: MutationObserver;

(() => {
    jquery(() => {
        observer = new MutationObserver(onLoadedContent);
        observer.observe(document.body as any, { subtree: true, childList: true });
    });
})();

const theme = createTheme(
    {
        palette: {
            primary: {
                main: '#1b73e8',
            },
        },
    },
    enUS,
);

export const onLoadedContent = (mutations_list: MutationRecord[]) => {
    mutations_list.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (added_node) {
            //@ts-ignore
            if (added_node?.className === 'Xro3Db-nUpftc') {
                if (!(added_node as any)?.querySelector('.ewPPR')) {
                    return;
                }
                setTimeout(renderMeetingLinkButton, 500);
            }
            //@ts-ignore
            if (added_node?.className === 'aZpV8b iWO5td') {
                console.log(
                    'ASDASFADSF',
                    (added_node as any)?.className,
                    !(added_node as any)?.querySelector('.K0f0Xc'),
                );
                if (!(added_node as any)?.querySelector('.K0f0Xc')) {
                    return;
                }
                setTimeout(renderMeetingAddButton, 500);
            }
        });
    });
};

const renderMeetingLinkButton = () => {
    const app = document.createElement('div');

    app.id = 'my-extension-root';

    app.className = 'FrSOzf';

    console.log(jquery('.ewPPR>.FrSOzf:nth-child(1)'));

    jquery(app).insertAfter('.ewPPR>.FrSOzf:nth-child(1)');
    const root = ReactDOM.createRoot(app);
    root.render(
        <ThemeProvider theme={theme}>
            <MeetingButton />
        </ThemeProvider>,
    );
};

const renderMeetingAddButton = () => {
    const app = document.createElement('div');

    app.id = 'my-extension-root';

    jquery('.aZpV8b.iWO5td .VfPpkd-dgl2Hf-ppHlrf-sM5MNb').last().append(app);

    const root = ReactDOM.createRoot(app);
    root.render(
        <ThemeProvider theme={theme}>
            <MeetingButton1 />
        </ThemeProvider>,
    );
};
