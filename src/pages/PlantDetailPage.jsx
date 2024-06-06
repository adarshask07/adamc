import React from "react";
import { useParams } from "react-router-dom";
import { plantsData } from "@/data/plantsData";
import { Typography, Card, CardBody, CardHeader } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";

function PlantDetailPage() {
  const { plantName } = useParams();
  const plant = plantsData.find(p => p.name.toLowerCase().replace(/ /g, "-") === plantName.toLowerCase());

  if (!plant) {
    return <div>Plant not found</div>;
  }

  return (
    <>
      <section className="bg-green-100 px-4 pt-24 pb-12">
        <div className="container mx-auto">
          <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
            <CardHeader floated={false} className="relative h-56">
              <img
                alt={plant.name}
                src={plant.imageUrl}
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="green" className="font-bold mb-2">
                {plant.name}
              </Typography>
              <Typography variant="subtitle1" color="blue-gray" className="font-normal italic mb-2">
                {plant.scientificName}
              </Typography>
              <Typography className="font-normal text-blue-gray-500 mb-2">
                {plant.description}
              </Typography>
              <Typography className="font-normal text-blue-gray-500">
                <strong>Ayurvedic Uses:</strong>
                <ul className="list-disc pl-5 mt-2">
                  {plant.uses.map((use, index) => (
                    <li key={index}>{use}</li>
                  ))}
                </ul>
              </Typography>
            </CardBody>
          </Card>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default PlantDetailPage;
