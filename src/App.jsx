//! contoh mendefinisikan Component menggunakan Class Component
// class Button extends React.Component {
//   render() {
//     return (
//       <button className="h-10 px-6 font-semibold rounded-md bg-black text-white">
//         Buy Now
//       </button>
//     );
//   }
// }

//! contoh mendefinisikan Component menggunakan Function Component
const Button = ({
  variant = "bg-emerald-700 text-white",
  text = "Button default",
}) => {
  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${variant}`}>
      {text}
    </button>
  );
};

function App() {
  return (
    <>
      <div className="min-h-screen bg-teal-400 flex flex-col gap-3 justify-center items-center">
        <h1 className="text-3xl font-bold">Hello World</h1>
        <div className="flex justify-center items-center gap-3">
          <Button variant={"bg-black text-white"} text={"Button Black"} />
          <Button variant={"bg-red-700 text-white"} text={"Button Red"} />
          <Button variant={"bg-blue-700 text-white"} text={"Button Blue"} />
          <Button />
        </div>
      </div>
    </>
  );
}

export default App;
