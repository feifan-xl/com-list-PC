<template>
  <div>
    {{ msg }}
    <br/>
    <div>
      <button @click="add">click</button>
    </div>
    {{ testMsg }}
    <el-button type="default">default</el-button>
    <el-button type="primary">primary</el-button>
    <el-button type="danger">danger</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'dd',
      testMsg: ''
    }
  },
  methods: {
    add () {
      console.log(this.$store)
      this.testMsg += this.$store.state.testMsg
    }
  }
}
</script>

<style scoped>

</style>
