import React, { useState } from 'react';
import firebase from '../firebase'

const AddMessages = () => {
    const [message, setMessage] = useState('');
    const [love, setLove] = useState('');

    function onSubmit(e) {
        e.preventDefault();

        firebase
            .firestore()
            .collection('messages')
            .add({
                message,
                love
            })
            .then(() => {
                setMessage('')
                setLove('')
            })

            e.target[0].value = '';
            e.target[1].value = '';
    }

    function messageOnChange(e) {
        setMessage(e.currentTarget.value)
    }

    function loveOnChange(e) {
        setLove(e.currentTarget.value)
    }
    return (
        <form onSubmit={onSubmit} className="row justify-content-center">
            <div className="col-md-8">
                <label htmlFor="" className="form-label text-left w-100 text-start">Mesaj</label>
                <input type="text" className="form-control" onChange={messageOnChange} placeholder="Örn: Şimdi biz evsiz kalmış çocuklar gibiyiz..." required/>
            </div>
            <div className="col-md-1"> 
                <label htmlFor="" className="form-label text-start w-100">Sevgin</label>
                <input type="number" className="form-control" onChange={loveOnChange} placeholder="100" required/>
            </div>
            <button className="btn btn-light mt-3 w-50 mx-auto">Ekle</button>
        </form>
    )
}

export default AddMessages;