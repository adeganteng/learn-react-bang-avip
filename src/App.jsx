import Button from "./components/elements/button/Button";

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
