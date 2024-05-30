import Navbar from "./_components/navbar"



function App() {
  return (
    <div>
      
      <div className="fixed top-0 w-full flex justify-center p-5">
        <Navbar />
      </div>
      <div id = "section0" className="min-h-screen flex flex-col justify-center items-center gap-y-5 ">
        <div className="flex items-center gap-x-5">
          <h1 className="text-8xl text-white">Hi! I'm</h1>
          <h1 className="text-8xl text-sky-300">Erez</h1>
        </div>
        <h1 className="text-5xl text-white mt-5">And I build software</h1>
      </div>
      <div id = "section1" className="min-h-screen flex justify-center flex-col items-center gap-y-5 ">
        <h1 className="text-2xl text-white">I am an 18 year old with a big passion for software engineering</h1>
          <div className="flex  gap-x-4">
        <h1 className="text-2xl text-white">I specialize in building</h1> <h1 className="text-sky-300 text-2xl"> AI/Fullstack applications</h1>
          </div>
      </div>
            <div id = "section2" className="min-h-screen flex justify-center">
        <h1 className="text-3xl text-white">I am an AI/Fullstack Engineer</h1>
      </div>
            <div id = "section3" className="min-h-screen flex justify-center">
        <h1 className="text-3xl text-white">I am an AI/Fullstack Engineer</h1>
      </div>
      
      
    </div>

);

 
}

export default App
