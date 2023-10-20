import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: 400 }}>Welcome Kapil Tanwar</h1>
      <Card sx={{ maxWidth: 600 }} className="shadow-sm">
        <CardContent>
          <img src="/profile.png" style={{ width: 50 }} alt="profile" />
          <h3 className="mt-3 mb-3">
            Name : <span>Kapil Tanwar</span>
          </h3>
          <p>
            DOB : <span>24-08-2000</span>
          </p>
          <p>
            <EmailIcon /> Email : <span>kapilt749@gmail.com</span>
          </p>
          <p>
            <LocationOnIcon /> Address : <span>Faridabad</span>
          </p>
          <Link to="/edit/:id" className="btn btn-primary">
            <CreateIcon />
          </Link>
          <button className="btn btn-primary ms-2">
          <i class="fa-solid fa-upload"></i>
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
