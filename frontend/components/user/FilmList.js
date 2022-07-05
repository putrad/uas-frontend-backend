import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Filmlist = () => {
  const [posts, setPosts] = useState([]);
  const apiEndPoint = "http://localhost:5000/users";

  useEffect(() => {
    const getPost = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setPosts(res);
    };
    getPost();
  }, []);

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>judul</th>
            <th>genre</th>
            <th>rating</th>
          </tr>
        </thead>
        <tbody>
         
          <h2>lorem sadsad</h2>
          {posts.map((post, idx) => (
            <tr key={idx}>
              <td>{post.name}</td>
              <td>{post.email}</td>
              <td>{post.gender}</td>
              <td>
                <Link
                  href={`/admin/UbahUser?nama=${post.nama}
                    &email=${post.email}&gender=${post.gender}`}
                >
                  <a>Edit</a>
                </Link>
                <button className="btn btn-primary">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Filmlist;