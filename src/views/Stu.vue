<template>
  <div class="stu">
    <a-card class="stu-card">
      <a-form-model>
      <a-col :span="formItemSpan">
      <a-form-model-item
        :colon="false"
      >
        <a-input allow-clear/>
      </a-form-model-item>
    </a-col>
      </a-form-model>
      <a-table
        :data-source="data"
        bordered
        :pagination="{ pageSize: 5 }">
        <a-table-column
          v-for="(col) in columns"
          :key="col.dataIndex"
          :data-index="col.dataIndex">
          <template #title>
            {{ col.title }}
          </template>
        </a-table-column>
        <a-table-column
            title="action">
          <template v-slot="text, record">
            <a-button
            @click="updateClickHandler(record.id)"
          >
            更新
          </a-button>
          <a-button
            @click="removeClickHandler(record.id)"
          >
            删除
          </a-button>
          </template>
        </a-table-column>
        </a-table>
    </a-card>
    <!-- <a-button >ddd</a-button> -->
  </div>
</template>

<script>
import api from '../api.js'

const columns = [{
  dataIndex: 'id',
  title: 'id'
}, {
  dataIndex: 'name',
  title: 'name'
}, {
  dataIndex: 'age',
  title: 'age'
},
{
  dataIndex: 'gender',
  title: 'gender'
}, {
  dataIndex: 'major',
  title: 'major'
}
// {
//   title: 'action',
//   scopedSlots: {
//     customRender: 'action',
//   },
// }
]

export default {
  data () {
    return {
      formItemSpan: 4,
      list: [],
      columns
      // pagination: {},
    }
  },

  created () {
    this.fetchStudentList()
  },

  methods: {
    fetchStudentList () {
      api.getStudentList().then((res) => {
        // this.pagination.total = res.total;
        this.list = res.list
        // this.$router.push('list');
      }).catch((err) => {
        console.log(err)
      })
    },
    edit (id) {
      console.log(id)
    },
    updateClickHandler (id) {
      console.log(id)
    },
    removeClickHandler (id) {
      console.log(id)
    }
  }
}
</script>

<style scoped>
.stu-card {
    background: #ecedee;
    width: 98%;
    margin: 12px auto;
    height: auto;
}
.form-layout {
  margin: 20px;
}
.form-item-style {
  margin: 2px;
}
</style>
