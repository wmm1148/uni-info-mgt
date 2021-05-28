<template>
  <!-- <div class="stu"> -->
    <a-layout class="stu-layout">
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          class="menuStyle"
          mode="inline"
          :default-selected-keys="['1']"
          :default-open-keys="['sub1']"
          :style="menuStyle"
          @click="handleClick"
        >
          <a-sub-menu key="sub1" @titleClick="titleClick">
            <template #title>
              <span>
                <MailOutlined />
                <span>Student Information</span>
              </span>
            </template>
            <a-menu-item-group key="g1">
              <template #title>
                <QqOutlined />
                <span>Basic</span>
              </template>
              <!-- <a-menu-item key="1">Basic Info1</a-menu-item> -->
              <!-- <a-menu-item key="1">Basic Info1</a-menu-item> -->
              <a-menu-item key="1"><router-link to="/stuInfo">Basic Info1</router-link></a-menu-item>
              <a-menu-item key="2"><router-link to="/stuInfo2">Basic Info2</router-link></a-menu-item>
            </a-menu-item-group>
            <a-menu-item-group key="g2" title="Detail">
              <a-menu-item key="3">Detail Info1</a-menu-item>
              <a-menu-item key="4">Detail Info2</a-menu-item>
            </a-menu-item-group>
          </a-sub-menu>
          <a-sub-menu key="sub2" @titleClick="titleClick">
            <template #title>
              <span>
                <AppstoreOutlined />
                <span>Settings</span>
              </span>
            </template>
            <a-menu-item key="5">Settings1</a-menu-item>
            <a-menu-item key="6">Settings2</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <router-view></router-view>
        <!-- <a-card class="stu-card" title="Student"></a-card> -->
        <!-- <a-card class="stu-card">
          <a-form-model>
            <a-row gutter="16" align="middle">
              <a-col :span="formItemSpan" class="ant-col">
                <a-form-model-item
                  :colon="false"
                >
                  <a-input placeholder="Please input name" allow-clear/>
                </a-form-model-item>
              </a-col>
              <a-col :span="formItemSpan" class="ant-col">
                <a-form-model-item
                  :colon="false"
                >
                  <a-input placeholder="Please input age" allow-clear/>
                </a-form-model-item>
              </a-col>
              <a-col :span="formItemSpan" class="ant-col">
                <a-form-model-item
                  :colon="false"
                >
                  <a-input placeholder="Please input gender" allow-clear/>
                </a-form-model-item>
              </a-col>
              <a-col :span="formItemSpan" class="ant-col">
                <a-form-model-item
                  :colon="false"
                >
                  <a-input placeholder="Please input major" allow-clear/>
                </a-form-model-item>
              </a-col>
            </a-row>
          </a-form-model>
          <a-table
            row-key="id"
            :data-source="list"
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
        </a-card> -->
      </a-layout>
    </a-layout>
  <!-- </div> -->
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
      columns,
      menuStyle: { height: '100%', borderRight: 0 }
      // pagination: {},
    }
  },

  created () {
    this.fetchStudentList()
  },

  methods: {
    fetchStudentList () {
      api.getStudentList().then((res) => {
        // console.log('stu res', res)
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
    },
    handleClick (e) {
      console.log('click', e)
      console.log('click')
    }
  }
}
</script>

<style scoped>
.stu-layout {
  height: 1000px;
}
.stu-card {
  /* display: inline; */
    background: #feffff;
    width: 98%;
    margin: 12px auto;
    /* height: 100%; */
    height: auto;
    text-align: left;
}
.ant-card-body {
  padding: 0 24px 24px 24px;
}
.form-layout {
  margin: 20px;
}
.form-item-style {
  margin: 2px;
}
.ant-col {
  padding: 0 16px 16px 16px;
}
.menuStyle {
  text-align: left;
}
</style>
