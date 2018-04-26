
<template>
  <div id="pageEditor">
    <button @click="setEditorContent">Set Editor Contents</button>
    <vue-editor
      v-model="content">
    </vue-editor>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
// import { VueEditor } from "vue2-editor";

export default {
  components: {
    VueEditor
  },
  data() {
    return {
      content: "<h1>Initial Content</h1>",
    };
  },
  editorSettings: {
    modules: {
      imageDrop: true
    }
  },
  methods: {
    setEditorContent: function() {
      this.htmlForEditor = '<h1>Html For Editor</h1>'
      console.log(this.content);
    }
  }
};
</script>
<style>
#pageEditor {
  padding-top: 100px;
  width: 78%;
  margin-left: 11%;
  height: 1200px;
}
.ql-editor {
  min-height: 1200px;
  font-size: 16px;
}
</style>
