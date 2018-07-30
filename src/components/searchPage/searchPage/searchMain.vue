<template>
  <div>
    <mt-index-list>
      <mt-index-section v-for="(item, index) in alphabet" :index="item.initial" :key="index" v-if="!(item.cells.length === 0)">
        <mt-cell v-for="(cell, subIndex) in item.cells" :title="cell.name" :key="subIndex" @click.native="selectId(cell)">
        </mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
/**
 * @desc index list
 * @param {Array} lists 字母排序部分列表
 * @param {String} name 本地存储名称
 * 
 */
export default {
  data () {
    return {
      alphabet: []
    }
  },

  methods: {
    selectId (index) {
      this.$emit('selectedid', index)
    }
  },

  props: {
    lists: Array,
    localName: String
  },

  created () {
    let me = this
    console.log(me.lists)
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(initial => {
      let cells = me.lists.filter(name => name.url[0].toUpperCase() === initial)
      me.alphabet.push({
        initial,
        cells
      })
    })
    let localList = JSON.parse(window.localStorage.getItem(me.localName))
    if (localList) {
      me.alphabet.unshift({
        cells: localList,
        initial: '历史'
      })
    }
    console.log(this.alphabet)
  }
}
</script>

<style scoped>
.index-list-box {
  text-align: left;
}
.index-list-box /deep/ .mint-indexsection-index {
  padding: 0 10px;
  background-color: #eee;
}
.index-list-box /deep/ .mint-cell {
  padding: 0 20px;
  border-bottom:1px solid #eee;
}
</style>
