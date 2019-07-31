import React, {useEffect} from 'react'
import axiosWithAuth from "./axiosWithAuth"

export default function Protected() {
    useEffect(() => {
        axiosWithAuth()
    }, [])
    return (
        <div>
            <h1>Access Granted</h1>
        </div>
    )
}
