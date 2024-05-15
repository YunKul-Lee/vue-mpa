<script setup>
import {defineAsyncComponent, shallowRef, watchEffect} from "vue"
import Error404 from './Error404.vue'

const pages = import.meta.glob('./pages/**/*.vue')
const pageComponents = {}
Object.keys(pages).forEach((key) => {
  const name = key.match(/^\.\/pages\/(.*)\.vue$/)[1].toLowerCase()
  // console.log('name : ', name)
  pageComponents[name] = defineAsyncComponent(() => pages[key]())
})

const page = shallowRef()

watchEffect(() => {
  let url = location.pathname

  // console.log('url : ', url.slice(1))

  if (url === '/') url = '/index'
  // if (url.endsWith('/')) url = url.slice(0, -1)
  page.value = pageComponents[url.slice(1).toLowerCase()] || Error404
})

</script>

<template>
  <component :is="page"></component>
</template>
`