<template>
  <q-page class="flex flex-center bg-blue-2 sky" style="padding-top: 60px">
    <q-page-sticky position="top" expand class="bg-blue-4 text-white">
      <q-toolbar>
        <q-toolbar-title>12: Christmas Eve</q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>
    <div class="q-px-md">
      <!-- <Snowf /> -->
      <p>
        Cut to the skating rink. Day. The sky is clear blue. The reflection of
        the sun off the bright white snow hurts the eyes. That day, final
        preparations are being made for the Nativity On Ice. The ice rink is
        really starting to come together. People are gathered at the rink to
        finish the last details. Catie is at the rink (she was one of the first
        to arrive), thoroughly enjoying the company of her new-found second
        family. She’s chatting with the people she’s gotten to know over the
        last 5-6 days as they’ve put their all into decorating for the most
        important week of the year.
        <br /><br />
        She stands up and to the side of all the action to take it all in with a
        big smile. Behind her, Beryl walks up and joins her. “Good morning,
        small town girl!” he says to Catie in the brisk, cold air as he stands
        really close next to her.
        <br /><br />
        “Hey, city slicker!” responds Catie. They both chuckle.
        <br /><br />
        They can see Sarah helping along with some of the other little girls in
        the town. They’re setting up fake animals in the stable on the ice. They
        talk about how the decorating and preparing for the Nativity is really
        coming along nicely. Beryl really talks up the show. He says he looked
        forward to flying out from New York each year to see the production and
        spend Christmas with Peter and Erin. He says the production itself isn’t
        what makes it special. It’s knowing the people that are putting their
        heart and soul into something they care deeply about. “That’s what makes
        Christmas so special. Spending it with people you care deeply about,”
        says Beryl. They’re practically in each other’s arms by now. Sarah
        notices and giggles.
        <br /><br />
        Just then, Blaze, Kelly, and Lauren approach. Kelly and Lauren are in
        coveralls. Lauren is wiping her greasy hands with a rag. Blaze’s Benz is
        fixed, earlier than expected. “The parts came faster than we thought,”
        says Lauren.
        <br /><br />
        Kelly adds, “It should be ready later this afternoon.”
        <br /><br />
        Blaze says to Catie that they need to get going if they’re to make it to
        the cabin by tomorrow. Catie hesitates. She doesn’t really want to go.
        “Can’t we spend Christmas here, Blaze?” Blaze is in disbelief. This is
        the last place he wants to spend Christmas. Beryl is also in disbelief.
        He thought he’d have a few days more to spend with Catie, explain how he
        felt. He looks questioningly at Kelly and Lauren while Blaze and Catie
        are arguing. Kelly and Lauren both shrug as if to say the repairs went
        faster than they thought. What were they supposed to do? Sarah comes
        over to investigate what the commotion is all about. Blaze is really
        starting to cause a small scene.
        <br /><br />
        “Fine, Blaze,” says Catie abruptly, stopping the argument. “Head back to
        the Bed and Breakfast and start packing. I’ll be right behind.” Blaze
        turns around and leaves with Kelly and Lauren.
        <br /><br />
        Sarah walks right up to Catie and looks straight up at her. “Does this
        mean you won’t spend Christmas in Turnberry?” asks Sarah with a
        quivering lip.
        <br /><br />
        Catie kneels down to Sarah’s level and tries to comfort her. “Oh Sarah,”
        she tucks a piece of Sarah’s hair behind her ear. “This week has been so
        special. I don’t think any Christmas could ever compare to this.” She
        gives Sarah a big hug. Sarah is sobbing on Catie’s shoulder. “In fact,
        if you think about it, it was almost like every day this last week was
        Christmas.” Sarah takes her head off Catie’s shoulder and looks her in
        the eye, wiping away tears. Catie continues, “So, in a way, it’s like I
        did spend Christmas in Turnberry.” Neither Catie nor Sarah are buying
        this, though. Catie is trying just as hard to convince herself as she is
        Sarah.
        <br /><br />
        Catie stands up. Not far from her is Trent, polishing some decorations
        in his hand with a soft cloth. He looks at Catie but doesn’t say
        anything. He doesn’t need to. Catie remembers their conversation last
        night, but shrugs him off, burying her feelings.
        <br /><br />
        Catie walks over to Beryl. She stops when she gets to him. She starts to
        go in for a hug, but Beryl sort of slights her by extending his hand for
        a handshake. He’s doing this because he’s both upset to see her actually
        leaving with Blaze, and also to protect his own feelings. “Catie,
        I...I…” He knows what he wants to say, but can’t say it. “Thanks again
        for last night. The hay, I mean.”
        <br /><br />
        Catie looks a little disappointed. “You’re welcome. Merry Christmas.”
        They say goodbye, but clearly they both leave a lot that needs to be
        said. Catie walks out of the rink. Blaze can be seen walking ahead with
        Kelly and Lauren toward the shop down a ways on Main Street. Catie turns
        around again to get one last good look at Beryl. She starts walking
        away.
        <br /><br />
        After walking a couple of yards, Beryl shouts to her, “Catie, wait!” He
        runs halfway to her as she turns around with a hopeful look in her eye.
        “I...I…,” stutters Beryl. He can’t bring himself to say what he’s
        thinking. “Watch out for that first bend outside of town. It can really
        surprise you.”
        <br /><br />
        “Thanks,” says Catie through the tears welling up in her eyes. Beryl’s
        half smile has turned into a half-frown. Catie turns around again and
        continues walking. Beryl doesn’t move. He just watches Catie walk out of
        the rink and his life. The rest of the town resumes decorating for that
        night’s performance.
      </p>
    </div>
    <div class="row justify-between q-mx-lg" style="width: 250px">
      <q-btn
        outline
        rounded
        color="primary"
        label="Prev"
        @click="$router.push('/chapter_11')"
      />
      <q-btn
        outline
        rounded
        color="primary"
        label="Next"
        @click="$router.push('/chapter_13')"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Snowf from "vue-snowf/src/components/Snowf";

export default defineComponent({
  name: "Chapter12",
  components: {
    // Snowf,
  },
});
</script>
