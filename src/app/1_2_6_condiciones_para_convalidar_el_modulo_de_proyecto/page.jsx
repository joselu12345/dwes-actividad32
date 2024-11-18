import Titulo from "@/components/titulo";
import Nav from "@/components/nav";


export const metadata = {
  title: "1.2.6.- Condiciones para convalidar el módulo de Proyecto"
};

export default function Home() {
  return (
    <>
      <Titulo>  { metadata.title } </Titulo>
      <Nav pos={11} />

      <div className="flex flex-col gap-4">

        <p>El módulo profesional de Proyecto correspondiente a títulos de Formación profesional de grado superior no podrá ser objeto de convalidación ni de exención en ningún caso.</p>

      </div>
    </>
  );
}
