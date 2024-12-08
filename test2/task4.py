def longest_substring(st):
    char_set = set()
    sub = 0
    max_len = 0
    
    for i in range(len(st)):
        while st[i] in char_set:
            char_set.remove(st[sub])
            sub += 1
        char_set.add(st[i])
        max_len = max(max_len,i - sub + 1)
    return max_len

print(longest_substring("abcabcbb"))