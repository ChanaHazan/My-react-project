import React from 'react'
import Car from './Car';

const cars = [
    {
      name: "Mercedes-Benz",
      model: "S-Class",
      color: "שחור מטאלי",
      year: 2020
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

const Road = () => {
  return (
    <>
    <h1>hello road</h1>
    {cars.map(car=><Car key={car.year} car={car}/>)}
    </>
  )
}

export default Road