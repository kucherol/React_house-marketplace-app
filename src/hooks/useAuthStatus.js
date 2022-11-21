import { useEffect, useState, useRef } from "react";
import { getAuth, onAuthStateChange } from "firebase/auth";

export const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [checkingStatus, setCheckingStatus] = useState(true);
    const isMounted = useRef(true);

    useEffect(() => {
        if (isMounted) {
            const auth = getAuth();
            onAuthStateChange(auth, (user) => {
                if (user) {
                    setLoggedIn(true);
                }
                setCheckingStatus(false);
            })
        }
        return () => {
            isMounted.current = false;
        }
    }, [isMounted])

    return {loggedIn, checkingStatus}
}