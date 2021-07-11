// markdown解析函数
const markdownParse = function(content) {
    // 将文章以\n分割为数组
    let arr = content.split('\n')
    // 解析后的字符串
    let str = new String()

    for (let i = 0; i < arr.length; i++) {
        // 解析标题: 开头为##
        if (arr[i].indexOf('##') == 0) {
            str += '<h3 class="content-title2">' + arr[i].slice(3) + '</h3>'
        } else if (arr[i].indexOf('```') == 0) {
            // 解析代码: 开头为```
            let codeStr = '<code class="content-code">'

            for (let index = i + 1; index < arr.length; index++) {
                // 若不为结尾的: ```
                if (arr[index].indexOf('```') != 0) {
                    // 对于每一行填充&nbsp;和<br>
                    let line = arr[index]
                    line = line.replace(/\x20\x20\x20\x20/g, '&nbsp;&nbsp;&nbsp;&nbsp;')
                    line = line.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;')
                    codeStr += line + '<br />'
                } else {
                    // 寻找结尾符号
                    // 更改索引位置，退出循环
                    i = index
                    break
                }
            }

            codeStr += '</code>'
            str += codeStr
        } else {
            // 解析段落文本
            str += '<p class="content-paragraph">' + arr[i] + '</p>'
        }
    }

    return str
}

export default markdownParse