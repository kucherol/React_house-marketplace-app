import {useEffect, useState} from 'react';

import {getAuth} from 'firebase/auth';

function Profile() {
    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {

    }, []);

    return user ? <h1>{user.displayName}</h1> : 'Not Logged'
}

export default Profile;