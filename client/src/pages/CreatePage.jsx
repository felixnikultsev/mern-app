import React from 'react';
import { useHttp } from '../hooks/http.hook';
import AuthContext from '../context/AuthContext';
import { useHistory } from 'react-router-dom';

function CreatePage() {
    const auth = React.useContext(AuthContext);
    const history = useHistory();
    const { request } = useHttp();
    const [link, setLink] = React.useState('');

    const pressHandler = async (event) => {
        if (event.key === 'Enter') {
            try {
                const data = await request(
                    '/api/link/generate',
                    'POST',
                    { from: link },
                    {
                        Authorization: `Bearer ${auth.token}`,
                    },
                );
                history.push(`/detail/${data.link._id}`);
            } catch (e) {}
        }
    };

    React.useEffect(() => {
        window.M.updateTextFields();
    }, []);

    return (
        <div className="row create-input">
            <div className="col s8 offset-s2">
                <div className="input-field">
                    <input
                        placeholder="Ссылка"
                        id="link"
                        type="text"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        onKeyPress={pressHandler}
                    />
                    <label htmlFor="link">Вставьте ссылку</label>
                </div>
            </div>
        </div>
    );
}

export default CreatePage;
