import React from "react";
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import blurredleaves2 from "../data/images/blurredleaves2.jpg";


const PlantCard = ({ plant, onClick }) => {
  return (
    <Card
      className="shadow-lg border-none rounded-xl cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl bg-white/30 backdrop-filter backdrop-blur-lg border border-white/40 overflow-hidden relative"
      onClick={onClick}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
        style={{ backgroundImage: `url(${blurredleaves2})` }}
      />
      <CardHeader
        floated={false}
        className="relative h-56 rounded-t-xl overflow-hidden z-10"
      >
        <img
          alt={plant.name}
          src={plant.imageUrl}
          className="h-full w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </CardHeader>
      <CardBody className="text-center p-4 z-10 relative">
        <Typography variant="h5" color="green" className="font-bold mb-1">
          {plant.name}
        </Typography>
        <Typography variant="subtitle1" color="blue-gray" className="font-normal italic mb-1">
          {plant.scientificName}
        </Typography>
      </CardBody>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white rounded-xl opacity-70 z-0" />
    </Card>
  );
};

export default PlantCard;
