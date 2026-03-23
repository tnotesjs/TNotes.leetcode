class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        # rows[i] / cols[j] / boxes[k] 分别记录数字出现情况，位收槄
        rows  = [0] * 9
        cols  = [0] * 9
        boxes = [0] * 9

        for i in range(9):
            for j in range(9):
                if board[i][j] == '.':
                    continue
                num = int(board[i][j])  # 1~9
                bit = 1 << num
                box_idx = (i // 3) * 3 + j // 3

                if rows[i] & bit or cols[j] & bit or boxes[box_idx] & bit:
                    return False
                rows[i]       |= bit
                cols[j]       |= bit
                boxes[box_idx] |= bit

        return True
