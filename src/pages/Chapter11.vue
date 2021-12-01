<template>
  <q-page class="flex flex-center bg-blue-2 sky" style="padding-top: 60px">
    <q-page-sticky position="top" expand class="bg-blue-4 text-white">
      <q-toolbar>
        <q-toolbar-title>11: Breakfast</q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>
    <div class="q-px-md">
      <Snowf />
      <p>
        Next shot is an establishing shot of Erin’s house, early morning. Erin
        is cooking breakfast. “Beryl! Breakfast is ready!” Sarah clears her
        spot. She’s already finished eating. As she walks over to the counter,
        she says with a BIG smile on her face, “He’s probably tired because,”
        and then in sing-song, “he was out late with Catie!”
        <br /><br />
        Beryl comes stumbling groggily into the kitchen, rubbing his messy hair.
        He’s just crawled out of bed. He blinks the sleep out of his eyes. Erin
        says something about how it’s not like him to get up so late. Sarah
        teases him, “It’s not his fault, mom. It’s Catie’s!” But as she is
        saying this, Beryl comes at her to tickle her. He picks her up and Sarah
        squeals with excitement, “No! No! Stop it!.” They laugh as Sarah squeals
        and runs out of the room. Erin flips some pancakes and eggs onto Beryls
        plate.
        <br /><br />
        “So,” she begins with a curious smile on her face. “Was it Catie’s fault
        that I had to sharpen skates all by myself this morning?”
        <br /><br />
        Beryl tries to play ignorant. In between mouthfuls he says, “Who’s
        Catie?” He feigns a confused look on his face.
        <br /><br />
        “Who’s Catie?!” exclaims Erin. “Just the girl that’s made you laugh and
        smile like nobody else has. Ever. I’ve never SEEN you so happy! Waddya
        mean ‘Who’s Catie?’ ‘Who’s Catie’ my tush.”
        <br /><br />
        “Well, she’s also frustrated me like no one else has.”
        <br /><br />
        “Who says that’s not part of love?” says Erin, smiling.
        <br /><br />
        Then Beryl and Erin have a conversation about how you know love is true
        or not. Beryl says, “I mean, when we kissed last night, I think I felt
        something different with her, but...but…” He pauses trying to find the
        right words. Erin is putting dishes in the dishwasher and listening. She
        takes Beryls dishes after he puts the last bite in his mouth and loads
        them. “Erin, how did you know you and Peter were in love? And I mean
        really in love? Not just Hallmark Christmas movie love.”
        <br /><br />
        Erin stops loading the dishwasher and leans backward against the
        counter, folding her arms. She’s looking for the right words, too.
        <br /><br />
        “Well, to be honest, I knew for a long time that we were in love. When
        we kissed I felt something, sure. When he smiled, I felt something. And
        I definitely have a thing for shaved heads.” She looks up in amazement
        as she remembers Peter’s rugged good looks. ”But I also knew there was
        something else. Something deeper that we felt. I just didn’t know how to
        put it into words.”
        <br /><br />
        “Yeah,” agrees Beryl. “I know what you mean.”
        <br /><br />
        “You didn’t let me finish,” says Erin. “I didn’t know how to put it into
        words until Peter did it for me.” She starts to get a little choked up.
        <br /><br />
        “When Peter asked me to marry him, he got down on one knee, and said,
        ‘Erin, whenever I’m with you, it’s like it’s Christmas morning. Walking
        into the living room and seeing the presents under the tree. The magic
        of anticipation still in the air.’ And that’s exactly what it was like
        with Peter. Christmas morning mixed with a little magical anticipation
        that the best is yet to come.” She lets this sink in. Beryl’s face looks
        off into the distance as he considers what Erin just said.
        <br /><br />
        “I just wish I had a few more days to find the right words,” says Beryl.
        He folds his pancakes with his fork, and stuffs it into his mouth.
      </p>
    </div>
    <div class="row justify-between q-mx-lg" style="width: 250px">
      <q-btn
        outline
        rounded
        color="primary"
        label="Prev"
        @click="$router.push('/chapter_10')"
      />
      <q-btn
        outline
        rounded
        color="primary"
        label="Next"
        @click="$router.push('/chapter_12')"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Snowf from "vue-snowf/src/components/Snowf";

export default defineComponent({
  name: "Chapter11",
  components: {
    Snowf,
  },
});
</script>
