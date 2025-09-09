"use client"

import Navbar from "./Components/Home/Navbar";
import Bannar from "./Components/Home/Bannar";
import AgentLlist from "./Components/Home/AgentLlist";
import { useState } from "react";
import Footer from "./Components/Home/Footer";

export default function Home() {
  const [searchAgentId, setSearchAgentId] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto bg-white">
      <Navbar setSearchAgentId={setSearchAgentId}></Navbar>
      {/* <Bannar></Bannar> */}
      <AgentLlist agentId={searchAgentId ?? ""}/>
      <Footer/>
    </div>
  );
}
