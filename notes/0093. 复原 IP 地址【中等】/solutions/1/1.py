class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        result = []

        def dfs(start: int, seg: int, path: list):
            if seg == 4 and start == len(s): result.append('.'.join(path)); return
            if seg == 4 or start == len(s): return

            for length in range(1, 4):
                if start + length > len(s): break
                if length > 1 and s[start] == '0': break  # 禁止前导零
                part = s[start:start + length]
                if int(part) > 255: break
                path.append(part)
                dfs(start + length, seg + 1, path)
                path.pop()

        dfs(0, 0, [])
        return result
