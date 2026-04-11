import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="w-full">
      <section className="relative min-h-[40vh] flex items-center justify-center bg-[#1a3a16] text-white">
        <Navbar />
        <h1 className="relative z-10 text-4xl font-bold mt-16">Contact</h1>
      </section>
      <div className="py-20 text-center text-gray-400">Pagina în construcție</div>
      <Footer />
    </div>
  )
}
