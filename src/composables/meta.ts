export function useMeta(){
  const route = useRoute()
  const base_url = import.meta.env.VITE_BASE_URL || 'localhost:3000'
  const description = 
    'Less time spending in coding, more focusing on daily tasks!Cheatsheet for Software QA Who using python! '
  //TODO: remove cardImage
    // const cardImage =
    // 'https://raw.githubusercontent.com/wilfredinni/pysheetBlog/master/img/logo.png'
    const themeColor = computed(() => (isDark.value ? '#1f2937' : '#ffffff'))
    const url = computed(() => `https://${base_url}${route.path}`)
    const keywords = [
      'python',
      'cheatsheet',
      'cheat',
      'sheet',
      'functions',
      'args',
      'kwargs',
      'sets',
      'dictionary',
      'list',
      'string',
      'regular',
      'expression',
      'formatting',
      'file',
      'path',
      'json',
      'test',
      'vscode',
      'comprehension',
      'exception',
      'debugging',
      'dataclasses',
      'environments',
      'flow control',
      'itertools',
      'qa-in-python',
      'qa-testing-scripts'
    ]

    const meta = {
      title: 'Software QA in Python, Use Python for Daily task without spending too much time learning python',
      description,
      meta: [
        { name: 'theme-color', content: themeColor },
        { name: 'description', content: description },
        { name: 'author', content: 'Software QA Python Cheatsheet' },
        { name: 'keywords', content: keywords.join(', ') },
        { property: 'og:title', content: 'Software QA Python Cheatsheet' },
        { property: 'og:description', content: description },
        { property: 'og:url', content: url },
        { property: 'og:type', content: 'article' },
        // { property: 'og:image', content: cardImage },
        // { name: 'twitter:title', content: 'Python Cheatsheet' },
        // { name: 'twitter:description', content: 'The Python Cheatsheet' },
        // { name: 'twitter:image', content: cardImage },
        // { name: 'twitter:card', content: 'summary' },
      ],
      link: [{ rel: 'canonical', href: url }],
    }

    return { meta, description }

}