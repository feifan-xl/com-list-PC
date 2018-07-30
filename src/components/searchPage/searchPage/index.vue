<template>
  <div>
    <search-top v-on:input="getIpt"></search-top>
    <div class="search-main">
      <div class="search-info-box" v-show="showStatus.infoBox">
        <ul>
          <li v-for="(item, index) in searchList" @click="selecteCode(item)" :key="index">
            {{ item.name }}
          </li>
          <li @click="loadMore" v-show="more">加载更多</li>
        </ul>
      </div>
      <div class="search-index-list" v-show="!showStatus.infoBox">
        <div class="search-history-box">
          <search-index @selectedid="selectedid" :lists="indexList" v-bind:local-name="localName"></search-index>
        </div>
        <div class="search-index-box"></div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * search page
 * @desc 搜索页
 * @param {Array} searchList 搜索列表  {code:'', name:''}
 * @param {Array} indexList 字母排序列表 包含常用历史 {code:'', name:''}
 * @param {Boolean} more 加载更多
 * @param {String} localName 本地存储名称
 * @returns {Object} selected - 选中元素
 * @returns {String} searchInfo - 输入框文字
 * @returns {String} loadMore - 加载更多
 */
import SearchTop from './searchTop'
import SearchIndex from './searchMain'
export default {
  data () {
    return {
      showStatus: {
        infoBox: false
      },
      searchValue: ''
    }
  },

  props: {
    searchList: Array,
    indexList: Array,
    more: Boolean,
    localName: String
  },

  components: {
    SearchTop,
    SearchIndex
  },

  methods: {
    getIpt (res) {
      this.searchValue = res
      this.$emit('searchInfo', res)
    },
    selecteCode (res) {
      this.setLocal(res)
      this.$emit('selected', res)
    },
    selectedid (res) {
      this.setLocal(res)
      this.$emit('selected', res)
    },
    loadMore () {
      // this.more = false
      this.$emit('loadMore', '')
    },
    setLocal (res) {
      let me = this
      let list = JSON.parse(window.localStorage.getItem(me.localName))
      if (list.length >= 11 ) {
        list.splice(10, 10)
      }
      if (list.length >= 10) {
        list.pop()
      }
      list.unshift(res)
      window.localStorage.setItem(me.localName, JSON.stringify(list))
      return list
    }
  },

  watch: {
    searchValue (val) {
      this.showStatus.infoBox = val.length === 0 ? false : true
    }
  },
  created () {
    
  }
}
</script>

<style>
.search-main {
  padding-top: 10px;
  background-color: #fff;
  font-size: 18px;
  text-align: left;
}
.search-history-top {
  /* height: 20px; */
  text-align: left;
}
.search-history-title {
  background-color: #eee;
  display: block;
  padding-left: 10px
}
.search-history-top ul span {
  height: 40px;
  display: block;
  line-height: 39px;
  border-bottom: 1px solid #eee;
  padding-left: 20px;
}
.search-info-box ul>li {
  height: 40px;
  display: block;
  line-height: 39px;
  border-bottom: 1px solid #eee;
  padding-left: 20px;
}
.search-main /deep/ .mint-cell {
  padding: 0 20px;
}
.search-main /deep/ .mint-indexsection-index {
  background-color: #ddd;
}
</style>
