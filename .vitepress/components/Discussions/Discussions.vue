<script setup lang="ts">
import { onMounted } from 'vue';

const props = defineProps({
  /**
   * 留言版 ID
   * 格式规范：repoName.noteId
   * eg.
   *    electron.0001
   *    react.0032
   *    react.0040
   */
  id: {
    type: String,
    required: true
  }
});

onMounted(() => {
  // 动态注入 giscus 评论脚本
  const giscusScript = document.createElement('script');
  giscusScript.src = "https://giscus.app/client.js";
  giscusScript.setAttribute('data-repo', 'Tdahuyou/discussions');
  giscusScript.setAttribute('data-repo-id', 'R_kgDON-A6tg');
  giscusScript.setAttribute('data-category', 'Announcements');
  giscusScript.setAttribute('data-category-id', 'DIC_kwDON-A6ts4CnPI3');
  giscusScript.setAttribute('data-mapping', 'specific');
  giscusScript.setAttribute('data-term', props.id);
  giscusScript.setAttribute('data-strict', '0');
  giscusScript.setAttribute('data-reactions-enabled', '1');
  giscusScript.setAttribute('data-emit-metadata', '0');
  giscusScript.setAttribute('data-input-position', 'top');
  giscusScript.setAttribute('data-theme', 'noborder_dark');
  giscusScript.setAttribute('data-lang', 'zh-CN');
  giscusScript.setAttribute('data-loading', 'lazy');
  giscusScript.setAttribute('crossorigin', 'anonymous');
  giscusScript.async = true;

  // 确保脚本仅注入一次
  if (!document.getElementById('giscus-script')) {
    giscusScript.id = 'giscus-script';
    document.getElementById('giscus-comments').appendChild(giscusScript);
  }
});
</script>

<template>
  <h2>🫧 Discussions</h2>
  <div id="giscus-comments"></div>
</template>