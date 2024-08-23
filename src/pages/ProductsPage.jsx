import CardProducts from "../components/fragments/CardProducts";

const products = [
  {
    id: 1,
    title: "Shoes",
    price: 1000000,
    description:
      "This is a shoes product with some description here and more content here.",
    images: "/images/shoes-1.jpg",
  },
  {
    id: 2,
    title: "Shoes Adidas",
    price: 1500000,
    description:
      "Adidas is a shoes product with some description here and more content here.",
    images: "/images/shoes-1.jpg",
  },
  {
    id: 3,
    title: "Shoes Adidas",
    price: 1500000,
    description: "Adidas is a shoes product with some description here.",
    images: "/images/shoes-1.jpg",
  },
  {
    id: 4,
    title: "Shoes Adidas",
    price: 1500000,
    description:
      "Adidas is a shoes product with some description here and more content here.",
    images: "/images/shoes-1.jpg",
  },
];

const ProductsPage = () => {
  return (
    <div className=" bg-slate-100 p-8 gap-4  flex flex-wrap items-start justify-center">
      {products.map((product) => (
        <CardProducts key={product.id}>
          <CardProducts.Header images={product.images} />
          <CardProducts.Body
            title={product.title}
            description={product.description}
          />
          <CardProducts.Footer price={product.price} />
        </CardProducts>
      ))}
    </div>
  );
};

export default ProductsPage;
