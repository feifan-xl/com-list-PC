 <template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column v-for="(item, index) in columnData" :prop="item.prop" :label="item.label" :key="index"></el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    props: {
      columnData: Array,
      tableData: Array
    }
  }
</script>

<style>
.el-table /deep/ th {
  text-align: center;
}
</style>
