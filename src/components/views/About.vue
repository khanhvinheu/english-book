<template>
  <div>
<!--    <SocialLogin/>-->
    <h1>Tính năng đang phát triển</h1>
    <el-tree
        :data="dataSource"

        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
    >
      <template #default="{ node, data }">
        <div style=" width: 100%;">
          <div style="display: flex; background-color: #efefef;">
            <el-avatar shape="square" :size="50" :src="circleUrl" style="margin-right: 10px;"/>
            <div style="display: flex;flex-wrap: wrap; flex-direction: column;">
              <span style="font-weight: bold; font-size: 12px;">{{ data.userName }}</span>
              <span>{{ node.label }}</span>
              <div style="display: flex; align-items: center;">
                <a @click="reply(data)" style="color:blue">
                  <ion-icon name="repeat-outline"></ion-icon>
                  <span style="padding-bottom:2px">Phản hồi</span>
                </a>

              </div>

            </div>
          </div>
          <div v-if="data.id== inputActive "
               style="background-color: #efefef;;display: flex; width: 100%; justify-content: end; padding:2px; margin-top: 2px;">

            <el-input
                v-model="input[data.id]" size="small" style="width:calc(100% - 105px);" placeholder="Please input"/>
            <!-- <input type="text" v-model="input[data.id]"> -->
            <!-- <button @click="send(data,input[data.id])">Send</button> -->
            <el-button @click="send(data,input[data.id])" type="success" size="small">
              <ion-icon name="send-outline"></ion-icon>
              Gửi
            </el-button>
          </div>
        </div>


      </template>
    </el-tree>
  </div>
</template>
<script>
import SocialLogin from "../Common/SocialLogin.vue";

export default {
  data() {
    return {
      userName: 'Khánh Vinh nè',
      input: [],
      inputActive: Number,
      circleUrl:
          'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      dataSource: [{
        id: 1,
        userName: 'Vinh',
        label: 'Hello, My name is Vinh',
        children: [{
          id: 4,
          userName: 'Hoàng Mỹ',
          label: 'Hello, My name is My ',
          children: [{
            id: 9,
            userName: 'Vinh',
            label: 'Yes, How old are you?'
          }, {
            id: 10,
            userName: 'Hoàng Mỹ',
            label: '20 year old'
          }]
        }]
      }, {
        id: 2,
        label: 'Level one 2',
        userName: 'Hoàng Mỹ',
        children: [{
          id: 5,
          userName: 'Hoàng Mỹ',
          label: 'Level two 2-1'
        }, {
          id: 6,
          userName: 'Hoàng Mỹ',
          label: 'Level two 2-2'
        }]
      }, {
        id: 3,
        userName: 'Hoàng Mỹ',
        label: 'Level one 3',
        children: [{
          id: 7,
          userName: 'Hoàng Mỹ',
          label: 'Level two 3-1'
        }, {
          id: 8,
          userName: 'Hoàng Mỹ',
          label: 'Level two 3-2'
        }]
      }]
    }
  },
  components:{
    SocialLogin
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    reply(data) {
      this.inputActive = data.id
      this.input[String(data.id)] = '@' + data.userName + ':'
    },
    send(data, text) {
      const newChild = {id: data.id + Math.random(9), label: text, userName: this.userName, children: []}
      if (!data.children) {
        data.children = []
      }
      data.children.push(newChild)
      this.dataSource = [...this.dataSource]
      this.inputActive = ''
      ElNotification.success({
        title: 'Thông báo',
        message: 'Phản hồi ' + data.userName + ' thành công.',
        showClose: true,
        // position:'bottom-right'
      })
    }

  },
  created() {
  },
  mounted() {
  }
}
</script>
<style>
.custom-tree-node {
  /* flex: 1; */
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: space-between; */
  font-size: 14px;
  padding-right: 8px;
}

.el-tree-node__content {

  display: flex;
  height: 90px;
  cursor: pointer;
}
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>
