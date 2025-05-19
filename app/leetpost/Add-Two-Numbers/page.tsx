"use client";
import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Pseudocode = `Initialize a dummy node to act as the head of the result list
Set current pointer to dummy
Initialize carry to 0

WHILE l1 is not null OR l2 is not null OR carry is not 0:
    IF l1 is not null:
        val1 = l1.val
        Move l1 to l1.next
    ELSE:
        val1 = 0

    IF l2 is not null:
        val2 = l2.val
        Move l2 to l2.next
    ELSE:
        val2 = 0

    sum = val1 + val2 + carry
    carry = sum DIV 10       // Integer division: carry for next digit
    digit = sum MOD 10       // Only keep the current digit

    Create a new node with value = digit
    Link current.next to the new node
    Move current to current.next

Return dummy.next (skipping the dummy node)

`;

const Code = `struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
    struct ListNode dummy;
    struct ListNode* current = &dummy;
    int carry = 0;
    
    while (l1 != NULL || l2 != NULL || carry != 0) {
        int val1 = (l1 != NULL) ? l1->val : 0;
        int val2 = (l2 != NULL) ? l2->val : 0;
        int sum = val1 + val2 + carry;
        
        carry = sum / 10;
        int digit = sum % 10;
        
        current->next = malloc(sizeof(struct ListNode));
        current = current->next;
        current->val = digit;
        current->next = NULL;
        
        if (l1 != NULL) l1 = l1->next;
        if (l2 != NULL) l2 = l2->next;
    }
    
    return dummy.next;
}`;

export default function AddTwoNumber() {

  return (
    <div className="p-8 text-white bg-black h-screen overflow-y-auto">
      <h1 className="p-5 text-2xl font-bold text-center">LeetCode Post: Add Two Number</h1>
      <h2 className="p-5 text-xl font-bold">Problem Statement</h2>
      <div className="pl-5 pr-5 ">
      <Image
      src="/leetcode/Add-Two-Number.png"
      width={700}
      height={500}
      alt="Add-Two-Number"
    />
    </div>
    <h2 className="pl-5 pr-5 text-xl font-bold">Approach</h2>
    <p className = "p-5 font-semibold">The goal is to simulate column-wise addition of two numbers represented in reverse order as linked lists, digit by digit, and build a new linked list to hold the result.</p>
    <h2 className="pl-5 pr-5 w-auto text-xl font-bold">Pseudocode</h2>
    <div className="pl-5 pr-5">
      <SyntaxHighlighter language="text" style={atomDark}>
        {Pseudocode}
      </SyntaxHighlighter>
      </div>
    <h2 className="pl-5 pr-5 w-auto text-xl font-bold">Code in C</h2>
      <div className="pl-5 pr-5">
      <SyntaxHighlighter language="c" style={atomDark}>
        {Code}
      </SyntaxHighlighter>
      </div>
      <h2 className="pl-5 pr-5 text-xl font-bold">Time Complexity: O(max(m,n))</h2>
      <h2 className="pl-5 pr-5 mb-5 text-xl font-bold">Space Complexity: O(1)</h2>
    </div>
  );
}
