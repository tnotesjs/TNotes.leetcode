class Solution:
    def maskPII(self, s: str) -> str:
        if '@' in s:
            s = s.lower()
            name, domain = s.split('@')
            return name[0] + '*****' + name[-1] + '@' + domain
        digits = ''.join(c for c in s if c.isdigit())
        local = '***-***-' + digits[-4:]
        if len(digits) == 10:
            return local
        return '+' + '*' * (len(digits) - 10) + '-' + local
