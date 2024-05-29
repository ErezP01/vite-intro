import Navbar from "./_components/navbar"

function App() {

  return (
  <>
    <div className="min-h-screen">
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-4">
        <Navbar />
      </div>
        <div className = "flex items-center justify-center font-serif h-screen space-x-4">
          <h1 className = "text-8xl"> Hi! I'm</h1>
          <h1 className = "text-8xl text-orange-600">  Erez</h1>
        </div>
      </div>
  </>
);

  
}

export default App
