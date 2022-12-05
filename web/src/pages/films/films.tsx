import { Box } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { useFilms } from "../../hooks/useFilms";

type Film = {
    title: string;
    description: string;
    image: string;
    movie_banner: string;
    direction: string;
    producer: string;
    running_time: string;
    rt_score: string;
    duration: string;
};

interface FilmsProps {
  films: Film[];
}

export default function Films({ films }: FilmsProps) {
  return (
    <Box>
      {/* <Head>
        <title>Wilk Dev | Projects</title>
        <meta name="title" content="Wilk Gillian desenvolvedor front-end" />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta property="twitter:image" content="/ogimage.png" />
        <meta
          name="description"
          content="Desenvolvedor front end, veja alguns dos meus projetos."
        />
      </Head> */}
      <main>
        {projects.map((project) => (
          
        ))}

        <H1>Todos os Projetos</H1>
        <Grid>
          {projects.slice(1).map((project) => (
            <BoxImage key={project.slug}>
              <div>
                <Link href={project.slug}>
                  <button type="button">Ver</button>
                </Link>
                <button type="button">
                  <a href={project.repolink} target="blank">
                    <AiFillGithub />
                  </a>
                </button>
              </div>
              <img src={project.image} alt={project.title} />
            </BoxImage>
          ))}
        </Grid>
      </main>
    </Box>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const { dados } = useFilms();
  const films = dados.map((film) => ({
    slug: film.id,
    id: film.id,
    title: film.title,
    description: film.description,
    image: film.image,
    movie_banner: film.movie_banner,
    // director: film.director,
    // producer: film.producer,
    // running_time: film.running_time,
    // rt_score: film.rt_score,
    // release_date: film.release_date,
    genre: film.genre,
  }));
  return {
    props: { films },
  };
};
