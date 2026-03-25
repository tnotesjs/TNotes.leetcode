class Solution:
    def entityParser(self, text: str) -> str:
        replacements = [
            ('&quot;', '"'),
            ('&apos;', "'"),
            ('&amp;', '&'),
            ('&gt;', '>'),
            ('&lt;', '<'),
            ('&frasl;', '/'),
        ]
        for entity, char in replacements:
            text = text.replace(entity, char)
        return text
