import React, { useEffect } from 'react'
import Swal from 'sweetalert2';

const ShowError = ({ error, setError, success, setSuccess }) => {
    useEffect(() => {
        if (error || success) {
            Swal.fire({
                icon: error ? "error" : "success",
                title: error ? "Oops..." : "Congratulations",
                text: error ? error : success
                // footer: '<a href="#">Why do I have this issue?</a>'
            });
        }

    }, [error, success])
    // setError("")
    setSuccess("")
    setError("")
    return (
        <>

        </>
    )
}

export default ShowError