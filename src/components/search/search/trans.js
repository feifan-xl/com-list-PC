
const transData = (data) => {
  let arr = []
  let num = new Date().valueOf()
  data.forEach((item, index) => {
    arr[index] = {}


    // checkBox
    let newValue = []
    let newLabel = []
    if (item.type === 'checkBox' || item.type === 'radio') {
      item.optionsList.forEach((subItem, subIndex) => {
        newValue[subIndex] = subItem.value
        newLabel[subIndex] = subItem.label
      })
      item._transValueList = newValue
      item._transLabelList = newLabel
      item._code = item.code + num
    }
  })
  return data
}

export default transData

