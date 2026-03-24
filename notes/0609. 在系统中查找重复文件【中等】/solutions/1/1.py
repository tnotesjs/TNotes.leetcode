class Solution:
    def findDuplicate(self, paths: List[str]) -> List[List[str]]:
        content_map = defaultdict(list)
        for path in paths:
            parts = path.split(' ')
            directory = parts[0]
            for i in range(1, len(parts)):
                idx = parts[i].index('(')
                file = parts[i][:idx]
                content = parts[i][idx + 1:-1]
                content_map[content].append(f'{directory}/{file}')
        return [files for files in content_map.values() if len(files) > 1]
