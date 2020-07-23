<template>
  <div class="hello">
     <Row>
        <Col span="12">col-12</Col>
        <Col span="12">col-12</Col>
    </Row>
    <br>
    <Row>
        <Col span="8">col-8</Col>
        <Col span="8">col-8</Col>
        <Col span="8">col-8</Col>
    </Row>
    <br>
    <Row>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      
    }
  },
  methods:{
    
  }
}
</script>

<style scoped  lang="less">
@import "../../src/less/base.less";

*{
  margin: 0;
  padding: 0;
}
h1 {
  color: @base;
}
</style>
