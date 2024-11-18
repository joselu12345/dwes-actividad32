import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import Link from "next/link";


export const metadata = {
  title: "1.7.- ¿Cómo saber si me convalidarán un módulo si he alegado estudios universitarios?"
};

export default function Home() {
  return (
    <>
      <Titulo>  {metadata.title} </Titulo>
      <Nav pos={17} />

      <div className="flex flex-col gap-4">

        <p>No se puede saber a priori.</p>
        <p>Por eso el Ministerio de Educación y Formación Profesional solicita los programas universitarios sellados: para poder analizar caso a caso y de forma individualizada cada convalidación.</p>
        <p>El Ministerio de Educación y Formación Profesional tiene en su página Web información sobre la convalidación de módulos profesionales aportando estudios universitarios. La podéis encontrar en este <Link className='text-blue-600' href="https://www.todofp.es/convalidaciones-equivalencias-homologaciones/convalidaciones.html">enlace</Link>.</p>

      </div>
    </>
  );
}
