<template>
  <div>
    <search-index 
      :search-list="searchList" 
      :index-list="indexList" 
      @selected="selected"
      @searchInfo="getSearchInfo"
      @loadMore="loadMore"
      v-bind:local-name="localName"
      :more="more">
    </search-index>
  </div>
</template>

<script>
import SearchIndex from './searchPage/index'
import list from './history.js'
export default {
  data () {
    return {
      searchList: list[0],
      indexList: list[1],
      more: true,
      localName: 'historyList'
    }
  },

  components: {
    SearchIndex
  },

  methods: {
    selected (res) {
      console.log('选中的元素为' + res.name)
    },
    getSearchInfo (res) {
      console.log('get info', res)
      // 请求数据
    },
    loadMore () {
      console.log('加载更多')
    }
  },

  watch: {
  },

  created () {
    // let obj = {code:1,name:'2'}

    // window.localStorage.setItem('historyList', JSON.stringify(obj))
  }
}
</script>

<style>

</style>
