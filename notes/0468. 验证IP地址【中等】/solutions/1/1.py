class Solution:
    def validIPAddress(self, queryIP: str) -> str:
        if '.' in queryIP:
            parts = queryIP.split('.')
            if len(parts) != 4:
                return 'Neither'
            for p in parts:
                if not p or not p.isdigit() or (len(p) > 1 and p[0] == '0') or int(p) > 255:
                    return 'Neither'
            return 'IPv4'
        if ':' in queryIP:
            parts = queryIP.split(':')
            if len(parts) != 8:
                return 'Neither'
            for p in parts:
                if not p or len(p) > 4:
                    return 'Neither'
                try:
                    int(p, 16)
                except ValueError:
                    return 'Neither'
            return 'IPv6'
        return 'Neither'
