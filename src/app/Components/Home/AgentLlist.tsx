"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import whatsApp from "@/../public/whatsApp-icon.png";

type Agent = {
    id: number;
    agent: string;
    phone: string;
    call: string;
};

// ✅ Static array of agents (you can manually add more here)
const allAgents: Agent[] = [
    { id: 1001, agent: "Master", phone: "+171559786527", call: "+971559786527" },
    { id: 1002, agent: "Master", phone: "+171559786527", call: "+971559786527" },
    { id: 1003, agent: "Master", phone: "+171559786527", call: "+971559786527" },
    { id: 1004, agent: "Master", phone: "+171559786527", call: "+971559786527" },
    { id: 1005, agent: "Master", phone: "+171559786527", call: "+971559786527" },
    { id: 1006, agent: "Master", phone: "+171559786527", call: "+971559786527" },
    { id: 1007, agent: "Master", phone: "+171559786527", call: "+971559786527" },
    { id: 1008, agent: "Master", phone: "+171559786527", call: "+971559786527" },
    { id: 1009, agent: "Master", phone: "+171559786527", call: "+971559786527" },
    { id: 1010, agent: "Master", phone: "+171559786527", call: "+971559786527" },

    { id: 1011, agent: "Master", phone: "+601125225441", call: "+601125225441" },
    { id: 1012, agent: "Master", phone: "+601125225441", call: "+601125225441" },
    { id: 1013, agent: "Master", phone: "+601125225441", call: "+601125225441" },
    { id: 1014, agent: "Master", phone: "+601125225441", call: "+601125225441" },
    { id: 1015, agent: "Master", phone: "+601125225441", call: "+601125225441" },
    { id: 1016, agent: "Master", phone: "+601125225441", call: "+601125225441" },
    { id: 1017, agent: "Master", phone: "+601125225441", call: "+601125225441" },
    { id: 1018, agent: "Master", phone: "+601125225441", call: "+601125225441" },
    { id: 1019, agent: "Master", phone: "+601125225441", call: "+601125225441" },
    { id: 1020, agent: "Master", phone: "+601125225441", call: "+601125225441" },

    { id: 1021, agent: "Master", phone: "+97786440268", call: "+17786440268" },
    { id: 1022, agent: "Master", phone: "+97786440268", call: "+17786440268" },
    { id: 1023, agent: "Master", phone: "+97786440268", call: "+17786440268" },
    { id: 1024, agent: "Master", phone: "+97786440268", call: "+17786440268" },
    { id: 1025, agent: "Master", phone: "+97786440268", call: "+17786440268" },
    { id: 1026, agent: "Master", phone: "+97786440268", call: "+17786440268" },
    { id: 1027, agent: "Master", phone: "+97786440268", call: "+17786440268" },
    { id: 1028, agent: "Master", phone: "+97786440268", call: "+17786440268" },
    { id: 1029, agent: "Master", phone: "+97786440268", call: "+17786440268" },
    { id: 1030, agent: "Master", phone: "+97786440268", call: "+17786440268" },

    { id: 1031, agent: "Master", phone: "+601125047946", call: "+601125047946" },
    { id: 1032, agent: "Master", phone: "+601125047946", call: "+601125047946" },
    { id: 1033, agent: "Master", phone: "+601125047946", call: "+601125047946" },
    { id: 1034, agent: "Master", phone: "+601125047946", call: "+601125047946" },
    { id: 1035, agent: "Master", phone: "+601125047946", call: "+601125047946" },
    { id: 1036, agent: "Master", phone: "+601125047946", call: "+601125047946" },
    { id: 1037, agent: "Master", phone: "+601125047946", call: "+601125047946" },
    { id: 1038, agent: "Master", phone: "+601125047946", call: "+601125047946" },
    { id: 1039, agent: "Master", phone: "+601125047946", call: "+601125047946" },
    { id: 1040, agent: "Master", phone: "+601125047946", call: "+601125047946" },
];


// Shuffle function (optional)
function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Table render function
const renderTable = (title: string, data: Agent[]) => (
    <div
        key={title}
        className="my-4 border border-gray-200 rounded-lg shadow-lg overflow-hidden"
    >
        {/* Title */}
        <h3 className="text-center text-sm md:text-base font-bold bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 text-white py-2 md:py-3 shadow-md tracking-wide">
            {title}
        </h3>

        {/* Responsive Table */}
        <div className="bg-white">
            <table className="w-full text-xs md:text-sm text-left border-collapse">
                <thead className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 text-gray-900">
                    <tr>
                        <th className="px-2 md:px-4 py-2 border text-center">ID</th>
                        <th className="px-2 md:px-4 py-2 border text-center">Agent</th>
                        <th className="px-2 md:px-4 py-2 border text-center">App</th>
                        <th className="px-2 md:px-4 py-2 border text-center">Phone</th>
                        <th className="px-2 md:px-4 py-2 border text-center">Complain</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((agent, index) => (
                        <tr
                            key={index}
                            className={`text-center ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                }`}
                        >
                            <td className="px-2 md:px-4 py-2 border">{agent.id}</td>

                            <td className="px-2 md:px-4 py-2 border">{agent.agent}</td>

                            <td className="px-2 md:px-4 py-2 border">
                                <a
                                    href={`https://wa.me/${agent.call}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src={whatsApp}
                                        alt="WhatsApp"
                                        width={24}
                                        height={24}
                                        className="mx-auto"
                                    />
                                </a>
                            </td>

                            <td className="px-2 md:px-4 py-2 border text-rose-600 font-semibold break-words">
                                <a
                                    href={`https://wa.me/${agent.call}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    {agent.phone}
                                </a>
                            </td>

                            <td className="px-2 md:px-4 py-2 border">
                                <a
                                    href={`https://wa.me/+15064058213`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-rose-600 font-bold hover:underline"
                                >
                                    অভিযোগ
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

type AgentListProps = {
    agentId: string;
};

export default function AgentList({ agentId }: AgentListProps) {
    const [agents, setAgents] = useState<Agent[]>([]);

    useEffect(() => {
        setAgents(shuffleArray(allAgents)); // optional shuffle
    }, []);

    const filterByAgentId = (data: Agent[]) => {
        if (!agentId || agentId.trim() === "") return data;
        return data.filter((agent) =>
            agent.id.toString().includes(agentId.trim())
        );
    };

    const filteredData = filterByAgentId(agents);

    // প্রতিটা টেবিলে fix 6 row
    const chunkSize = 6;
    const chunkedTables: Agent[][] = [];
    for (let i = 0; i < filteredData.length; i += chunkSize) {
        chunkedTables.push(filteredData.slice(i, i + chunkSize));
    }

    return (
        <main className="min-h-screen bg-gray-100 text-black p-4 md:p-4">
            {chunkedTables.map((tableData, index) =>
                renderTable(
                    `সাব এডমিন ${index + 1} এর অধীনে সুপার এজেন্ট 200 এর অধীনে সর্বমোট মাস্টার এজেন্ট আছে ${tableData.length} জন`,
                    tableData
                )
            )}
        </main>
    );
}
