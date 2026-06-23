"use client";

import OptimizationPanel from "@/components/OptimizationPanel";
import ArchitectureRecommendation from "@/components/ArchitectureRecommendation";
import CostChart from "@/components/CostChart";
import { useState } from "react";

export default function EstimatorPage() {
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);




  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-sky-50 p-10">

      <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
        Cloud Cost Estimator
      </h1>

      <p className="text-center text-slate-600 mt-4">
        Describe your application and receive AI-powered cloud insights.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-12">

        <div className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4">
            Project Description
          </h2>

          <textarea
            className="w-full h-64 border border-slate-200 rounded-xl p-4"
            placeholder="Describe your project..."
          />

          <button
            onClick={() => {
            setLoading(true);

            setTimeout(() => {
            setLoading(false);
            setShowResult(true);
           }, 2000);
          }}
            className="mt-6 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
            >
            Analyze Project
          </button>
          {loading && (
            <div className="mt-4 text-center text-pink-600 font-medium">
               🤖 AI Agents Analyzing Architecture...
            </div>
            )}
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

          <h2 className="text-2xl font-bold mb-4">
            AI Analysis
          </h2>

          <div className="space-y-4">
            <div>👥 Users: 50,000</div>
            <div>🗄 Storage: High</div>
            <div>⚡ Realtime: Enabled</div>
            <div>🤖 AI Services: Required</div>
          </div>

        </div>

      </div>

      {showResult && (
        <>
          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <h3 className="text-orange-500 font-bold">
                AWS
              </h3>
              <p className="text-4xl font-bold mt-2">
                $520
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <h3 className="text-blue-500 font-bold">
                Azure
              </h3>
              <p className="text-4xl font-bold mt-2">
                $610
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <h3 className="text-green-500 font-bold">
                GCP
              </h3>
              <p className="text-4xl font-bold mt-2">
                $480
              </p>
            </div>

          </div>

          <div className="mt-10 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-3xl p-8">
            <h2 className="text-3xl font-bold">
              Recommended Provider
            </h2>
            
            <p className="mt-4 text-xl">
              Google Cloud Platform
            </p>

            <p className="mt-2">
              Estimated Savings: 22%
            </p>
            </div>
            <CostChart />
            <ArchitectureRecommendation />
            <OptimizationPanel />

        </>
      )}

    </main>
  );
}