import React from "react";
import { useNavigate } from "react-router-dom";
import { plantsData } from "@/data/plantsData";
import { PageTitle, Footer } from "@/widgets/layout";
import PlantCard from "@/components/PlantCard";
import { Typography } from "@material-tailwind/react";

export function PlantsPage() {
  const navigate = useNavigate();

  const handleCardClick = (plant) => {
    const plantName = plant.name.toLowerCase().replace(/ /g, "-");
    navigate(`/plants/${plantName}`);
  };

  return (
    <>
      <div className="relative bg-green-100 px-4 pt-24 pb-12">
        <div className="container mt-10 mx-auto relative z-10">
          <PageTitle section="Our Plants" heading="Discover Our Ayurvedic Garden">
            <Typography className="text-brown-900 font-semibold">
              Explore the diverse range of plants in our garden, each with its unique medicinal properties and uses.
            </Typography>
          </PageTitle>
          <div className="grid grid-cols-1 gap-6 mt-5 md:grid-cols-2 lg:grid-cols-3">
            {plantsData.map((plant) => (
              <PlantCard key={plant.name} plant={plant} onClick={() => handleCardClick(plant)} />
            ))}
          </div>
        </div>
      </div>
      
    </>
  );
}

export default PlantsPage;
