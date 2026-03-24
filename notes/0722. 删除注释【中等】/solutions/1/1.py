class Solution:
    def removeComments(self, source: List[str]) -> List[str]:
        res = []
        in_block = False
        line = []
        for s in source:
            i = 0
            if not in_block:
                line = []
            while i < len(s):
                if in_block:
                    if i + 1 < len(s) and s[i:i+2] == '*/':
                        in_block = False
                        i += 2
                    else:
                        i += 1
                else:
                    if i + 1 < len(s) and s[i:i+2] == '//':
                        break
                    elif i + 1 < len(s) and s[i:i+2] == '/*':
                        in_block = True
                        i += 2
                    else:
                        line.append(s[i])
                        i += 1
            if not in_block and line:
                res.append(''.join(line))
        return res
