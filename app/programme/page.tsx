'use client'
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Skeleton1 from "@/components/Skeleton1";

const stages = ["STAGE - 1", "STAGE - 2", "STAGE - 3", "STAGE - 4", "STAGE - 5", "STAGE - 6"];

type StageData = string[][];

const fetchStageData = async (stage: string): Promise<StageData> => {
  const response = await fetch(`/api/getStageData?stage=${stage}`);
  if (!response.ok) {
    console.error(`Failed to fetch data for ${stage}: ${response.statusText}`);
    return [];
  }
  return response.json();
};

const page: React.FC = () => {
  const [data, setData] = useState<Record<string, StageData>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const stageData: Record<string, StageData> = {};
      for (let i = 1; i <= stages.length; i++) {
        const stageKey = `stage${i}`; // API expects lowercase keys
        const stageDataFetched = await fetchStageData(stageKey);
        stageData[`STAGE - ${i}`] = stageDataFetched; // Map to UI key
      }
      setData(stageData);
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 h-[85dvh] md:h-[90dvh] overflow-auto">
      <Accordion type="single" collapsible>
        {stages.map((stage, index) => (
          <AccordionItem value={`item-${index + 1}`} key={stage} className="text-2xl">
            <AccordionTrigger>{stage}</AccordionTrigger>
            <AccordionContent>
              {data[stage] && !loading ? (
                <div className="relative overflow-hidden shadow-md">
                  <table className="table-fixed w-full text-left">
                    <thead className="uppercase bg-neutral-700 text-white">
                      <tr>
                        <th className="py-1 border border-black text-center font-bold p-4 text-xs sm:text-sm md:text-base">Time</th>
                        <th className="py-1 border border-black text-center font-bold p-4 text-xs sm:text-sm md:text-base">Programme</th>
                        <th className="py-1 border border-black text-center font-bold p-4 text-xs sm:text-sm md:text-base">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-neutral-600 text-white">
                      {data[stage].map((row: string[], i: number) => (
                        <tr key={i} className="py-2">
                          <td className="py-2 border border-black text-center p-4 text-xs sm:text-sm">{row[0]}</td>
                          <td className="py-2 border border-black text-center p-4 text-xs sm:text-sm">{row[1]}</td>
                          <td
                            className={`py-2 border border-black text-center p-4 text-xs sm:text-sm ${row[2] === "Starting Soon"
                                ? "bg-green-700"
                                : row[2] === "In Progress"
                                  ? "bg-orange-600"
                                  : row[2] === "Completed"
                                    ? "bg-red-700"
                                    : ""
                              }`}
                          >
                            {row[2]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <Skeleton1 />
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default page;
