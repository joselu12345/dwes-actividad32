import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import Link from "next/link";


export const metadata = {
  title: "1.4.- ¿Qué organismo resuelve las convalidaciones?"
};

export default function Home() {
  return (
    <>
      <Titulo>  {metadata.title} </Titulo>
      <Nav pos={14} />

      <div className="flex flex-col gap-4">

        <p>
          Las convalidaciones recogidas expresamente en los <span className="font-bold">diferentes Anexos del <Link className='text-blue-600' href="https://www.boe.es/buscar/doc.php?id=BOE-A-2020-17274">RD 1085/2020, de 9 de diciembre</Link></span> las resuelve la dirección del centro donde esté matriculado el alumno/a. <span className="font-bold">Se resolverá negativamente aquellas solicitudes de su competencia que no aparezcan en los anexos anteriormente citados</span>.
        </p>
        <p>
          Aquellas solicitudes que acrediten para convalidar <span className="font-bold">una titulación universitaria o un título de FP1 o FP2</span> las resuelve <span className="font-bold">el Ministerio de Educación y Formación Profesional</span>. Estas últimas convalidaciones se envían al centro y se trasladan al Ministerio. <span className="font-bold">En ningún caso el alumnado podrá enviar directamente la solicitud de convalidación al Ministerio.</span>
        </p>

      </div>
    </>
  );
}
