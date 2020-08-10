<template>
  <div>
    <div id="editor">
      <mavon-editor ref='editor' :externalLink="externalLink" :ishljs="true" defaultOpen='preview' :boxShadow='false' :shortCut='false' previewBackground='#fff' :style="'width:'+width+'px;min-height:'+height+'px;max-height:'+maxHeight+'px'" :toolbarsFlag='false' :editable='true' :scrollStyle="true" :subfield='false' :value='escapeHtml(editorData)' ></mavon-editor>
   
    </div>
  </div>
</template>
<script>
import {mavonEditor} from "mavon-editor";
import "mavon-editor/dist/css/index.css";

export default {
  name: "editor",
  components:{
    mavonEditor
  },
  props: {
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 700
    },
    maxHeight: {
      type: Number,
      default: null
    },
    editorData: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
  
      externalLink: {
        markdown_css: function() {
          // 这是你的markdown css文件路径
          return "./static/markdown/github-markdown.min.css";
        },
        hljs_css: function(css) {
          // 这是你的代码高亮配色文件路径
          return "./static/markdown/github.min.css";
        },
        katex_css: function() {
          // 这是你的katex配色方案路径路径
          return "./static/markdown/katex.min.css";
        },
        hljs_js: function() {
          // 这是你的hljs文件路径
          return "./static/markdown/highlight.min.js";
        },
        katex_js: function() {
          // 这是你的katex.js路径
          return "./static/markdown/katex.min.js";
        }
      }
    };
  },
  methods: {
  escapeHtml(html) {
    return html.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  },
  }
};
</script>
<style>

.ivu-select-dropdown {
  z-index: 99999 !important;
}
.v-note-wrapper {
  z-index: 999 !important;
}

</style>