import React from 'react'
import Car from './Car';

const Road = () => {
const cars = [
  {
    name: "Mercedes-Benz",
    model: "S-Class",
    color: "שחור מטאלי",
    year: 2023
  },
  {
    name: "BMW",
    model: "X7",
    color: "לבן פנינה",
    year: 2022
  },
  {
    name: "Audi",
    model: "A8",
    color: "כסוף",
    year: 2023
  },
  {
    name: "Porsche",
    model: "Cayenne",
    color: "אדום עמוק",
    year: 2024
  }
];
  return (
    <>
     {cars.map(car =>(
      <Car
        key={car.year}
        name={car.name}
        model={car.model}
        color={car.color}
        year={car.year}
      />
     ))}
    </>
  )
}

export default Road