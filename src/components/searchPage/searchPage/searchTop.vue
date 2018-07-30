<template>
  <div>
    <div class="search-top-bar">
      <div class="search-top-bar-box">
        <i class="search-top-bar-icon mintui-search"></i>
        <input
          ref="input"
          @click="visible = true"
          type="search"
          v-model="currentValue"
          :placeholder="placeholder"
          class="search-top-bar-ipt">
      </div>
      <!-- <a
        class="search-top-bar-cancel"
        @click="visible = false, currentValue = ''"
        v-show="visible"
        v-text="cancelText">
      </a> -->
    </div>
  </div>
</template>

<script>
/** 
 * search top
 * @desc 搜索框
 * @param {String} value - 绑定值
 * @param {string} [cancel-text=取消] - 取消按钮文字
 * @param {string} [placeholder=取消] - 搜索框占位内容
 * @returns {String} input - 返回值
 */
export default {
  data () {
    return {
      visible: false,
      currentValue: this.value
    }
  },

  watch: {
    currentValue (val) {
      this.$emit('input', val)
    }
  },

  props: {
    value: String,
    cancelText: {
      default: '取消'
    },
    placeholder: {
      default: '搜索'
    }
  }
}
</script>

<style scoped>
.search-top-bar {
  font-size: 18px;
  position: relative;
  align-items: center;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  padding: 8px 10px;
  z-index: 1;
  border-bottom: 1px solid #ccc;
}
.search-top-bar-box{
  align-items: center;
  background-color: #fff;
  border-radius: 2px;
  display: flex;
  flex: 1;
  height: 28px;
  padding: 4px 6px;
}
.search-top-bar-icon {
  font-family: "mintui" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  color: #d9d9d9;
}
input {
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: 0;
  font-family: inherit;
  padding-left: 20px;
}
a {
  color: #26a2ff;
  margin-left: 10px;
  text-decoration: none;
}
</style>
