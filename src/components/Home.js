import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useRef, useState } from "react";

const Home = ({ data }) => {
  const imgRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImageClick = () => {
    imgRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
  };

  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2">
          <Link to="/register" className="btn btn-primary">
            Add data
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">Roll no.</th>
              <th scope="col">Name</th>
              <th scope="col">E-mail</th>
              <th scope="col">DOB</th>
              <th scope="col">Residence Address</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.email}</td>
                <td>{item.dob}</td>
                <td>{item.add}</td>
                <td className="d-flex justify-content-between">
                  <button
                    type="button"
                    class="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    More
                  </button>

                  <Link to="/edit/:id" className="btn btn-primary">
                    <CreateIcon />
                  </Link>
                  <Link to="" className="btn btn-danger">
                    <DeleteIcon />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">
                  Dialog Box
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="container mt-3">
                  {/* modal details */}
                  <Card sx={{ maxWidth: 600 }} className="shadow-sm">
                    <CardContent>
                      {image ? (
                        <img src={URL.createObjectURL(image)} alt="" />
                      ) : (
                        <img
                          onClick={handleImageClick}
                          src="/profile.png"
                          style={{ width: 50 }}
                          alt="profile"
                        />
                      )}

                      <br />

                      <button
                        className="btn btn-warning ms-2 mt-3 d-block"
                        onClick={handleImageClick}
                      >
                        <input
                          type="file"
                          ref={imgRef}
                          onChange={handleImageChange}
                          style={{ display: "none" }}
                        />
                        Image
                        <i class="fa-solid fa-upload"></i>
                      </button>
                      <button className="btn btn-primary ms-2 mt-3">
                        <i class="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button className="btn btn-info ms-2 mt-3 d-inline">
                      <input
                          type="file"                         
                          
                        />
                        PDF
                        <i class="fa-solid fa-upload"></i>
                      </button>
                      
                    </CardContent>
                  </Card>
                  {/* modal details end */}
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
