/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const uniqueEmails = new Set()

  for (let email of emails) {
    // 分割本地名和域名
    const [localName, domainName] = email.split('@')

    // 处理本地名：移除'+'后面的内容和所有的'.'
    let processedLocalName = localName
    const plusIndex = processedLocalName.indexOf('+')
    if (plusIndex !== -1) {
      processedLocalName = processedLocalName.substring(0, plusIndex)
    }
    processedLocalName = processedLocalName.replace(/\./g, '')

    // 组合处理后的邮件地址
    const normalizedEmail = processedLocalName + '@' + domainName
    uniqueEmails.add(normalizedEmail)
  }

  return uniqueEmails.size
}
