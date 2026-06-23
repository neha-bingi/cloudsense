import FeatureCards from "@/components/FeatureCards";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import Workflow from "@/components/Workflow";
import CostDashboard from "@/components/CostDashboard";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-sky-50 text-slate-900 flex flex-col items-center pt-32">
      <Navbar />
      <div className="fixed top-20 left-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="fixed bottom-20 right-10 w-96 h-96 bg-sky-300 rounded-full blur-3xl opacity-20 -z-10"></div>
      <h1 className="text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
        CloudSense
      </h1>

      <p className="mt-6 text-xl text-slate-600 max-w-2xl text-center">
        Agentic Multi-Cloud Cost Intelligence Platform
      </p>

      <p className="mt-4 text-slate-600 text-center">
        Know Before You Build. Optimize Before You Deploy.
      </p>
      <div className="mt-6 px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-medium">
  Agentic AI • Multi-Cloud • Cost Intelligence
      </div>

      <button className="mt-10 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
        Try CloudSense
      </button>
<FeatureCards />
<Stats />
<Workflow />
<CostDashboard />
<Footer />

    </main>
  );
}