import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import Image from "next/image";


export const metadata = {
  title: "1.9.- ¿Qué efectos tendrá la convalidación en mi expediente?"
};

export default function Home() {
  return (
    <>
      <Titulo>  {metadata.title} </Titulo>
      <Nav pos={19} />

      <div className="flex flex-col gap-4">

        <p>Cada módulo profesional convalidado se recogerá en los documentos académicos, a efectos de cálculo de la nota media del ciclo formativo de Formación Profesional, con la calificación obtenida por el solicitante en el módulo profesional cursado que conste en la documentación académica correspondiente.</p>
        <p><span className="font-bold">Los módulos profesionales convalidados con estudios universitarios, así como los que se convaliden aportando estudios anteriores a la LOGSE, unidades de competencia o certificación académica oficial de idioma no llevarán asignada ninguna puntuación</span>, constando en el expediente del alumnado como convalidado y no computarán a efectos de cálculo de la nota media del ciclo formativo.</p>

        <Image
          src="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/pen-162124_1280.png"
          alt=""
          width={400}
          height={600}
          className="self-center"
        />

      </div>
    </>
  );
}
