<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal class="bg-black">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title class="text-dancing-script"
          >Christmas in Turnberry</q-toolbar-title
        >
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
    title: "Title Page",
    to: "/",
  },
  {
    title: "Ch 1: Decorating and Driving",
    to: "/chapter_1",
  },
  {
    title: "Ch 2: Injury to Skate Shack",
    to: "/chapter_2",
  },
  {
    title: "Ch 3: At the Garage",
    to: "/chapter_3",
  },
  {
    title: "Ch 4: Bed and Breakfast",
    to: "/chapter_4",
  },
  {
    title: "Ch 5: Skating Rink",
    to: "/chapter_5",
  },
  {
    title: "Ch 6: Church Party",
    to: "/chapter_6",
  },
  {
    title: "Ch 7: Tree Hunting",
    to: "/chapter_7",
  },
  {
    title: "Ch 8: Snowball Fight",
    to: "/chapter_8",
  },
  {
    title: "Ch 9: That Night",
    to: "/chapter_9",
  },
  {
    title: "Ch 10: Getting the Hay",
    to: "/chapter_10",
  },
  {
    title: "Ch 11: Breakfast",
    to: "/chapter_11",
  },
  {
    title: "Ch 12: Christmas Eve",
    to: "/chapter_12",
  },
  {
    title: "Ch 13: Christmas Eve Nativity",
    to: "/chapter_13",
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
