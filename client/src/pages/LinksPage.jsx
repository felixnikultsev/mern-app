import React from 'react';
import AuthContext from '../context/AuthContext';
import Loader from '../components/Loader';
import LinksList from '../components/LinksList';
import { useHttp } from '../hooks/http.hook';

function LinksPage() {
    const { token } = React.useContext(AuthContext);
    const { request, loading } = useHttp();
    const [links, setLinks] = React.useState([]);

    const fetchLinks = React.useCallback(async () => {
        try {
            const fetched = await request('/api/link', 'GET', null, {
                Authorization: `Bearer ${token}`,
            });
            setLinks(fetched);
        } catch (e) {}
    }, [token, request]);

    React.useEffect(() => {
        fetchLinks();
    }, [fetchLinks]);

    if (loading) {
        return <Loader />;
    }

    return <>{!loading && <LinksList links={links} />}</>;
}

export default LinksPage;
