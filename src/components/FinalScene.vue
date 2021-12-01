<template>
  <div>
    <Snowf amount="500" />
    <p>
      Not far in the distance the clock tower strikes twelve, heralding in the
      Holiday of Holidays. Snow begins to fall from the sky as if signaled by
      the bells. The crowd begins to exclaim “Oh,” in excitement. The band
      begins to play Hark the Herald Angels Sing at a quick tempo (not slow like
      it’s always played in church). The crowd cheers. Couples and families
      embrace one another and begin singing along at the top of their lungs.
      It’s Christmas!
      <br /><br />
      Beryl and Catie stare into each other’s eyes, each with a big grin and
      snow flakes in their hair and on their face. They kiss. The crowd sees
      this and cheers even wilder. It resembles New Year’s Eve more than
      Christmas morning. They break the kiss. Catie asks, with a smile (knowing
      the answer), “What are you so happy about?”
      <br /><br />
      To which Beryl responds, “It just feels like...It feels like Christmas
      morning.”
      <br /><br />
      Catie chuckles. “It IS Christmas morning, silly.”
      <br /><br />
      Beryl smiles big. “Oh I know. I know. It certainly feels like Christmas
      morning.”
      <br /><br />
    </p>
    <p class="text-dancing-script">The End</p>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Snowf from "vue-snowf/src/components/Snowf";

export default defineComponent({
  name: "FinalScene",
  components: {
    Snowf,
  },
});
</script>
