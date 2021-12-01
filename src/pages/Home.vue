<template>
  <q-page class="flex flex-center">
    <div class="q-px-md text-center q-mt-md">
      <p class="text-dancing-script text-h2">Christmas in Turnberry</p>
      <p>An original story by P.A. Barrow</p>
      <p>Dedicated to Winder 2nd YSA and YSA everywhere</p>
      <p>
        <a class="text-weight-bold">Note:</a><br />
        This is a work of fiction. Its intent is to entertain and should not be
        seen as anything more or less. It presents the development of a
        relationship over a short period of time, but it should be noted that
        real relationships take hard work over long periods of time. Do not let
        such stories create unrealistic expectations.
      </p>
      <p>Merry Christmas!</p>
      <q-btn
        outline
        rounded
        color="primary"
        label="Begin"
        @click="$router.push('/chapter_1')"
        class="q-mb-lg"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Chapter1",
});
</script>
