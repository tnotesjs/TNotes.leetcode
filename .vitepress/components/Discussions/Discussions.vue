<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useData } from 'vitepress';

const props = defineProps({
  /**
   * 留言版 ID
   * 格式规范：repoName.noteId
   * eg.
   *    TNotes.electron.0001
   *    TNotes.react.0032
   *    TNotes.react.0040
   */
  id: {
    type: String,
    required: true
  }
});

// 🔍 查阅支持的所有主题 https://giscus.app/zh-CN
const GISCUS_DARK_THEME = 'noborder_dark';
const GISCUS_LIGHT_THEME = 'noborder_light';
// const GISCUS_DARK_THEME = 'https://github.com/giscus/giscus/blob/main/styles/themes/noborder_dark.css';
// const GISCUS_LIGHT_THEME = 'https://raw.githubusercontent.com/giscus/giscus/refs/heads/main/styles/themes/noborder_light.css';

// 获取 VitePress 的数据 - 主题状态
const { isDark } = useData();

onMounted(() => {
  // 动态注入 giscus 评论脚本
  const giscusScript = document.createElement('script');
  giscusScript.src = "https://giscus.app/client.js";
  giscusScript.setAttribute('data-repo', 'Tdahuyou/TNotes.discussions');
  giscusScript.setAttribute('data-repo-id', 'R_kgDON-A6tg');
  giscusScript.setAttribute('data-category', 'Announcements');
  giscusScript.setAttribute('data-category-id', 'DIC_kwDON-A6ts4CnPI3');
  giscusScript.setAttribute('data-mapping', 'specific');
  giscusScript.setAttribute('data-term', props.id);
  giscusScript.setAttribute('data-strict', '0');
  giscusScript.setAttribute('data-reactions-enabled', '1');
  giscusScript.setAttribute('data-emit-metadata', '0');
  giscusScript.setAttribute('data-input-position', 'top');
  giscusScript.setAttribute('data-lang', 'zh-CN');
  giscusScript.setAttribute('data-loading', 'lazy');
  giscusScript.setAttribute('crossorigin', 'anonymous');
  giscusScript.async = true;

  // 设置初始主题
  giscusScript.setAttribute('data-theme', isDark.value ? GISCUS_DARK_THEME : GISCUS_LIGHT_THEME);

  // 确保脚本仅注入一次
  if (!document.getElementById('giscus-script')) {
    giscusScript.id = 'giscus-script';
    document.getElementById('giscus-comments')?.appendChild(giscusScript);
  }

  watch(isDark, (newVal) => {
    const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
    if (iframe) {
      iframe.contentWindow?.postMessage(
        {
          giscus: {
            setConfig: {
              theme: newVal ? GISCUS_DARK_THEME : GISCUS_LIGHT_THEME,
            }
          }
        },
        'https://giscus.app'
      );
    }
  });
});
</script>

<template>
  <h2>🫧 Discussions</h2>
  <div id="giscus-comments"></div>
  <p class="id-box" title="留言版 ID">{{ id }}</p>
</template>

<style scoped>
.id-box {
  text-align: right;
  font-style: italic;
  font-size: .7rem;
  padding: 1rem 0;
}

/* #region:same as vitepress theme */
/* .vp-doc h2 */
h2 {
  margin: 48px 0 16px;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 24px;
  letter-spacing: -0.02em;
  line-height: 32px;
  font-size: 24px;
}

/* .vp-doc p */
p {
  line-height: 28px;
}

/* #endregion:same as vitepress theme */
</style>