<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import ReferenceIcon from '~/components/icons/ReferenceIcon.vue'
import PluginIcon from '~/components/icons/PluginIcon.vue'
import ArrowIcon from '~/components/icons/ArrowIcon.vue'
import GridIcon from '~/components/icons/GridIcon.vue'

const cardLinks = [
  {
    path: 'https://github.com/qdriven/qapy-revisited',
    name: 'View on GitHub',
    description: `Drop a star on GitHub if you find this project useful.`,
    icon: ArrowIcon,
    external: true,
  },
  {
    path: '/contributing',
    name: 'Contribute',
    description: `Get to know how easy is to contribute to the Python Cheatsheet.`,
    icon: PluginIcon,
  },
  {
    path: '/blog',
    name: 'Blog',
    description: `Handle Software QA Daily tasks by simple python.`,
    icon: ReferenceIcon,
  },
  {
    path: '/changelog',
    name: 'Changelog',
    description: `See what is new, what got fixed, and what is coming.`,
    icon: GridIcon,
    external: false,
  },
]

const { description } = useMeta()
const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndLarger = breakpoints.greater('sm')
</script>

<template>
  <article>
    <prose>
      <div class="flex justify-center sm:hidden">
        <img
          class="h-20 w-auto"
          src="https://raw.githubusercontent.com/wilfredinni/merken/master/static/merken/img/snake.svg"
          alt="Software-QA-Python-Revisited"
        />
      </div>

      <base-title
        v-if="smAndLarger"
        id="Software-QA-Python-Revisited"
        title="Software-QA-Python-Revisited"
        :description="description"
      >
        <h1>Software QA Python Revisited</h1>
      </base-title>
      <h1
        v-else
        class="mb-2 bg-gradient-to-r from-indigo-400 to-green-400 bg-clip-text text-center font-display text-4xl font-medium tracking-tight text-transparent dark:from-sky-400 dark:via-teal-300 dark:to-orange-300"
      >
        Software QA Python Revisited
      </h1>

      <p class="lead mt-0 text-center sm:text-start">
        Some of personal Experiences,
        Some of Learning from others, 
        and many other sources. Most important, it helps you spending less time to finish
        your Software QA daily tasks.
      </p>
    </prose>

    <!-- <subscription-form class="mb-8 mt-6" /> -->

    <div className="not-prose my-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
      <base-link-card
        v-for="link in cardLinks"
        v-once
        :key="link.path"
        :title="link.name"
        :description="link.description"
        :path="link.path"
        :icon="link.icon"
        :is-external="link.external"
      />
    </div>

    <prose class="hidden sm:block">
      <h2 id="getting-started">Software QA Python Revisited</h2>
      <p>
        曾今我也是看了python语法一遍又一遍,但是发现真要写python脚本去完成一件事情,却总是不能顺利写出代码.
        然后又去看语法，又去复习忘记的东西。最终我现在虽然可以快速的写python脚本，但是我觉得我花费了太多时间在学python语法或者
        一些最基本的东西上了，然后我问自己如果作为一个Software QA，如果现在重新开始学python你会怎么做？
        我有不同的答案，所以就开始了这个仓库. 从一个Software QA的角度看, 从现代Python功能上，介绍如何快速的使用Python解决实际过程中的问题.
        并且不花费很多时间.
      </p>
    </prose>
    <div class="mt-10">
      <prose class="hidden sm:block">
        <h2 class="text-center sm:text-start">
          What Software QA Python Revisited Provided:
        </h2>
     
        This Software QA Python cheatsheet tries to provide basic reference for beginner
        and advanced Software QA enginer, lower the entry barrier for newcomers and help
        veterans refresh the old tricks.
      </prose>
    </div>
    <div class="mt-10">
      <prose>
        <h2 id="contributors" class="text-center sm:text-start">
          Contributors
        </h2>
      </prose>
      <contributors class="pb-3 pt-10" />
    </div>
  </article>
</template>
