import { useState } from "react"
import axios from 'axios'
import { useRouter } from "next/router";

const addfilm = () => {
    const [judul, setJudul] = useState('');
    const [genre, setgenre] = useState('');
    const [rating, setrating] = useState('');
   
    
    async function submitHandler(e) {
        e.preventDefault()
        try {
            axios
                .post("http://localhost:5000/", {
                    nim,
                    nama,
                    angkatan,
                    
                })
                .then(response => {
                    console.log(response);
                });
            alert("Penambahan Data Sukses")
            //clearInput()
        } catch (e) {
            throw Error(e.message)
        }
    }

    const clearInput = () => {
        setJudul('')
        setgenre('')
        setrating('')
        
    }

    return (
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 className="w-75 text-center">Input Mahasiswa</h1>
                    <div className="w-75">
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="nim"
                                type="text"
                                placeholder="NIM"
                                value={nim}
                                onChange={(e) => setJudul(e.target.value)}
                                /* onBlur = {getNimAndProdi} */
                            />
                            <label htmlFor="nim">NIM</label>
                        </div>
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="nama"
                                type="text"
                                placeholder="nama"
                                value={nama}
                                onChange={(e) => setgenre(e.target.value)}
                            />
                            <label htmlFor="nim">Nama</label>
                        </div>
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="angkatan"
                                type="text"
                                placeholder="angkatan"
                                value={angkatan}
                                onChange={(e) => setrating(e.target.value)}
                            />
                            <label htmlFor="nim">Angkatan</label>
                        </div>

                    </div>
                    <div className="w-75 d-flex flex-row-reverse">
                        <button
                            className="btn btn-primary"
                            type="submit"
                        >
                            Simpan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default addfilm;pn