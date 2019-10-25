<template>
  <div class="hello">
    <h1>12款创意loading加载动画</h1>
    <button class="btn-wrap" @click="prevSubmit"> 
      上一个 
    </button>
    <button class="btn-wrap" style="margin:0 10px" @click="btnSubmit"> 
      查看 
    </button>
    <button class="btn-wrap" @click="nextSubmit"> 
      下一个 
    </button>
    <vue-loading ref="loading" :typeIndex="typeIndex" />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      typeIndex: 0
    }
  },
  methods: {
    btnSubmit() {
      this.$refs.loading.loadModal(true, 3000);
    },
    prevSubmit() {
      this.typeIndex = this.typeIndex === 0 ? 0 : this.typeIndex - 1;
      this.$refs.loading.loadModal(true, 3000);
    },
    nextSubmit() {
      this.typeIndex = this.typeIndex === 11 ? 11 : this.typeIndex + 1;
      this.$refs.loading.loadModal(true, 1500);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button:focus {
  outline: -webkit-focus-ring-color auto 0px;
}
.btn-wrap {
  border: 1px solid #fff;
  background: #42b983;
  padding: 5px 15px;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
}
</style>
