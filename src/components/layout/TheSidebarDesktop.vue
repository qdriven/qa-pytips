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
      :navigation="navigation.QAPythonRevisitedNavigation"
      section-name="QA Python revisited"
    />

    <the-sidebar-navigation
      :navigation="navigation.cheatsheetNavigation"
      section-name="30-days-python-basic"
    />

    <the-sidebar-navigation
      :navigation="navigation.standardLibraryNavigation"
      section-name="Tricks and Tips"
    />
  </nav>
</template>
