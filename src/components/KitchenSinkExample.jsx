import Card from "react-bootstrap/Card";


function KitchenSinkExample() {
  const cardsData = [
    {
      id: 1,
      title: "Card One",
      text: "This is the first card content.",
      image:
        "https://cdn.pixabay.com/photo/2025/12/30/17/54/barn-swallow-10043616_1280.jpg",
    },
    {
      id: 2,
      title: "Card Two",
      text: "This is the second card content.",
      image:
        "https://cdn.pixabay.com/photo/2025/12/30/17/54/barn-swallow-10043616_1280.jpg",
    },
    {
      id: 3,
      title: "Card Three",
      text: "This is the third card content.",
      image:
        "https://cdn.pixabay.com/photo/2025/12/30/17/54/barn-swallow-10043616_1280.jpg",
    },
  ];

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="d-flex gap-5 flex-wrap justify-content-center">
        {cardsData.map((card) => (
          <div
            key={card.id}
            style={{
              width: "24rem",
              height: "360px",
              perspective: "1200px",
            }}
          >
            <div
              className="shadow-lg rounded-4"
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                transformStyle: "preserve-3d",
                transition: "transform 0.8s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "rotateY(180deg)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "rotateY(0deg)")
              }
            >
              {/* FRONT */}
              <Card
                className="border-0 rounded-4"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                }}
              >
                <Card.Img variant="top" src={card.image} />
                <Card.Body>
                  <Card.Title className="text-warning fw-semibold">
                    {card.title}
                  </Card.Title>
                  <Card.Text className="text-secondary">{card.text}</Card.Text>
                </Card.Body>
              </Card>

              {/* BACK */}
              <Card
                className="border-0 rounded-4 d-flex justify-content-center align-items-center"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  background: "#fff",
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <Card.Body className="text-center">
                  <h5 className="text-warning fw-semibold mb-3">
                    Premium Details
                  </h5>
                  <p className="text-secondary">
                    Exclusive materials
                    <br />
                    Handcrafted design
                    <br />
                    Luxury finish
                  </p>

                  <button className="btn btn-warning fw-semibold px-4 rounded-pill">
                    Discover
                  </button>
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KitchenSinkExample;
