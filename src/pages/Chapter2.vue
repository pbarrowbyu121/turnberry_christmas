<template>
  <q-page class="flex flex-center bg-blue-2 sky" style="padding-top: 60px">
    <q-page-sticky position="top" expand class="bg-blue-4 text-white">
      <q-toolbar>
        <q-toolbar-title>Injury to Skate Shack</q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>
    <div class="q-px-md">
      <Snowf />
      <p>
        Cut back to Blaze’s Mercedes Benz speeding down mainstreet. 40 mph in a
        15 mph zone. Inside Catie is telling Blaze to slow down. Blaze is
        oblivious. He’s also looking at his phone, adjusting the music. Not far
        up ahead, two men are standing on separate ladders hanging a banner
        across the street. It reads, “Nativity On Ice, Dec 24th 11:00 PM at
        Erin’s and Peter’s Skating Rink.”
      </p>
      <p>
        Blaze drives underneath, catching the halfway hung banner. The two men,
        Dallan and Derek are holding the banner as it gets caught. The force of
        the car yanks it out of their hands. They lose their balance and each
        falls off his ladder. Dallan flails his arms and falls back off the top
        of the ladder. Derek does similarly and falls. It’s not a serious fall,
        but it still startles everyone in close proximity decorating the street.
        A number of them rush over to help the two men. They’ve landed in the
        center of the street not far from each other.
      </p>
      <p>
        Beryl and Cassandra walk swiftly from down the street to see what the
        commotion is all about, and to make sure everyone’s okay. They arrive
        after a circle of people have already formed around the two injured men.
        Derek’s wife, Esther, comes walking from down the street where she was
        decorating a store window. She’s a little upset and flustered. Derek is
        rubbing his tailbone while still sitting on the ground. He is wincing
        with pain. “Oh honey, are you okay?” asks Esther. Dallan’s wife, Chella,
        isn’t far behind. She’s holding Esther’s arm.
      </p>
      <p>“Dallan, what happened?” asks Chella.</p>
      <p>
        “Not entirely sure,” says Derek. “One minute I’m watching Dallan hang
        lights, the next we’re both down here.”
      </p>
      <p>
        “Maybe it was Santa rushing back to the North Pole,” suggests Dallan.
      </p>
      <p>“Nah, Rudolph drives better than whoever that was,” says Beryl.</p>
      <p>
        Derek starts to get up, but then shrinks in a little pain. “Ooh. Ow.”
      </p>
      <p>
        “Rudolph isn’t a real reindeer, Beryl,” retorts Dallan matter-of-factly,
        still rubbing his rear.
      </p>
      <p>
        Derek chimes in, nodding in agreement. “He was made up to bring in
        foot-traffic to a department store.”
      </p>
      <p>“You’re done decorating for the day,” says Esther.</p>
      <p>
        “That goes for both of you,” says Chella, looking at Dallan. “Let’s get
        you somewhere to sit down, and get some ice. Beryl, do you think it
        would be okay if we go inside Erin’s place and let them sit down?”
      </p>
      <p>
        Beryl speaks up. “I was just about to suggest the same thing.” Beryl
        leans down and helps Derek up. Esther and Chella help Dallan to his
        feet.
      </p>
      <p>
        Beryl, Esther, and Chella help Derek and Dallan over to a small, simple
        skate shack just off Main Street, not far from where they were
        decorating. It sits beside an outdoor skating rink. Maybe six or so
        people, mostly kids, skating around on the ice. A number of people
        aren’t skating, but are decorating the rink and skate shack in holiday
        decor to match the rest of Main Street and Turnberry. One of them, Erin,
        is a tall, slender woman, blonde hair in a clip forming a simple updo in
        the back. She’s kneeling down outside of the shack working on a
        miniature display featuring Santa in his sleigh with eight reindeer. She
        looks up to see Beryl, Esther, Chella, Derek, and Dallan heading her
        way. She smiles. When she notices that Derek and Dallan aren’t walking
        under their own power, she hurries to her feet and brushes her knees
        off.
      </p>
      <p>
        “What happened?” asks Erin as she approaches the five. “You look like
        you got run over by all eight of Santa’s reindeer.”
      </p>
      <p>
        “See? Eight. NO Rudolph.” insists Dallan looking at Beryl but pointing
        at Erin.
      </p>
      <p>
        “Come on inside,” says Erin. She opens the door to her skate shack.
        Inside is a simple layout. A counter with a manual cash register.
        Opposite is a long bench for patrons to sit and put on their skates.
        Behind the counter on the back wall is a machine to sharpen the blades
        on ice skates. Next to it is a pile of skates waiting to be sharpened.
        Erin clears some stray coats, skates, and boxes off the bench making a
        place for Dallan and Derek to sit. “Here, have a seat. Sorry about the
        mess.”
      </p>
      <p>
        “Let me get you some ice,” says Beryl, slowly helping Dallan onto the
        bench. Esther and Chella are doing the same with Derek. Beryl walks into
        the back room with Erin. Beryl comes back with two ice packs. Erin is
        close behind with two cups of hot chocolate in each hand. She hands them
        to Esther, Chella, Dallan, and Derek.
      </p>
    </div>
    <div class="row justify-between q-mx-lg" style="width: 250px">
      <q-btn
        outline
        rounded
        color="primary"
        label="Prev"
        @click="$router.push('/chapter_1')"
      />
      <q-btn
        outline
        rounded
        color="primary"
        label="Next"
        @click="$router.push('/chapter_3')"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Snowf from "vue-snowf/src/components/Snowf";

export default defineComponent({
  name: "Chapter2",
  components: {
    Snowf,
  },
});
</script>
