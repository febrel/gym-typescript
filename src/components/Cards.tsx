function Cards() {
  interface Card {
    valor: string;
    descripcion: string;
  }

  const data: Card[] = [
    {
      valor: "6154",
      descripcion: "Gym Members Since January 2024 - Up Until Now.",
    },
    {
      valor: "350",
      descripcion: "Born a New Body Bulder Champion Every Year.",
    },

    {
      valor: "20%",
      descripcion: "Mass Muscie is Increase in 6 - 12 Months Training.",
    },

    {
      valor: "35%",
      descripcion: "Available for our early bird members who join this month.",
    },

    {
      valor: "90%",
      descripcion: "Member get they fat burned in 9 - 6 months.",
    },
  ];
  return (
    <>
      {data.map((item, index) => (
        <div className="card-article" key={index}>
          <p className="card-title">{item.valor}</p>
          <p className="card-description">{item.descripcion}</p>
        </div>
      ))}
    </>
  );
}

export default Cards;
