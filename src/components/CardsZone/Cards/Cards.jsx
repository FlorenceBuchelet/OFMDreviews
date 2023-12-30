import "./Cards.scss";


const Cards = () => {
  const episodes = [
    {
      number: "S02E01",
      url: "/pictures/episode 1.png",
      title: "Impossible Birds",
      review: "It is so good to be back on the Revenge. Or is it? Edward is not feeling good lately and the atmosphere on board might not be as sweet as it used to be. Izzy is still an amazing character, sad, wet and overall perfect. And as everyone spends his time being miserable, Stede and the others are trying to survive working at Spanish Jackie's, leading to interesting meetings.",
      note: "⭐⭐⭐⭐⭐",
    },
    {
      number: "S02E02",
      url: "/pictures/episode 2.png",
      title: "Red Flags",
      review: "I'm not sure about this, I'm worried. Some scenes are violent and the tone is off. What Edward does might never be forgivable. And maybe I'm in trouble for having Izzy as my favorite character because he is in trouble. He used to be the trouble, now he's drowning in it and I am left worrying. They can't do that, I think, they can't erase him. And yet they might. On the other hand, Zheng is amazing. She's brave and fun, I'm glad we're getting more female characters.",
      note: "⭐⭐⭐⭐ ✰",
    },
    {
      number: "S02E03",
      url: "/pictures/episode 3.png",
      title: "The Innkeeper",
      review: "Oh this whole delirious phase Edward went through had my heart beating out of my chest. This season is such a rollercoaster and we're only at episode 3. How wild is that? Music is still amazing and the playlist is promising. I'm still getting all excited every week but at the same time I'm dreading the episodes. Just like when I watch a wrestling match and want to know the result before the math even happens. Waiting for the other shoe to drop is too stressful.",
      note: "⭐⭐⭐⭐⭐",
    },
    {
        number: "S02E04",
        url: "/pictures/episode 4.png",
        title: "Fun and Games",
        review: "Oh, damn. I don't know about the girls. I know I said it was nice having more women around but this couple is too dysfunctional to be fun. They kind of made my ill-at-ease. I'm so glad Stede and Ed are talking almost normally again though, it feels like home, truly. I could see them going for another adventure like nothing happened, good ol' Revenge, its crew, its two captains and, of course, their first mate. Alas, something tells me it won't go as smoothly.",
        note: "⭐⭐⭐⭐ ✰",
      },
      {
        number: "S02E05",
        url: "/pictures/episode 5.png",
        title: "The Curse of the Seafaring Life",
        review: "Absolutely my favorite episode so far! It helps that Izzy is so central in it. I do love that old unicorn. He's been broken and beaten up and yet he stands, he's still doing a stellar job as a first mate, he's the very best around. Supportive in his own effed up way, strong, brave, I only had eyes for him. If anything else happened in this episode I do not want to hear about it: only Izzy counts, only Izzy matters (and damn, did things happened!)",
        note: "⭐⭐⭐⭐⭐",
    },
      {
        number: "S02E06",
        url: "/pictures/episode 6.png",
        title: "Calypso's Birthday",
        review: "I have heard people reacting to this episode and I feel a bit out of it. Calypso's birthday was a great idea but I didn't really enjoy how it happened. Even though Izzy was wonderful, even though he sang. In French. And I do love this song a whole lot. But it lacked meaning, there was absolutely no reason for him to sing La Vie en Rose, not here, not know, not earnestly. I'm glad I get to see him evolve, I'm glad he's trying things, I'm glad he's getting a well deserved redemption arc. Yet, all of it felt rushed and I'm out of breath. As of Stede, as of Ed, I don't know, I'm not sure, I'm afraid of what's to come.",
        note: "⭐⭐⭐ ✰ ✰",
      },
      {
        number: "S02E07",
        url: "/pictures/TBA.png",
        title: "Man of Fire",
        review: "Stede is an idiot. I mean, I knew, obviously, but he really is a massive idiot. And so is Ed, in a way they are meant for each other. They got to be happy but decided against it, just like that, because being dumbasses was more empting, for some reason. I get that Ed is tired of the character he performs, I get that Stede is drunk on finally getting recognized for his accomplishments. They are still idiots, I did not like that. At least, Izzy looked really cool.",
        note: "⭐⭐ ✰ ✰ ✰",
      },
      {
        number: "S02E08",
        url: "/pictures/TBA.png",
        title: "Mermen",
        review: "It's been months since I watched that last episode. Oh I enjoyed the ride, I enjoyed it enough to base half my projects on this pirate gig but here we are, it didn't go as planned and I'm left disappointed and a bit sad. There's not much to say. When they decided to kill the character I was rooting for in such a rushed and shallow way, they lost me and the kind of audience I was part of. I'm glad I made this little website thanks to this fandom, I'm in peace with living it behind.",
        note: "✰ ✰ ✰ ✰ ✰",
      },

  ];

  return episodes.map((episode) => {
    return (
      <>
        <figure className="card">
          <img src={episode.url} alt={episode.title} />
          <h2><h4>{episode.number}</h4><h3>{episode.title}</h3></h2>
          <p>{episode.review}</p>
          <p>{episode.note}</p>
        </figure>
      </>
    );
  });
};

export default Cards;
