<template>
  <q-page
    class="flex flex-center bg-blue-grey-10 sky"
    style="padding-top: 60px"
  >
    <q-page-sticky position="top" expand class="bg-blue-grey-6 text-white">
      <q-toolbar>
        <q-toolbar-title>9: That Night</q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>
    <div class="q-px-md text-white">
      <Snowf />
      <p>
        Cut to an exterior shot of the Bed and Breakfast at night. Erin and
        Catie walk Blaze into their room at the bed and breakfast. Samantha is
        behind carrying Blaze’s stuff. They set him down on his bed. Erin, and
        Samantha bid them goodbye and leave the room. Catie checks with Blaze to
        see if he’s going to be fine. He’s pressing an ice pack against his eye
        and squinting with his other. It’s turning into a black eye. Blaze says
        something about wanting to get to the cabin. Wanting to get out of the
        small town. He says he’s going to call Kelly and Lauren tomorrow and
        check on the car. He says he doesn’t even feel like going to the cabin.
        He just wants to go home. Catie asks, “Can I get you anything?”
        <br /><br />
        Blaze thinks for a bit. “Maybe some rocky road?”
        <br /><br />
        Catie smiles. “Be right back.”
        <br /><br />
        Catie walks out of the room and sees Erin sitting in the living room
        chatting with Rachael. They both wave and smile at Catie. She approaches
        them. “Thanks for all your help today,” she says in a grateful tone.
        <br /><br />
        Erin and Rachael smile. Erin winks, “Anything for you, dear. You’re here
        for Christmas which makes you family.”
        <br /><br />
        Catie smiles and excuses herself. She walks out into the cold night.
      </p>
      <hr />
      <p>
        Cut back to the skate shack. Inside Beryl is alone, sharpening skates.
        There’s a knock on the door. “Come in!” shouts Beryl. In walks Samantha.
        She closes the door behind her.
        <br /><br />
        Beryl is surprised to see her. He puts down the skates he’s working on.
        “Sam!”
        <br /><br />
        Samantha takes a seat on the bench where Blaze was resting hours
        earlier. “That was quite a pitch you threw today. Reminded me of
        Corporate Softball Games.”
        <br /><br />
        “Is he going to be okay?” asks Beryl.
        <br /><br />
        “Bishop says he’ll be fine.”
        <br /><br />
        They sit in silence for a bit. Samantha breaks the ice. “Beryl, Beryl,
        Beryl.”
        <br /><br />
        “Sam, Sam, Sam.”
        <br /><br />
        Samantha sighs. She picks up a pair of skates. She holds it up toward
        Beryl. “Shall we?”
        <br /><br />
        Beryl smiles softly. “Sure.”
      </p>
      <hr />
      <p>
        Cut to the outdoor skating rink. It’s dark. Samantha and Beryl are
        skating next to each other. They’re not smiling. Not frowning. Not
        saying much. Finally Samantha starts. “I’m sorry I’ve been a little
        quiet these last few months.”
        <br /><br />
        “I was interested, Sam. But it takes two to make a relationship. I can’t
        do that on my own. No one can.”
        <br /><br />
        “Even from our first date, our friends were constantly talking about us.
        I guess the constant gossip sorta scared me.”
        <br /><br />
        “Another thing I don’t miss about New York,” says Beryl.
        <br /><br />
        “I guess I got scared. Nervous.”
        <br /><br />
        “This isn’t the first time, though, Sam. It was up and down with you.
        I’d try to throw my heart back in when you came around. But having to do
        that time and again...it wears a guy out.”
        <br /><br />
        They skate around in silence a little more. Samantha sighs, looks around
        the surrounding town in its Christmas glory and says, “I am going to
        miss visiting Turnberry at Christmas.” She looks all around her, taking
        in the small town. Finally, she spins a 180 and stops, facing Beryl. She
        grabs his arms at his side and looks him in his eyes. She slowly leans
        in for a kiss but then redirects and merely leaves a gentle kiss on his
        cheek. She says, “Beryl, I think I let a good one slip through my
        fingers.” She looks toward the Bed and Breakfast. “Don’t you do the
        same.”
      </p>
      <hr />
      <p>
        Cut back to Catie walking the streets. It’s late. The streets are
        deserted. She’s headed into the neighborhoods and is walking slow,
        distracted by the cute houses, each trimmed meticulously with Christmas
        lights, each one cuter than the next.
        <br /><br />
        She stops in front of one house that catches her attention. The golden
        glow lighting the house from the inside conveys warmth. It’s trimmed
        with lights like all the others, but the Christmas tree in the front bay
        window catches her attention. In the living room she sees a beautiful
        young mother holding a baby dressed in warm red pajamas on her hip. Her
        husband walks into the room holding a small wrapped package. He crouches
        down and places it under the tree. He stands back up and admires the
        tree. He puts his arm around his wife and they both lean in for a short
        but tender kiss. They smile at each other. Then a young girl in her
        nightgown runs into the room with arms raised and a big smile on her
        face. She runs and leaps into her dad’s arms. She’s almost too big to
        still be lifted, but her strong dad is still happy to be able to lift
        her high above his head, then pull her in for a big bear hug. He holds
        her on his hip and says something to her with a big smile. The little
        girl smiles big, nods her head then hugs her dad’s neck.
        <br /><br />
        We see a shot of Catie solemnly looking on, deep in thought. She sighs
        and continues her walk in the deep, dark, cold night.
      </p>
    </div>
    <NavButtons :prev="'/chapter_8'" :next="'/chapter_10'" color="white" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Snowf from "vue-snowf/src/components/Snowf";
import NavButtons from "src/components/NavButtons.vue";

export default defineComponent({
  name: "Chapter9",
  components: {
    Snowf,
    NavButtons,
  },
});
</script>
