<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal class="bg-black">
      <!-- <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar> -->
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>Christmas in Turnberry</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      style="width: 250px"
    >
      <q-list>
        <q-item-label header> Table of Contents </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          :to="link.to"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Chapter 1",
    to: "/chapter_1",
  },
  {
    title: "Chapter 2",
    to: "/chapter_2",
  },
  {
    title: "Chapter 3",
    to: "/chapter_3",
  },
  {
    title: "Chapter 4",
    to: "/chapter_4",
  },
  {
    title: "Chapter 5",
    to: "/chapter_5",
  },
  {
    title: "Chapter 6",
    to: "/chapter_6",
  },
  {
    title: "Chapter 7",
    to: "/chapter_7",
  },
  {
    title: "Chapter 8",
    to: "/chapter_8",
  },
  {
    title: "Chapter 9",
    to: "/chapter_9",
  },
  {
    title: "Chapter 10",
    to: "/chapter_10",
  },
  {
    title: "Chapter 11",
    to: "/chapter_11",
  },
  {
    title: "Chapter 12",
    to: "/chapter_12",
  },
  // {
  //   title: 'Docs',
  //   caption: 'quasar.dev',
  //   icon: 'school',
  //   link: 'https://quasar.dev'
  // },
  // {
  //   title: 'Github',
  //   caption: 'github.com/quasarframework',
  //   icon: 'code',
  //   link: 'https://github.com/quasarframework'
  // },
  // {
  //   title: 'Discord Chat Channel',
  //   caption: 'chat.quasar.dev',
  //   icon: 'chat',
  //   link: 'https://chat.quasar.dev'
  // },
  // {
  //   title: 'Forum',
  //   caption: 'forum.quasar.dev',
  //   icon: 'record_voice_over',
  //   link: 'https://forum.quasar.dev'
  // },
  // {
  //   title: 'Twitter',
  //   caption: '@quasarframework',
  //   icon: 'rss_feed',
  //   link: 'https://twitter.quasar.dev'
  // },
  // {
  //   title: 'Facebook',
  //   caption: '@QuasarFramework',
  //   icon: 'public',
  //   link: 'https://facebook.quasar.dev'
  // },
  // {
  //   title: 'Quasar Awesome',
  //   caption: 'Community Quasar projects',
  //   icon: 'favorite',
  //   link: 'https://awesome.quasar.dev'
  // }
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
