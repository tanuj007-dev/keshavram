import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen w-full bg-white font-sans text-[#1a1a1a]">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-center text-base text-[#6b6b6b]">
          Page content goes here.
        </p>
      </main>
    </div>
  )
}

export default App
