<template>
  <div>
    <el-row>
      <el-col :span="4">
        <el-menu :default-active=defaultS class="el-menu-vertical-demo">
          <div v-for="(i,index) of data" :key="index">
            <div v-if="i.children.length">
              <el-submenu index="/center">
                <template slot="title">
                  <span>{{i.name}}</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item :index=d.path v-for="d of i.children" :key=d.path @click="seleteData(i.name,d.name)">
                    {{d.name}}</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </div>
            <div v-if="!i.children.length">
              <el-menu-item :index=i.path @click="seleteData(i.name)">
                <span slot="title">{{i.name}}</span>
              </el-menu-item>
            </div>
          </div>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <h3 style="padding:30px;">{{title}}</h3>
        <div style="text-align: center;">暂无视频</div>
        <div class="stepC">
          <el-steps direction="vertical" :active="active">
            <el-step :style="{height:key.collap?'300px':'50px'}" style="transition: height  .3s;"
              v-for="(key,index) of stepData" :key=index>
              <template slot="title">
                <h4 class="stepTitle"><span>{{key.title}}</span><span style="cursor: pointer;font-size: 22px;">
                    <el-tooltip effect="dark" content="提问" placement="top-start">
                      <i class="el-icon-user-solid" style="margin-right: 10px;"></i>
                    </el-tooltip>
                    <i class="el-icon-arrow-down" style="transition: transform .3s;" :class="{isActive:!key.collap}"
                      @click="collapse(key)"></i>
                  </span></h4>
              </template>
              <template slot="description">
                <p v-if="key.collap" style="color: #757575;padding-top: 10px;transition: all 0.3s;" v-html="key.content"></p>
              </template>
            </el-step>
            <!-- <el-step title="步骤 1" :style="{height:!collap?'300px':'100px'}"></el-step>
            <el-step title="步骤 2" :style="{height:!collap?'300px':'200px'}"></el-step> -->
          </el-steps>
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        title: '',
        defaultS: '',
        active: 4,
        data: [
          { name: "Java-helloworld", children: [{ name: "第一步", path: "/hu" }, { name: "第二步", path: "/zai" }] },
          { name: "Java-虚拟机", children: [], path: "/lonely" },
          { name: "Java-类", children: [{ name: "Class", path: "/hua" }, { name: "Export", path: "/huaa" }] },
        ],
        stepData: [
          { collap: true, title: "安装协议", content: "<p>巴啦啦拉能量，黑魔仙变身，这是一个协议。</p><br>哈哈哈哈" },
          { collap: true, title: "第一步", content: "这是第一步" },
          { collap: true, title: "第二步", content: "这是第二步" },
        ]
      }
    },
    mounted() {
      if (this.data.length) {
        this.defaultS = this.data[0].children[0].path;
        this.title = this.data[0].name;
      }
    },
    methods: {
      seleteData(lastName, name) {
        this.title = lastName;
      },
      collapse(key) {
        key.collap = !key.collap;
      }
    }
  }
</script>


<style>
  .stepC {
    /* height: 300px; */
    margin-top: 100px;
    margin-left: 16%;
    margin-right: 100px;
    width: 70%;
  }

  .stepTitle {
    color: #727272;
    border-bottom: 1px solid #999999;
    padding-bottom: 5px;
    display: flex;
    justify-content: space-between;
  }

  .isActive {
    transform: rotate(-90deg);
  }
</style>