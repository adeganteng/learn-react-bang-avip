import CardProducts from "../components/fragments/CardProducts";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex  gap-4 justify-center items-center">
      <CardProducts>
        <CardProducts.Header images={"/images/shoes-1.jpg"} />
        <CardProducts.Body title={"New Shoes"}>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </CardProducts.Body>
        <CardProducts.Footer price={1000000} />
      </CardProducts>
    </div>
  );
};

export default ProductsPage;
