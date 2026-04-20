class Solution:
    def solveSudoku(self, board: list[list[str]]) -> None:
        full_mask = (1 << 9) - 1
        rows = [0] * 9
        cols = [0] * 9
        boxes = [0] * 9
        empties: list[tuple[int, int]] = []

        def get_box_index(row: int, col: int) -> int:
            return (row // 3) * 3 + col // 3

        # rows / cols / boxes 用位掩码记录 1~9 的占用情况。
        for row in range(9):
            for col in range(9):
                if board[row][col] == ".":
                    empties.append((row, col))
                    continue

                bit = 1 << (ord(board[row][col]) - ord("1"))
                box = get_box_index(row, col)
                rows[row] |= bit
                cols[col] |= bit
                boxes[box] |= bit

        def dfs(pos: int) -> bool:
            if pos == len(empties):
                return True

            best = pos
            min_count = 10

            # 优先处理候选数字最少的空格，尽早剪枝。
            for i in range(pos, len(empties)):
                row, col = empties[i]
                box = get_box_index(row, col)
                available = full_mask & ~(rows[row] | cols[col] | boxes[box])
                candidate_count = available.bit_count()

                if candidate_count == 0:
                    return False
                if candidate_count < min_count:
                    min_count = candidate_count
                    best = i
                    if candidate_count == 1:
                        break

            empties[pos], empties[best] = empties[best], empties[pos]

            row, col = empties[pos]
            box = get_box_index(row, col)
            available = full_mask & ~(rows[row] | cols[col] | boxes[box])

            # 每次取最低位的 1，表示尝试一个可填数字。
            while available:
                bit = available & -available
                available ^= bit

                board[row][col] = str(bit.bit_length())
                rows[row] |= bit
                cols[col] |= bit
                boxes[box] |= bit

                if dfs(pos + 1):
                    return True

                rows[row] ^= bit
                cols[col] ^= bit
                boxes[box] ^= bit
                board[row][col] = "."

            empties[pos], empties[best] = empties[best], empties[pos]
            return False

        dfs(0)
