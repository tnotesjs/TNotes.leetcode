class Solution:
    def reverseWords(self, s: str) -> str:
        arr = list(s)
        n = len(arr)

        def reverse(left, right):
            while left < right:
                arr[left], arr[right] = arr[right], arr[left]
                left += 1
                right -= 1

        # 第一步：整体反转
        reverse(0, n - 1)

        # 第二步 + 第三步：逐单词反转 + 压缩空格
        write = 0
        read = 0
        while read < n:
            while read < n and arr[read] == " ":
                read += 1
            if read >= n:
                break

            if write > 0:
                arr[write] = " "
                write += 1

            word_start = write
            while read < n and arr[read] != " ":
                arr[write] = arr[read]
                write += 1
                read += 1
            reverse(word_start, write - 1)

        return "".join(arr[:write])


# 注：Python 字符串不可变，解题时需用 list() 转为可变序列，空间 O(n)
