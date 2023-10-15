import "./Cards.scss";

const Cards = () => {
  const episodes = [
    {
      number: "S02E01",
      url: "src/assets/pictures/episode 1.png",
      title: "Impossible Birds",
      review: "It is so good to be back on the Revenge. Or is it? Edward is not feeling good lately and the athmosphere on board might not be as sweet as it used to be. Izzy is still an amazing character, sad, wet and overall perfect. And as everyone spends his time being miserable, Stede and the others are trying to survive working at Spanish Jackie's, leading to interesting meetings.",
    },
    {
      number: "S02E02",
      url: "src/assets/pictures/episode 2.png",
      title: "Red Flags",
      review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero voluptatem architecto perspiciatis, pariatur est magnam repellat quo iure distinctio, nostrum accusamus, temporibus ducimus laboriosam? Eius perferendis sapiente voluptate suscipit tenetur? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa officiis explicabo autem. Consectetur quis iusto ipsum iste, soluta ipsa voluptate, earum corrupti quaerat minus mollitia sint nisi. Voluptas, eum voluptates."
    },
    {
      number: "S02E03",
      url: "src/assets/pictures/episode 3.png",
      title: "The Innkeeper",
      review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero voluptatem architecto perspiciatis, pariatur est magnam repellat quo iure distinctio, nostrum accusamus, temporibus ducimus laboriosam? Eius perferendis sapiente voluptate suscipit tenetur? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa officiis explicabo autem. Consectetur quis iusto ipsum iste, soluta ipsa voluptate, earum corrupti quaerat minus mollitia sint nisi. Voluptas, eum voluptates."
    },
    {
        number: "S02E04",
        url: "src/assets/pictures/episode 4.png",
        title: "Fun and Games",
        review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero voluptatem architecto perspiciatis, pariatur est magnam repellat quo iure distinctio, nostrum accusamus, temporibus ducimus laboriosam? Eius perferendis sapiente voluptate suscipit tenetur? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa officiis explicabo autem. Consectetur quis iusto ipsum iste, soluta ipsa voluptate, earum corrupti quaerat minus mollitia sint nisi. Voluptas, eum voluptates."
    },
      {
        number: "S02E05",
        url: "src/assets/pictures/episode 5.png",
        title: "The Curse of the Seafaring Life",
        review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero voluptatem architecto perspiciatis, pariatur est magnam repellat quo iure distinctio, nostrum accusamus, temporibus ducimus laboriosam? Eius perferendis sapiente voluptate suscipit tenetur? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa officiis explicabo autem. Consectetur quis iusto ipsum iste, soluta ipsa voluptate, earum corrupti quaerat minus mollitia sint nisi. Voluptas, eum voluptates."
    },
      {
        number: "S02E06",
        url: "src/assets/pictures/TBA.png",
        title: "Calypso's Birthday",
        review: "",
      },
      {
        number: "S02E07",
        url: "src/assets/pictures/TBA.png",
        title: "TBA",
        review: "",
      },
      {
        number: "S02E08",
        url: "src/assets/pictures/TBA.png",
        title: "TBA",
        review: "",
      },
  ];

  return episodes.map((episode) => {
    return (
      <>
        <figure className="card">
          <img src={episode.url} alt={episode.title} />
          <h2><h4>{episode.number}</h4><h3>{episode.title}</h3></h2>
          <p>{episode.review}</p>
          <p>⭐⭐⭐⭐⭐</p>
        </figure>
      </>
    );
  });
};

export default Cards;
