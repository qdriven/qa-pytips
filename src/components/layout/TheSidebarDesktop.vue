<script setup lang="ts">
const navigation = useNavigationStore()
</script>

<template>
  <nav>
    <the-sidebar-navigation
      :navigation="navigation.mainNavigation"
      section-name="Introduction"
    />

    <the-sidebar-navigation
      :navigation="navigation.cheatsheetNavigation"
      section-name="Software QA Python revisited"
    />

    <the-sidebar-navigation
      :navigation="navigation.standardLibraryNavigation"
      section-name="Tricks and Tips"
    />
  </nav>
</template>
