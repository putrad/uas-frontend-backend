import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";

const Updatefilm = () => {
    const [judul, setjudul] = useState("");
    const [genre, setgenre] = useState("");
    const [rating, setrating] = useState("");
    const router = useRouter();

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                judul,
                genre,
                rating
            });
            router.push("/")
        }catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">
                 Filmlist
                </h5>
                <form onSubmit={saveUser}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Masukkan judul"
                      value={name}
                      onChange={(e)=> setjudul(e.target.value)}
                    />
                    <label htmlFor="floatingInput">judul</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="genre"
                      className="form-control"
                      id="floatingInput"
                      placeholder="genre"
                      value={email}
                      onChange={(e)=> setgenre(e.target.value)}
                    />
                    <label htmlFor="floatingInput">genre</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="rating"
                      value={gender}
                      onChange={(e)=> setrating(e.target.value)}
                    />
                    <label htmlFor="floatingInput">rating</label>
                  </div>
                  <div className="d-grid">
                    <button
                      className="btn btn-primary btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      Update
                    </button>
                  </div>
                  <hr className="my-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updatefilm;
