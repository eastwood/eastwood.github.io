"use client";

import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { useState } from "react";

type IrishThing = string;

type Round = {
  a: IrishThing;
  b: IrishThing;
};

const rounds: Round[] = [
  {
    a: "https://placehold.co/600x400?text=A",
    b: "https://placehold.co/600x400?text=B",
  },
  {
    a: "https://placehold.co/600x400?text=C",
    b: "https://placehold.co/600x400?text=D",
  },
  {
    a: "https://placehold.co/600x400?text=E",
    b: "https://placehold.co/600x400?text=F",
  },
];

const IrishGame = () => {
  const [winner, setWinner] = useState<IrishThing | null>(null);
  const [roundNumber, setRoundNumber] = useState(0);

  return <> </>;
};

export default async function Game() {
  return (
    <main>
      <Container>
        <Header />
        <article className="mb-32">
          <h1>Hello World</h1>
        </article>
      </Container>
    </main>
  );
}
