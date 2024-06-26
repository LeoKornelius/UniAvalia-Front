import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import { HeadMetaType } from "@/types/headMetaType";
import { Fira_Mono } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export const metadata: HeadMetaType = {
  title: "About",
  description:
    "Learn more about UniAvalia - a teacher rating system dedicated to helping students choose their classes wisely.",
};

const fira_mono = Fira_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-mono",
  weight: "400",
});

export default function About() {
  const router = useRouter();

  const handleClickLogin = () => {
    router.push("/login");
  };

  const handleClickCreate = () => {};

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/greenLogo.svg" sizes="any" />
      </Head>
      <main className={`${fira_mono.variable}`}>
        <NavBar
          selectedPageText={"About"}
          buttonText={"Entrar"}
          handleButtonClick={handleClickLogin}
          buttonWidth={"170"}
        />
        <div className="h-screen w-screen grid content-between lg:h-full p-6 lg:px-24 lg:py-0">
          <div className="grid justify-items-center space-y-6 md:space-y-10">
            <Image
              src="/greenLogoText.svg"
              alt="Uniavalia Logo with text"
              className="flex lg:hidden"
              width={72}
              height={72}
            />
            <h1 className="font-fira text-center text-3xl md:text-4xl font-bold lg:font-extrabold">
              Ajude a comunidade acadêmica avaliando seus{" "}
              <span className="text-green">professores</span> e{" "}
              <span className="text-green">disciplinas</span>
            </h1>
            <h2 className="font-fira text-center text-base md:text-xl">
              No Uniavalia você encontra comentários, avaliações e orientações
              feitas por outros estudantes que te auxiliam a fazer as melhores
              escolhas na hora de montar sua grade
            </h2>
            <Image
              src="/aboutImage.svg"
              alt="Uniavalia System description image"
              className="hidden md:flex 2xl:w-96 2xl:h-96"
              width={250}
              height={250}
            />
          </div>
          <div className="grid justify-items-center space-y-2 flex lg:hidden">
            <Button
              buttonText={"Entrar"}
              handleButtonClick={handleClickLogin}
              buttonWidth="w-52 md:w-96"
              buttonHeight="h-7 md:h-9"
            />
            <h3 className="font-fira text-sm md:text-base">
              Não tem uma conta?{" "}
              <a
                className="cursor-pointer underline underline-offset-2"
                onClick={handleClickCreate}
              >
                Crie uma
              </a>
            </h3>
          </div>
        </div>
      </main>
    </>
  );
}
