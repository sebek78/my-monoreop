import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Fault, Tokens } from './hooksTypes';

const API_URL = 'https://www.strava.com/oauth';
const APP_URL = 'http://localhost:4200';
const CLIENT_ID = `client_id=${process.env['NX_RS_CLIENT_ID']}`;
const CLIENT_SECRET = `client_secret=${process.env['NX_RS_CLIENT_SECRET']}`;
const SCOPE = 'activity:read';

export function useAuthorization() {
    const history = useHistory();
    const [code, setCode] = useState('');

    const { isLoading, error, data, remove } = useQuery<Tokens, Fault>(
        'tokensData',
        () =>
            fetch(
                `${API_URL}/token?${CLIENT_ID}&${CLIENT_SECRET}&code=${code}&grant_type=authorization_code`,
                {
                    method: 'POST',
                }
            ).then((res) => res.json()),

        {
            enabled: !!code,
        }
    );

    const handleLogin = () => {
        window.location.href = `${API_URL}/authorize?${CLIENT_ID}&response_type=code&redirect_uri=${APP_URL}&approval_prompt=force&scope=${SCOPE}`;
    };

    const handleLogout = () => {
        fetch(`${API_URL}/deauthorize?access_token=${data?.access_token}`, {
            method: 'POST',
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                if (res.access_token) {
                    setCode('');
                    remove();
                    window.location.href = APP_URL;
                }
            });
    };

    useEffect(() => {
        if (!code && window.location.href.includes('code')) {
            const url = new URL(window.location.href);
            const searchParams = new URLSearchParams(url.search);
            const redirectCode = searchParams.get('code') || '';
            const receivedScope = searchParams.get('scope') || '';
            console.log(`Scope: ${receivedScope}`);
            if (redirectCode) setCode(redirectCode);
            history.push('/');
        }
    }, [code, history]);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return {
        isLoading,
        error,
        data,
        handleLogin,
        handleLogout,
    };
}
