import {
  defineConfig,
  HeadConfig,
  DefaultTheme,
  MarkdownOptions,
} from 'vitepress'
import GithubSlugger from 'github-slugger'
import markdownItTaskLists from 'markdown-it-task-lists'
import mila from 'markdown-it-link-attributes'
import markdownItContainer from 'markdown-it-container'

import { author, repoName, keywords } from '../.tnotes.json'

import sidebar from './sidebar.json'
import socialLinks from './socialLinks.json'
import menuItems from './menuItems.json'

const slugger = new GithubSlugger()

const github_page_url =
  'https://' + author.toLowerCase() + '.github.io/' + repoName + '/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  appearance: 'dark',
  base: '/' + repoName + '/',
  cleanUrls: true,
  description: repoName,
  head: head(),
  ignoreDeadLinks: true,
  lang: 'zh-Hans',
  lastUpdated: true,
  markdown: markdown(),
  router: {
    prefetchLinks: false,
  },
  sitemap: {
    hostname: github_page_url,
    lastmodDateOnly: false,
  },
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: themeConfig(),
  title: repoName,
})

function head() {
  const head: HeadConfig[] = [
    [
      'meta',
      {
        name: 'keywords',
        content: keywords.join(', '),
      },
    ],
    ['meta', { name: 'author', content: author }],
    ['link', { rel: 'canonical', href: github_page_url }],
    ['link', { rel: 'icon', href: github_page_url + 'favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
  ]

  return head
}

function markdown() {
  const markdown: MarkdownOptions = {
    lineNumbers: true,
    config(md) {
      md.use(markdownItTaskLists)
        .use(mila, {
          attrs: {
            target: '_self',
            rel: 'noopener',
          },
        })
        .use(markdownItContainer, 'swiper', {
          render: (tokens, idx) => {
            const defaultRenderRulesImage =
              md.renderer.rules.image ||
              ((tokens, idx, options, env, slf) =>
                slf.renderToken(tokens, idx, options))
            if (tokens[idx].nesting === 1) {
              md.renderer.rules.paragraph_open = () => ''
              md.renderer.rules.paragraph_close = () => ''
              md.renderer.rules.image = (tokens, idx, options, env, slf) =>
                `<div class="swiper-slide">${defaultRenderRulesImage(
                  tokens,
                  idx,
                  options,
                  env,
                  slf
                )
                  .replaceAll('<div class="swiper-slide">', '')
                  .replaceAll('</div>', '')}</div>`

              return `<div class="swiper-container"><div class="swiper-wrapper">\n`
            } else {
              md.renderer.rules.paragraph_open = undefined
              md.renderer.rules.paragraph_close = undefined
              md.renderer.rules.image = (tokens, idx, options, env, slf) =>
                `${defaultRenderRulesImage(tokens, idx, options, env, slf)
                  .replaceAll('<div class="swiper-slide">', '')
                  .replaceAll('</div>', '')}`
              return '</div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div><div class="swiper-pagination"></div></div>\n'
            }
          },
        })
    },
    anchor: {
      slugify: (label: string) => {
        slugger.reset()
        return slugger.slug(label)
      },
    },
    image: {
      lazyLoading: true,
    },
  }

  return markdown
}

function themeConfig() {
  const themeConfig: DefaultTheme.Config = {
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    externalLinkIcon: true,
    outline: {
      level: [2, 3],
      label: '目录',
    },
    nav: [
      {
        text: 'Menus',
        items: menuItems,
      },
    ],
    search: { provider: 'local' },
    sidebar: [
      {
        text: 'Menus',
        collapsed: true,
        items: menuItems,
      },
      ...sidebar,
    ],
    socialLinks,
  }

  return themeConfig
}
