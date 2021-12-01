<template>
  <q-page class="flex flex-center bg-blue-2 sky" style="padding-top: 60px">
    <q-page-sticky position="top" expand class="bg-blue-4 text-white">
      <q-toolbar>
        <q-toolbar-title>Decorating and Driving</q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>
    <div class="q-px-md">
      <Snowf />
      <p>
        The first shots are of a wintry small town. Main street. Mid morning. It
        seems like the whole town has come outside to decorate for Christmas.
        They’re putting up boughs of holly and garland all along the store
        fronts. It forms one continuous line just above the doorways and windows
        on either side of the street. Big red bows sit at the crest of each loop
        in one long line of garland. The lamp posts have Christmas lights
        outlining the shape of large candles on each post. People are putting
        Christmas lights on the tops of the buildings using poles to lift the
        strands to others on the roofs. They’re lining the windows with lights.
        Credits are appearing at the bottom of the screen.
      </p>
      <p>
        Intercut with these shots of the town decorating are shots of a black
        2017 Mercedes Benz cruising through the snow-covered countryside. The
        snow on either side of the highway is three feet deep after the fresh
        snowfall the night before. The sky is a sharp, clear blue. The
        reflection of the sun off the snow is almost blinding. The few clouds in
        the sky are big, white, and puffy. Not in the least bit threatening.
      </p>
      <p>
        Inside the Benz a man in his late twenties is driving. He’s got short,
        curly hair and a square, tight jaw. He’s physically fit and is one of
        the few that can get away with wearing a turtleneck sweater. His
        girlfriend sits in the passenger seat. Her hair is a waterfall of blonde
        that cascades down in gentle curls over one shoulder. Her cheeks are
        perfectly round and rise when she smiles. She always wears a necklace
        with a single turtle dove, regardless of the occasion.
      </p>
      <p>
        “You know, Catie,” says Blaze. “We’re lucky my parents are letting us
        use their cabin this year for Christmas. I really had to fight my
        brothers for it.”
      </p>
      <p>
        “We’ve gotten the cabin each of the last three Christmases” replies
        Catie, looking out her passenger window at the countryside. “Is it luck,
        or could it be that each year your parents think we’re going to finally
        get engaged?”
      </p>
      <p>
        “I suppose keeping them in suspense does work to my advantage,” smirks
        Blaze. “Now keep your eye out for a sign that says ‘Welcome to
        Turnberry.’ We’re supposed to take a left.”
      </p>
      <p>
        “I think I see it up ahead.” Catie leans her head forward and squints,
        looking into the distance. “Yep, here it comes.”
      </p>
      <p>
        They come to a rolling stop and we see a sign, “Welcome to Turnberry.
        Pop. 5,000” On the bottom of the sign has been attached a temporary
        addition saying, “Merry Christmas to All!”
      </p>
      <p>
        Blaze and Catie get a brief glimpse at Main Street and the Christmas
        decorations being hung with care. Blaze keeps his eyes on the road, but
        Catie puts her hands on her window and stares in wonder at the small
        town. Initially the view of Main Street being decorated brings her a
        smile, but then she gets a look of emotional discomfort.
      </p>
      <p>
        She makes brief eye contact with a gentleman climbing a ladder to hang
        Christmas lights from a street post. He’s in his early thirties. His
        hair is cut modestly, but very well. His chin is covered with a few days
        worth of unshaved scruff. He’s got a quiet manner about him. He’s
        wearing a warm coat, maroon sweater, and dark blue jeans. He takes good
        care of himself, but isn’t concerned about what others think.
      </p>
      <p>
        “I’m so glad we’re only passing through this small town. Why don’t these
        people just move to the nearest big city?” poses Blaze. Catie doesn’t
        respond. Her eyes are straining to keep looking at the guy that caught
        her eyes. Blaze starts to speed up. This gets Catie’s attention. Catie
        points out that he’s going quite fast.
      </p>
      <p>
        Back on Main Street, we see the same guy that made eye contact with
        Catie. He’s still watching the black Mercedes Benz that just passed by.
        Below him is Cassandra, a woman in her late twenties. Cassandra’s
        holding the ladder steady as Beryl climbs.
      </p>
      <p>
        “Beryl. Beryl!” Cassandra says with a little volume. She’s holding up
        more lights for him to hang. He returns his attention to the lights he’s
        hanging. “Sorry about that, Cassandra.” Cassandra hands up the strand of
        lights. Beryl asks, “Hey, how’s Zach these days? I haven’t talked to him
        since I’ve been in town.”
      </p>
      <p>
        “Oh you know Zach. Sometimes I’m not sure if he’s married to me, or if
        he’s married to writing.”
      </p>
      <p>
        “That sounds about right. So it sounds like he’s doing well, then?”
        chuckles Beryl, still focusing on fitting the lights together correctly.
      </p>
      <p>
        “Oh yes. We’re doing great. Sorry things weren’t working for you in New
        York. But I know I’m not the only one that’s glad you’re back here. Erin
        can’t stop saying how big of a help you’ve been. Not to mention Sarah.”
      </p>
      <p>
        Beryl is focusing on carefully plugging in this strand of lights into
        the strand already fastened to the lamp post. He quickly glances back to
        Cassandra. “Thanks, There really isn’t anywhere I’d rather be for
        Christmas than Turnberry.”
      </p>
      <p>
        “I guess I mean it’s nice that you’re back, and not just for the
        holidays.” Beryl smiles at Cassandra while untangling lights.
      </p>
    </div>
    <div class="row justify-between q-mx-lg" style="width: 250px">
      <q-btn
        outline
        rounded
        color="primary"
        label="Prev"
        @click="$router.push('/')"
      />
      <q-btn
        outline
        rounded
        color="primary"
        label="Next"
        @click="$router.push('/chapter_2')"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Snowf from "vue-snowf/src/components/Snowf";

export default defineComponent({
  name: "Chapter1",
  components: {
    Snowf,
  },
});
</script>
