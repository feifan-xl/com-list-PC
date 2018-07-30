<template>
  <div class="content">
    <div class="box-content">
      <el-form ref="form" :model="form" label-width="80px">

        <el-form-item v-for="(item, index) in searchData" 
          :key="index" :label="item.label">

          <!-- input -->
          <el-input 
            v-if="item.type === 'text'" 
            v-model="form[item.code]" 
            :placeholder="item.placeholder">
          </el-input>

          <!-- date-picker -->
          <el-date-picker
            :change="dateChange(item.code)"
            v-if="item.type === 'date'"
            v-model="form[item.code]"
            type="daterange"
            range-separator="至"
            :start-placeholder="item.placeholder[0]"
            :end-placeholder="item.placeholder[1]">
          </el-date-picker> 

          <!-- switch -->
          <el-switch
            v-model="form[item.code]"
            v-if="item.type === 'switch'"
            >
          </el-switch>

          <!-- dropdown -->
          <el-select v-model="form[item.code]" :placeholder='item.placeholder'
            v-if="item.type === 'selectList'" class="drop-down">
            <el-option v-for="(subItem, subIndex) in item.optionsList"
              :key="subIndex"
              :label="subItem.label" :value="subItem.value"></el-option>
          </el-select>

          <!-- multi checkbox -->
          <el-checkbox-group v-model="form[item._code]"
            v-if="item.type === 'checkBox'"
            @change="hangleCheckBoxChange(index, item._code, item.code)">
              <el-checkbox 
                v-for="(subItem, subIndex) in item._transLabelList" 
                :label="subItem" 
                :key="subIndex"
                :name="subItem"></el-checkbox>
          </el-checkbox-group>

        <!-- radio -->
        <el-radio-group v-model="form[item._code]" 
          v-if="item.type === 'radio'"
          @change="hangleRadioChange(index, item._code, item.code)">
          <el-radio 
            v-for="(subItem, subIndex) in item._transLabelList"
            :key="subIndex"
            :label="subItem"
            :name="subItem"></el-radio>
        </el-radio-group>

        <!-- textarea -->
        <el-input 
          v-if="item.type === 'textarea'"
          type="textarea" v-model="form[item.code]"></el-input>

        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">confirm</el-button>
        </el-form-item>

      </el-form>
    </div>
    <div class="teble-box">
      <info-table :table-data="tableData" :column-data="columnData"></info-table>
    </div>


  </div>
</template>

<script>
import SearchData from './data/search.js'
import TableData from './data/table.js'
import InfoTable from './search/table.vue'
import TransData from './search/trans.js'
import axios from 'axios'
import Vue from 'vue'
  export default {
    data() {
      return {
        form: {},
        tableData: [],
        columnData: [],
        searchData: []
      }
    },
    methods: {
      dateChange (code) {
        if (this.form[code]) {
          let date = this.form[code]
          let date0 = new Date(date[0]).valueOf()
          let date1 = new Date(date[1]).valueOf()
          date[0] = date0
          date[1] = date1
        }
      },
      onSubmit () {
        let submitInfo = this.getFormDate()
        console.log('submit message', submitInfo)
        this.mockQuery()
        // this.query()
      },
      getFormDate () {
        let me = this
        let obj = {}
        me.searchData.forEach((item, index) => {
          obj[item.code] = me.form[item.code]
        })
        return obj
      },
      formDataInit (data) {
        let me = this
        me.searchData = TransData(data)
        Array.from(data).forEach((item, index) => {
          if (item.type === 'checkBox') {
            Vue.set(me.form, item._code, [])
            Vue.set(me.form, item.code, [])
          }
        })
      },
      hangleCheckBoxChange (index, code, rCode) {
        let me = this        
        let arr = []
        me.searchData[index]._transLabelList.forEach((item, subIndex) => {
          me.form[code].forEach((subItem) => {
            if (subItem === item) {
              arr.push(me.searchData[index]._transValueList[subIndex])
            }
          })
        })
        me.form[rCode] = arr
        return arr
      },
      hangleRadioChange (index, code, rCode) {
        let me = this
        let str = ''

        me.searchData[index]._transLabelList.forEach((item, subIndex) => {
          if (me.form[code] === item) {
            str = me.searchData[index]._transValueList[subIndex]
          }         
        })
        me.form[rCode] = str
        return str
      },
      init () {
        let me = this
        axios.get('')
          .then((res) => {
            if (res.data) {
              me.formDataInit(res.data)
            }
          })
          .catch((err) => {

          })
      },
      mockInit () {
        let me = this
        me.formDataInit(SearchData.list)
      },
      query () {
        let me = this
        axios.post('', me.form)
          .then((res) => {
            if(res.data) {
              me.tableData = res.data.table,
              me.columnData = res.data.column
            }
          })
          .catch((err) => {

          })
      },
      mockQuery () {
        let me = this
        me.tableData= TableData.table
        me.columnData= TableData.column
      }
    },
    components: {
      InfoTable
    },
    mounted () {
      // this.init()
      this.mockInit()
    }
  }
</script>

<style scoped>
  .content {
    margin: 5px;
  }
  .box-content {
    /* height: 300px; */
  }
  .teble-box {
    border: 1px solid #eee;
  }

  .el-form-item {
    display: inline-block;
    padding: 0 20px;
    width: 430px;
  }

  .el-form {
    display: flex;
    flex-wrap: wrap;
  }
  .el-select {
    display: block;
  }
</style>

