# Palindrome Phrase Checker

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string `s`, the function returns `true` if it is a palindrome, or `false` otherwise.

This problem is pretty obvious and the optimal solution will be O(n) for time complexity, and we can do this with O(1); constant memory complexity.
First off, we could reverse the string and check if it is the same as the original, or we can do left string and right string iterators, making sure they match each
other until they meet. The latter is faster and has O(1) space complexity, so I will do that.

This solution ran in 0 ms and was in the 50th percentile in memory at 7.4 MB (this is because I used integers to iterate over the strings instead of string iterators).

```cpp
class Solution {
public:
    bool isPalindrome(string s) {
        int l = 0, r = s.size()-1;
        while (l<=r){
            if (!isalnum(s[l])){ l++;continue;}
            if (!isalnum(s[r])){ r--;continue;}
            if (tolower(s[l])!=tolower(s[r]))return false;
            else{l++;r--;}
        }
        return true;
    }
};
