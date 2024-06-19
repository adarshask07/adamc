import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Typography
} from "@material-tailwind/react";
import { plantsData } from "@/data/plantsData";
import { PageTitle, Footer } from "@/widgets/layout";

export function PlantsPage() {
  const navigate = useNavigate();

  const handleCardClick = (plant) => {
    const plantName = plant.na
    me.toLowerCase().replace(/ /g, "-");
    navigate(`/plants/${plantName}`);
  };

  return (
    <>
      <section className="bg-green-100 px-4 pt-24 pb-12">
        <div className="container mx-auto">
          <PageTitle section="Our Plants" heading="Discover Our Ayurvedic Garden">
            Explore the diverse range of plants in our garden, each with its unique medicinal properties and uses.
          </PageTitle>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {plantsData.map((plant) => (
              <Card
                key={plant.name}
                className="shadow-lg border shadow-gray-500/10 rounded-lg cursor-pointer"
                onClick={() => handleCardClick(plant)}
              >
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt={plant.name}
                    src={plant.imageUrl}
                    className="h-full w-full object-cover"
                  />
                </CardHeader>
                <CardBody className="text-center">
                  <Typography variant="h5" color="green" className="font-bold mb-2">
                    {plant.name}
                  </Typography>
                  <Typography variant="subtitle1" color="blue-gray" className="font-normal italic mb-2">
                    {plant.scientificName}
                  </Typography>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default PlantsPage;
