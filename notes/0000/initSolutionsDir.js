import fs from 'fs'
import path from 'path'

const notesDirList = fs.readdirSync(path.resolve('../'))

console.log(notesDirList)
/*
[ 
  '.DS_Store',
  '0000',
  '0001. 两数之和【简单】',
  '0002. 两数相加【中等】',
  '0003. 无重复字符的最长子串【中等】',
  '0004. 寻找两个正序数组的中位数【困难】',
  '0005. 最长回文子串【中等】',
  '0006. Z 字形变换【中等】',
  '0007. 整数反转【中等】',
  '0008. 字符串转换整数 (atoi)【中等】',
  '0009. 回文数【简单】',
  '0010. 正则表达式匹配【困难】',
  '0011. 盛最多水的容器【中等】',
  '0012. 整数转罗马数字【中等】',
  '0013. 罗马数字转整数【简单】',
  '0014. 最长公共前缀【简单】',
  '0015. 三数之和【中等】',
  '0016. 最接近的三数之和【中等】',
  '0017. 电话号码的字母组合【中等】',
  '0018. 四数之和【中等】',
  '0019. 删除链表的倒数第 N 个结点【中等】',
  '0020. 有效的括号【简单】',
  '0021. 合并两个有序链表【简单】',
  '0022. 括号生成【中等】',
  '0023. 合并 K 个升序链表【困难】',
  '0024. 两两交换链表中的节点【中等】',
  '0025. K 个一组翻转链表【困难】',
  '0026. 删除有序数组中的重复项【简单】',
  '0027. 移除元素【简单】',
  '0028. 找出字符串中第一个匹配项的下标【简单】',
  '0029. 两数相除【中等】',
  '0030. 串联所有单词的子串【困难】',
  '0031. 下一个排列【中等】',
  '0032. 最长有效括号【困难】',
  '0033. 搜索旋转排序数组【中等】',
  '0034. 在排序数组中查找元素的第一个和最后一个位置【中等】',
  '0035. 搜索插入位置【简单】',
  '0036. 有效的数独【中等】',
  '0037. 解数独【困难】',
  '0038. 外观数列【中等】',
  '0039. 组合总和【中等】',
  '0040. 组合总和 II【中等】',
  '0041. 缺失的第一个正数【困难】',
  '0042. 接雨水【困难】',
  '0043. 字符串相乘【中等】',
  ...
]
*/

// 遍历 notesDirList 中，名称开头是 0001 到 3564 的所有目录
// 检查 solutions 目录是否存在，如果存在则跳过，如果不存在则创建 solutions/1/1.js 文件并写入一行注释，注释内容为 todo
notesDirList.forEach((dirName) => {
  // 检查目录名称是否以 0001-3564 开头
  const match = dirName.match(/^(\d{4})/)

  if (match) {
    const dirNumber = parseInt(match[1])

    // 确保目录编号在 0001 到 3564 范围内
    if (dirNumber >= 1 && dirNumber <= 3564) {
      const fullPath = path.resolve(`../${dirName}`)

      // 确保这是一个目录而不是文件
      if (fs.statSync(fullPath).isDirectory()) {
        const solutionsDirPath = path.join(fullPath, 'solutions')

        // 检查 solutions 目录是否存在
        if (!fs.existsSync(solutionsDirPath)) {
          // 创建 solutions 目录
          fs.mkdirSync(solutionsDirPath, { recursive: true })

          // 创建 solutions/1/ 目录
          const solutionSubDir = path.join(solutionsDirPath, '1')
          fs.mkdirSync(solutionSubDir, { recursive: true })

          // 创建 solutions/1/1.js 文件并写入注释
          const solutionFilePath = path.join(solutionSubDir, '1.js')
          const comment = '// todo\n'

          fs.writeFileSync(solutionFilePath, comment)
          console.log(`Created ${solutionFilePath}`)
        } else {
          console.log(`Solutions directory already exists for ${dirName}`)
        }
      }
    }
  }
})
