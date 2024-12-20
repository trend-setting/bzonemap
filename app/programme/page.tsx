'use client'
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const stages = ["stage1", "stage2", "stage3", "stage4", "stage5", "stage6"];

type StageData = string[][];

const fetchStageData = async (stage: string): Promise<StageData> => {
  const response = await fetch(`api/getStageData?stage=${stage}`);
  return response.json();
};

const page: React.FC = () => {
  const [data, setData] = useState<Record<string, StageData>>({});

  useEffect(() => {
    const loadData = async () => {
      const stageData: Record<string, StageData> = {};
      for (let i = 1; i <= stages.length; i++) {
        const stage = `stage${i}`;
        stageData[stage] = await fetchStageData(stage);
      }
      setData(stageData);
    };
    loadData();
  }, []);

  return (
    <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">
      <Accordion type="single" collapsible>
      {stages.map((stage, index) => (
          <AccordionItem value={`item-${index + 1}`} key={stage}>
            <AccordionTrigger>{stage}</AccordionTrigger>
          <AccordionContent>
          {data[stage] ? (
                <ul>
                  {data[stage].map((row: string[], i: number) => (
                    <li key={i}>
                      <strong>Time:</strong> {row[0]} | <strong>Programme:</strong> {row[1]} | <strong>Status:</strong> {row[2]}
                    </li>
                  ))}
                </ul>
              ) : (
                "Loading..."
              )}
          </AccordionContent>
        </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default page;
