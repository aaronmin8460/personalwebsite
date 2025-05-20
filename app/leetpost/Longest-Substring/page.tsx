"use client";
import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Pseudocode = `initialize set to store characters
initialize left and right to 0
initialize max_length to 0

while right < length of s:
    if s[right] not in set:
        add s[right] to set
        update max_length if needed
        move right pointer to the right
    else:
        remove s[left] from set
        move left pointer to the right
`;

const Code = `int lengthOfLongestSubstring(char* s) {
    int n = strlen(s);
    int maxL = 0;
    int currentL = 0;
    int charMap[256];
    for(int i = 0; i < 256; i++){
        charMap[i] = -1;
    }
    int left = 0;
    for(int right = 0; right < n; right++){
        if (charMap[s[right]] != -1 && charMap[s[right]] >= left) {
            left = charMap[s[right]] + 1;
        }
        charMap[s[right]] = right;
        currentL = right - left + 1;
        if (currentL > maxL) {
            maxL = currentL;
        }
    }
    return maxL;
}`;

export default function AddTwoNumber() {
  return (
    <div className="p-8 text-white bg-black h-screen overflow-y-auto">
      <h1 className="p-5 text-2xl font-bold text-center">LeetCode Post: Longest Substring without duplicate</h1>
      
      <h2 className="p-5 text-xl font-bold">Problem Statement</h2>
      <div className="pl-5 pr-5">
        <Image
          src="/leetcode/Longest-Substring.png"
          width={700}
          height={500}
          alt="Longest-Substring"
        />
      </div>

      <h2 className="pl-5 pr-5 text-xl font-bold">Approach</h2>
      <p className="p-5 font-semibold">
        The goal is to get the longest string without duplicates in the given random string. 
        We need to map the array with two pointers and find the max length of the substring.
      </p>

      <h2 className="pl-5 pr-5 text-xl font-bold">Pseudocode</h2>
      <div className="pl-5 pr-5">
        <SyntaxHighlighter language="text" style={atomDark}>
          {Pseudocode}
        </SyntaxHighlighter>
      </div>

      <h2 className="pl-5 pr-5 text-xl font-bold">Code in C</h2>
      <div className="pl-5 pr-5">
        <SyntaxHighlighter language="c" style={atomDark}>
          {Code}
        </SyntaxHighlighter>
      </div>

      <h2 className="pl-5 pr-5 text-xl font-bold">Explanation</h2>
      <p className="pl-5 pr-5 text-l font-bold">What is charMap[256] for?</p>
      <p className="pl-5 pr-5">
        It&apos;s an array that can hold 256 elements, which covers all possible ASCII characters (0–255).
      </p>
      <p className="pl-5 pr-5">
        It acts like a hash map, where the index represents the ASCII value of a character.
      </p>

      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Step-by-Step Explanation</h1>
        <h2 className="text-xl font-bold mb-2">Example: &quot;abcabcbb&quot;</h2>
        <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-500">
            <th className="border border-gray-300 px-4 py-2">Step</th>
            <th className="border border-gray-300 px-4 py-2">Right</th>
            <th className="border border-gray-300 px-4 py-2">Char</th>
            <th className="border border-gray-300 px-4 py-2">CharMap[c]</th>
            <th className="border border-gray-300 px-4 py-2">Condition (charMap[c] &gt;= left)</th>
            <th className="border border-gray-300 px-4 py-2">Update left</th>
            <th className="border border-gray-300 px-4 py-2">Current Window</th>
            <th className="border border-gray-300 px-4 py-2">Length</th>
            <th className="border border-gray-300 px-4 py-2">maxLength Updated</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">1</td>
            <td className="border border-gray-300 px-4 py-2">0</td>
            <td className="border border-gray-300 px-4 py-2">a</td>
            <td className="border border-gray-300 px-4 py-2">-1</td>
            <td className="border border-gray-300 px-4 py-2">No</td>
            <td className="border border-gray-300 px-4 py-2">Left = 0</td>
            <td className="border border-gray-300 px-4 py-2">a</td>
            <td className="border border-gray-300 px-4 py-2">1</td>
            <td className="border border-gray-300 px-4 py-2">1</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">2</td>
            <td className="border border-gray-300 px-4 py-2">1</td>
            <td className="border border-gray-300 px-4 py-2">b</td>
            <td className="border border-gray-300 px-4 py-2">-1</td>
            <td className="border border-gray-300 px-4 py-2">No</td>
            <td className="border border-gray-300 px-4 py-2">Left = 0</td>
            <td className="border border-gray-300 px-4 py-2">ab</td>
            <td className="border border-gray-300 px-4 py-2">2</td>
            <td className="border border-gray-300 px-4 py-2">2</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">3</td>
            <td className="border border-gray-300 px-4 py-2">2</td>
            <td className="border border-gray-300 px-4 py-2">c</td>
            <td className="border border-gray-300 px-4 py-2">-1</td>
            <td className="border border-gray-300 px-4 py-2">No</td>
            <td className="border border-gray-300 px-4 py-2">Left = 0</td>
            <td className="border border-gray-300 px-4 py-2">abc</td>
            <td className="border border-gray-300 px-4 py-2">3</td>
            <td className="border border-gray-300 px-4 py-2">3</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">4</td>
            <td className="border border-gray-300 px-4 py-2">3</td>
            <td className="border border-gray-300 px-4 py-2">a</td>
            <td className="border border-gray-300 px-4 py-2">0</td>
            <td className="border border-gray-300 px-4 py-2">yes</td>
            <td className="border border-gray-300 px-4 py-2">Left = 1</td>
            <td className="border border-gray-300 px-4 py-2">bca</td>
            <td className="border border-gray-300 px-4 py-2">3</td>
            <td className="border border-gray-300 px-4 py-2">No change</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">5</td>
            <td className="border border-gray-300 px-4 py-2">4</td>
            <td className="border border-gray-300 px-4 py-2">b</td>
            <td className="border border-gray-300 px-4 py-2">1</td>
            <td className="border border-gray-300 px-4 py-2">yes</td>
            <td className="border border-gray-300 px-4 py-2">Left = 2</td>
            <td className="border border-gray-300 px-4 py-2">cab</td>
            <td className="border border-gray-300 px-4 py-2">3</td>
            <td className="border border-gray-300 px-4 py-2">No change</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">6</td>
            <td className="border border-gray-300 px-4 py-2">5</td>
            <td className="border border-gray-300 px-4 py-2">c</td>
            <td className="border border-gray-300 px-4 py-2">2</td>
            <td className="border border-gray-300 px-4 py-2">yes</td>
            <td className="border border-gray-300 px-4 py-2">Left = 3</td>
            <td className="border border-gray-300 px-4 py-2">abc</td>
            <td className="border border-gray-300 px-4 py-2">3</td>
            <td className="border border-gray-300 px-4 py-2">No change</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">7</td>
            <td className="border border-gray-300 px-4 py-2">6</td>
            <td className="border border-gray-300 px-4 py-2">b</td>
            <td className="border border-gray-300 px-4 py-2">4</td>
            <td className="border border-gray-300 px-4 py-2">yes</td>
            <td className="border border-gray-300 px-4 py-2">Left = 5</td>
            <td className="border border-gray-300 px-4 py-2">cb</td>
            <td className="border border-gray-300 px-4 py-2">2</td>
            <td className="border border-gray-300 px-4 py-2">No change</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">8</td>
            <td className="border border-gray-300 px-4 py-2">7</td>
            <td className="border border-gray-300 px-4 py-2">b</td>
            <td className="border border-gray-300 px-4 py-2">6</td>
            <td className="border border-gray-300 px-4 py-2">yes</td>
            <td className="border border-gray-300 px-4 py-2">Left = 7</td>
            <td className="border border-gray-300 px-4 py-2">b</td>
            <td className="border border-gray-300 px-4 py-2">1</td>
            <td className="border border-gray-300 px-4 py-2">No change</td>
          </tr>
        </tbody>
      </table>
      </div>

      <h2 className="pl-5 pr-5 text-xl font-bold">Time Complexity: O(n)</h2>
      <h2 className="pl-5 pr-5 mb-5 text-xl font-bold">Space Complexity: O(1)</h2>
    </div>
  );
}