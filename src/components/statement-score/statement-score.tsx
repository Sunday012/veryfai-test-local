import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { InfoCircledIcon } from '@radix-ui/react-icons';

type StatementScoreType = {
    score: number | undefined,
    supportCount: number | undefined,
    opposeCount: number | undefined
}

export const StatementScore: React.FC<StatementScoreType> = ({ score }) => {
  const actualScore = score ?? 0;
  const absoluteScore = Math.abs(actualScore);
  const isNegative = actualScore < 0;
  const color = isNegative ? "text-red-500" : "text-green-500";
  // const bgColor = isNegative ? "bg-red-500" : "bg-green-500";

  const circumference = 2 * Math.PI * 45;
  const dashOffset = circumference * (1 - absoluteScore / 100);

  return (
    <Card className="w-full mx-auto">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-medium text-[#6B7280] flex items-center gap-2">
            STATEMENT CREDIBILITY SCORE
            <InfoCircledIcon className="h-4 w-4 text-gray-500" />
          </h2>
        </div>

        <div className='flex items-center justify-center gap-4 border-b w-full'>
          <div className="relative w-40 h-40 mb-6">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-gray-200"
                strokeWidth="10"
                stroke="currentColor"
                fill="transparent"
                r="45"
                cx="50"
                cy="50"
              />
              <circle
                className={color}
                strokeWidth="10"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="45"
                cx="50"
                cy="50"
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className={`text-4xl font-bold ${color}`}>{absoluteScore}</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-sm mb-4">
            <span className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
              {"< 0"}
            </span>
            <span className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
              {"> 0"}
            </span>
          </div>
        </div>

        {/* <div className="space-y-2 mb-6 border-b py-4">
          <p className="text-green-500 flex items-center gap-3">
            <img src="/upvote.svg" alt="" />
            {supportCount} sources supported your statement.
          </p>
          <p className="text-red-500 flex items-center gap-3">
            <img src="/downvote.svg" alt="" />
            {opposeCount} sources opposed your statement
          </p>
        </div> */}

      </CardContent>
    </Card>
  );
};