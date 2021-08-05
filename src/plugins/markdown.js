// markdown解析函数
const markdownParse = function(content) {
    // 解析<script>标签
    content = content.replace(/<script>/g, '&lt;script&gt;')
    content = content.replace(/<\/script>/g, '&lt;/script&gt;')
    // 将文章以\n分割为数组
    let arr = content.split('\n')
    // 解析后的字符串
    let str = new String()

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf('## ') == 0) {
            // 解析二级标题: 开头为##
            str += '<h3 class="content-title2">' + arr[i].slice(3) + '</h3>'
        } else if (arr[i].indexOf('### ') == 0) {
            // 解析三级标题: 开头为###
            str += '<h4 class="content-title3">' + arr[i].slice(4) + '</h4>'
        } else if (arr[i].indexOf('#### ') == 0) {
            // 解析四级级标题: 开头为###
            str += '<h4 class="content-title4">' + arr[i].slice(5) + '</h4>'
        } else if (arr[i].search(/\x20*> /) == 0) {
            // 解析引用: 开头为'> '
            str +=
                '<p class="content-quote">' +
                arr[i].slice(arr[i].search(/> /) + 2) +
                '</p>'
        } else if (arr[i].indexOf('- ') == 0) {
            // 解析无序列表
            let listStr = '<ul class="content-list">'

            for (let index = i; index < arr.length; index++) {
                // 若开头为: '- '
                if (arr[index].indexOf('- ') == 0) {
                    // 对于每一行添加标签对
                    let line = arr[index].slice(2)
                    listStr += '<li>' + line + '</li>'

                    // 若本身为最后一行直接调整索引
                    if (index == arr.length - 1) {
                        // 更改索引位置，退出循环
                        i = index
                    }
                } else {
                    // 寻找结束位置
                    // 更改索引位置，退出循环
                    i = index - 1
                    break
                }
            }

            listStr += '</ul>'
            str += listStr
        } else if (arr[i].search(/^[0-9]*\. /) == 0) {
            // 解析有序列表
            let listStr = '<ol class="content-list">'

            for (let index = i; index < arr.length; index++) {
                // 若开头为: '1. '
                if (arr[index].search(/^[0-9]*\. /) == 0) {
                    // 对于每一行添加标签对
                    let line = arr[index].slice(3)
                    listStr += '<li>' + line + '</li>'

                    // 若本身为最后一行直接调整索引
                    if (index == arr.length - 1) {
                        // 更改索引位置，退出循环
                        i = index
                    }
                } else {
                    // 寻找结束位置
                    // 更改索引位置，退出循环
                    i = index - 1
                    break
                }
            }

            listStr += '</ol>'
            str += listStr
        } else if (arr[i].search(/\x20*```/) == 0) {
            // 解析代码: 开头为```
            let codeStr = '<code class="content-code">'

            for (let index = i + 1; index < arr.length; index++) {
                // 若不为结尾的: ```
                if (arr[index].search(/\x20*```/) != 0) {
                    // 对于每一行填充&nbsp;和<br>
                    let line = arr[index]
                    line = line.replace(
                        /\x20\x20\x20\x20/g,
                        '&nbsp;&nbsp;&nbsp;&nbsp;'
                    )
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
        } else if (arr[i].search(/^\x7C [\S \x7C]+/) == 0) {
            // 解析表格：| content | content | content |
            let tableStr = '<table class="content-table">'

            let headerItem = arr[i].split('|')
            // 解析表头
            tableStr += '<tr class="content-table-tr">'
            for (let index = 0; index < headerItem.length; index++) {
                if (headerItem[index] !== '') {
                    tableStr +=
                        '<th class="content-table-th">' +
                        headerItem[index] +
                        '</th>'
                }
            }
            tableStr += '</tr>'

            // 解析表内容
            for (let index = i + 2; index < arr.length; index++) {
                if (arr[index].search(/^\x7C [\S \x7C]+/) == 0) {
                    let items = arr[index].split('|')

                    tableStr += '<tr class="content-table-tr">'
                    for (
                        let itemIndex = 0;
                        itemIndex < items.length;
                        itemIndex++
                    ) {
                        if (items[itemIndex] !== '') {
                            tableStr +=
                                '<td class="content-table-td">' +
                                items[itemIndex] +
                                '</td>'
                        }
                    }
                    tableStr += '</tr>'

                    // 若本身为最后一行直接调整索引
                    if (index == arr.length - 1) {
                        // 更改索引位置，退出循环
                        i = index
                    }
                } else {
                    // 更改索引位置，退出循环
                    i = index
                    break
                }
            }

            tableStr += '</table>'
            str += tableStr
        } else if (arr[i].search(/^!\[(.*?)\]\((.*?)\)/) == 0) {
            // 解析图片：![属性文本](图片地址)
            let imgStr = arr[i]
            let hrefStr = ''
            let altStr = ''

            // 提取内容
            for (let aIndex = 2; aIndex <= imgStr.length; aIndex++) {
                if (imgStr[aIndex] != ']') {
                    altStr += imgStr[aIndex]
                } else {
                    for (let hIndex = aIndex + 2; imgStr.length; hIndex++) {
                        if (imgStr[hIndex] != ')') {
                            hrefStr += imgStr[hIndex]
                        } else {
                            break
                        }
                    }
                    break
                }
            }

            // 组合成html标签
            str +=
                '<img src="' +
                hrefStr +
                '" alt="' +
                altStr +
                '" class="content-img">'
        } else {
            // 解析段落文本

            // 将段落中的超链接解析出来
            // [链接名称](链接地址)
            let paragraphStr = arr[i]
            let linkName = ''
            let linkAddress = ''

            str += '<p class="content-paragraph">'

            // 检测是否有超链接内容
            if (paragraphStr.search(/(.*?)\[(.*?)\]\((.*?)\)(.*?)/) == 0) {
                // 提取超链接内容
                for (let index = 0; index <= paragraphStr.length; index++) {
                    // 提取链接名称
                    if (paragraphStr[index] === '[') {
                        for (
                            let nIndex = index + 1;
                            nIndex <= paragraphStr.length;
                            nIndex++
                        ) {
                            if (paragraphStr[nIndex] !== ']') {
                                linkName += paragraphStr[nIndex]
                            } else {
                                for (
                                    let aIndex = nIndex + 2;
                                    aIndex <= paragraphStr.length;
                                    aIndex++
                                ) {
                                    // 提取链接地址
                                    if (paragraphStr[aIndex] !== ')') {
                                        linkAddress += paragraphStr[aIndex]
                                    } else {
                                        // 更改索引位置
                                        index = aIndex + 1
                                        break
                                    }
                                }

                                // 组合成html标签
                                str +=
                                    '<a href="' +
                                    linkAddress +
                                    '" class="content-hyperlink" target="_blank">' +
                                    linkName +
                                    '</a> '
                                linkAddress = ''
                                linkName = ''
                                break
                            }
                        }
                    } else {
                        str += paragraphStr[index]
                    }
                }
            }

            str += '</p>'
        }
    }

    return str
}

export default markdownParse
