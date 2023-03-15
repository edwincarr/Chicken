import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="bg-blob bg-cover h-screen w-screen aspect-16/9"></div>
      <div className="h-screen"></div>
    </div>
  )
}
