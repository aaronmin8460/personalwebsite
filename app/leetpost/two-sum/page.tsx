"use client";
import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Pseudocode = `for i from 0 to n-1:
    for j from i+1 to n:
        if nums[i] + nums[j] == target:
            return [i, j]
`;

const Code = `int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    for(int i = 0; i < numsSize; i++){
        for(int j = i+1; j < numsSize; j++){
            if(nums[j] + nums[i]== target){
                int* result = malloc(2*sizeof(int));
                result[0] = i;
                result[1] = j;
                *returnSize = 2;
                return result;
            }
        }
    }
    *returnSize = 0;
    return 0;
}`;

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
    <h2 className="pl-5 pr-5 text-xl font-bold">Approach</h2>
    <p className = "p-5 font-semibold">using nested loop, compare and calculate each element in array without using same element twice. return the position of the element</p>
    <h2 className="pl-5 pr-5 w-auto text-xl font-bold">Pseudocode</h2>
    <div className="pl-5 pr-5">
      <SyntaxHighlighter language="text" style={atomDark}>
        {Pseudocode}
      </SyntaxHighlighter>
      </div>
    <h2 className="pl-5 pr-5 w-auto text-xl font-bold">Code in C</h2>
      <div className="pl-5 pr-5">
      <SyntaxHighlighter language="text" style={atomDark}>
        {Code}
      </SyntaxHighlighter>
      </div>
      <h2 className="pl-5 pr-5 text-xl font-bold">Time Complexity: O<sup>2</sup></h2>
      <h2 className="pl-5 pr-5 text-xl font-bold">Space Complexity: O(1)</h2>
    </div>
  );
}
