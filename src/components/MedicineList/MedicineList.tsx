import { MedicineItem } from "./MedicineItem";

export const MedicineList = () => {
  const products = [
    {
      id: "0",
      photo: "https://i.ibb.co/bLKP624/5-15-1000x1000-min.jpg",
      name: "Aspirin",
      suppliers: "Square",
      stock: "12",
      price: "89.66",
      category: "Medicine",
    },
    {
      id: "1",
      photo: "https://i.ibb.co/Hg0zZkQ/shop-4-7-1000x1000-min.jpg",
      name: "Paracetamol",
      suppliers: "Acme",
      stock: "19",
      price: "34.16",
      category: "Heart",
    },
    {
      id: "2",
      photo: "https://i.ibb.co/02WmJdc/5-19-1000x1000-min.jpg",
      name: "Ibuprofen",
      suppliers: "Beximco",
      stock: "09",
      price: "53.76",
      category: "Head",
    },
    {
      id: "3",
      photo: "https://i.ibb.co/GxTVSVk/shop-4-9-1000x1000-min.jpg",
      name: "Acetaminophen",
      suppliers: "ACI",
      stock: "14",
      price: "28.57",
      category: "Hand",
    },
    {
      id: "4",
      photo: "https://i.ibb.co/X330FTj/shop-4-10-1000x1000-min.jpg",
      name: "Naproxen",
      suppliers: "Uniliver",
      stock: "10",
      price: "56.34",
      category: "Leg",
    },
    {
      id: "5",
      photo: "https://i.ibb.co/bLKP624/5-15-1000x1000-min.jpg",
      name: "Amoxicillin",
      suppliers: "Square",
      stock: "25",
      price: "45.99",
      category: "Medicine",
    },
  ];
  return (
    <ul className="flex flex-col md:flex-row md:flex-wrap gap-5 md:gap-y-[32px] md:gap-x-[13px] lg:gap-y-10 lg:gap-x-[21px]">
      {products.map((product, id) => (
        <MedicineItem key={id} {...product} />
      ))}
    </ul>
  );
};
