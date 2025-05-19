"use client";
import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Pseudocode = `
function twoSum(nums, target):
    for i from 0 to length of nums - 1:
        for j from i + 1 to length of nums - 1:
            if nums[i] + nums[j] == target:
                return [i, j]
    return null (no pair found)
`;

export default function TwoSome() {

  return (
    <div className="p-8 text-white bg-black h-screen overflow-y-auto">
      <h1 className="p-5 text-2xl font-bold text-center">LeetCode Post: Two Some</h1>
      <h2 className="p-5 text-xl font-bold">Problem Statement</h2>
      <div className="pl-5 pr-5 ">
      <Image
      src="/leetcode/two-sum.png"
      width={700}
      height={500}
      alt="two-sum"
    />
    </div>
    <h2 className="p-5 text-xl font-bold">Approach</h2>
    <h2 className="pl-5 pr-5 w-auto text-xl font-bold">Pseudocode</h2>
    <div className="pl-5 pr-5">
      <SyntaxHighlighter language="text" style={atomDark}>
        {Pseudocode}
      </SyntaxHighlighter>
          </div>
    </div>
  );
}
