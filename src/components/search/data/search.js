
/**
 *  搜索条件配置项
 * @param {String} label 标签
 * @param {String} code 请求时，参数名称
 * @param {String} placeholder 占位符
 * @param {String} type 搜索条件类型： 
 *                                  input 输入框
 *                                  date  时间选择
 *                                  switch 开关 
 *                                  selectList 下拉选择
 *                                  checkBox 多选框
 *                                  radio 单选框
 * @param {Array} optionsList 选择配置项：
 * @param {Object} 
 * @param {String} label 显示名称
 * @param {String} value 请求时，请求值
 */
const list = [
  {
    label: '多选框',
    code: 'checkbox231',
    type: 'checkBox',
    optionsList: [
      {
        label: '选择1',
        value: 'id1'
      },
      {
        label: '选择2',
        value: 'id2'
      },
      {
        label: '选择3',
        value: 'id3'
      }
    ]
  },
  {
    label: '查询条件1',
    placeholder: '输入查询条件1',
    code: 'info1',
    type: 'text'
  },
  {
    label: '时间1',
    placeholder: [
      '开始日期',
      '结束日期'
    ],
    code: 'date1',
    type: 'date'
  },
  {
    label: '查询条件3',
    placeholder: '输入查询条件3',
    code: 'info3',
    type: 'text'
  },
  {
    label: '切换项',
    code: 'switch',
    type: 'switch'
  },
  {
    label: '下拉选择1',
    code: 'select',
    placeholder: '选择切换项',
    type: 'selectList',
    optionsList: [
      {
        label: '选项1',
        value: 'value1'
      },
      {
        label: '选项2',
        value: 'value2'
      }
    ]
  },
  {
    label: '单选',
    code: 'radio',
    type: 'radio',
    optionsList: [
      {
        label: '选择1',
        value: 'id1'
      },
      {
        label: '选择2',
        value: 'id2'
      },
      {
        label: '选择3',
        value: 'id3'
      }
    ]
  },
  {
    label: '备注1',
    code: 'textarea',
    type: 'textarea'
  }
]

export default {
  list
}
