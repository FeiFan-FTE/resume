<template>
    <div class="hello">
        <Row>
            <Col span="6">
            <Upload multiple type="drag" :before-upload="handleBeforeUpload" action="">
                <div style="padding: 20px 0">
                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                    <p>Click or drag files here to upload</p>
                </div>
            </Upload>
            </Col>
            <Col span="12">
            <markdown :width="1200" :editorData="content" :height="300"></markdown>
            </Col>
        </Row>
        <!-- <iframe src='http://view.xdocin.com/xdoc?_xdoc=http://dev.pro.local:9000/data/file/course/wangluoanquanweihu/section/7246043249/pdf/8975239995.pdf' width='100%' height='800px' frameborder='0'></iframe> -->
        <!-- </iframe> -->
    </div>
</template>
<script>
const mammoth = require("mammoth");
import markdown from "_c/markdown/markdown"
export default {
    name: 'HelloWorld',
    components: {
        markdown
    },
    data() {
        return {
            files: null,
            content: ""
        }
    },
    created() {
            // fetch("http://dev.pro.local:9000/data/file/course/wangluoanquanweihu/section/7246043249/pdf/8975239995.pdf").then(res=>{
            //     console.log(res)
            // })
            fetch('http://dev.pro.local:9000/data/file/course/wangluoanquanweihu/section/7246043249/pdf/8975239995.pdf')
  .then(function(response) {
    console.log(response)
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
    },
    methods: {
        handleBeforeUpload(file) {
            let t = this
            this.files = file;
            const reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onloadend = res => {
                let arrayBuffer = res.target.result
                console.log(arrayBuffer)
                mammoth.convertToMarkdown({ arrayBuffer: arrayBuffer }).then(function(resultObject) {
                    t.content = resultObject.value
                    // console.log(resultObject.value)
                })
            }
            return false;
        },
    }
}
</script>
<style scoped lang="less">
@import "../../src/less/base.less";

* {
    margin: 0;
    padding: 0;
}

h1 {
    color: @base;
}
</style>