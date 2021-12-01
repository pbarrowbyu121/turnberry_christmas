<template>
  <q-page class="flex flex-center bg-blue-2 sky" style="padding-top: 60px">
    <q-page-sticky position="top" expand class="bg-blue-4 text-white">
      <q-toolbar>
        <q-toolbar-title>4: Bed and Breakfast</q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>
    <div class="q-px-md">
      <Snowf />
      <p>
        Cut to the bed and breakfast. Outside is a sign that says, “Rachael’s
        Bed and Breakfast.” It’s a quaint home. Probably 70-100 years old, but
        renovated in such a way that makes it feel comfortable, yet antique. In
        the front room is a concierge desk. Behind it is the owner and operator,
        Rachael. Her hair is in a simple updo holding a pencil in the back.
        Rachael is a pleasant person. Her favorite phrase is “Now isn’t that
        cute,” or variations thereon. “Now aren’t they cute,” etc.
      </p>
      <p>
        Cate and Blaze walk in carrying a few of their bags. They look around
        them as they walk toward Rachael behind the desk.
      </p>
      <p>
        “Hi. Welcome to Rachael’s (that’s me) Bed and Breakfast. In operation
        since 2015!” She’s so happy. “How can I help you?”
      </p>
      <p>
        Catie puts her hands on the desk. “We’re apparently going to be stranded
        here for a week. Car troubles. Kelly from the garage recommended you.”
      </p>
      <p>
        Blaze chimes in. “He said that you’d be able to offer us a steep
        discount on account of the garage not having the parts.”
      </p>
      <p>
        “Oh, I’d be happy to. What’s Christmas without a little good will
        between pilgrims.” Rachael starts typing on her computer, lifting her
        hands off the keyboard, and reading the screen. “And lucky you, we’ve
        got exactly one room left.” She comes out from behind the desk, picks up
        some bags and starts walking them to their room up the stairs. “You’re
        not married, are you? I’m afraid the only room I have has twins.”
      </p>
      <p>Blaze is quick to answer. “No, not married thankfully.”</p>
      <p>
        “Wonderful!” She throws her head back when she says this. “Now, usually
        dinner is offered in the dining room, but tonight the whole town is
        having dinner at the church. You can be my guests. I’m going to bring my
        world-famous charcuterie.” (She pronounces it in immaculate French).
        “You just can’t miss it. It’s at 7:00.” Catie seems excited until she
        hears the word ‘church.’ Rachael doesn’t notice. She explains that every
        year they have the dinner to kick off the decorating for the Nativity on
        Ice.
      </p>
      <p>“Nativity on Ice?” asks Blaze.</p>
      <p>
        “Oh, deary me,” says Rachael as she leads Blaze and Catie down the hall.
        “I love you two so much already, I’ve forgotten you’re not from around
        here.” She explains the Nativity on Ice. Each December 24th the town
        decorates Erin’s and Peter’s skating rink to look like Bethlehem. They
        re-enact the Nativity from Luke 2. It’s timed so that it ends right at
        midnight on Christmas Eve, heralding in Christmas Day.
      </p>
      <p>
        Rachael fiddles with the key in the door. Finally the key catches and
        she opens the door. Inside are two twin beds separated by an antique
        lamp table. There’s an antique dresser and mirror. It all sits on an
        antique throw rug. Catie and Blaze throw their bags on a bed.
      </p>
      <p>
        “Well, here’s your room. Let me know if there’s anything I can get for
        you.” Rachael starts to leave the room.
      </p>
      <p>
        Catie stops her. “Uh, you mentioned a skating rink. Was that the skating
        rink I saw up the street?”
      </p>
      <p>
        “Oh yes,” replies Rachael. “That’s Erin and Peter’s skating rink. We’ve
        still got some time before dinner. Why don’t you two have a nice
        romantic lap around the pond before then?”
      </p>
    </div>
    <div class="row justify-between q-mx-lg" style="width: 250px">
      <q-btn
        outline
        rounded
        color="primary"
        label="Prev"
        @click="$router.push('/chapter_3')"
      />
      <q-btn
        outline
        rounded
        color="primary"
        label="Next"
        @click="$router.push('/chapter_5')"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Snowf from "vue-snowf/src/components/Snowf";

export default defineComponent({
  name: "Chapter4",
  components: {
    Snowf,
  },
});
</script>
