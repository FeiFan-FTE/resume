<!--
 * @Author: feifan
 * @Date: 2020-08-10 14:40:32
 * @LastEditors: feifan
 * @LastEditTime: 2020-08-10 15:09:35

-->
<template>
  <div class="upload-box">
    <uploader :options="options" :file-status-text="statusText" class="uploader-example" ref="uploader"
      style="width: 100%;" @file-success="fileSuccess">
      <uploader-unsupport></uploader-unsupport>
      <uploader-drop>
        <uploader-btn>上传</uploader-btn>
      </uploader-drop>
      <uploader-list></uploader-list>
    </uploader>
  </div>
</template>

<script>
// uploader 在main.js引入
// import { getToken } from '@/libs/util'
export default {
  name: 'upload',
  props: {
    uploadUrl: {
      type: String,
      default: ''
    },
    singel: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      options: {
        target: this.uploadUrl, // 上传地址
        testChunks: false, // 是否开启服务器分片校验
        chunkSize: 1024 * 1024 * 3, // 块大小 单位b 1024*1024*3
        singleFile: this.singel, // 单文件上传
        headers: {
        //   Authorization: `Bearer ${getToken()}`
        }
      },
      statusText: {
        success: '上传成功',
        error: '上传失败',
        uploading: '上传中',
        paused: '暂停中',
        waiting: '等待中'
      }
    }
  },
  methods: {
    /**
     * @param {*} chunk 块信息
     * @param {*} message  返回的消息
     * @description 勾选table某一项时触发
     */
    fileSuccess (rootFile, file, message, chunk) {
      // 上传成功后调用的方法
      let temp = JSON.parse(message).result[0]
      this.$emit('upload-success', {
        size: temp.size,
        url: temp.url
      })
    }
  }

}
</script>
<style  scoped>
.uploader-example {
  padding: 15px;
  font-size: 12px;
}
</style>
