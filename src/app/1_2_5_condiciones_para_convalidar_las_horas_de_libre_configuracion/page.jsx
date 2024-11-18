import Titulo from "@/components/titulo";
import Nav from "@/components/nav";


export const metadata = {
  title: "1.2.5.- Condiciones para convalidar las Horas de Libre Configuración"
};

export default function Home() {
  return (
    <>
      <Titulo>  {metadata.title} </Titulo>
      <Nav pos={10} />

      <div className="flex flex-col gap-4">

        <p>El módulo profesional de <span className="font-bold">Horas de Libre Configuración no puede ser objeto de convalidación</span>.</p>
        <p>Este módulo profesional no se evalúa de manera independiente al estar asociado a otro módulo profesional a efectos de evaluación. Cuando un alumno o alumna obtiene la convalidación de este otro módulo profesional (o lo haya superado con anterioridad), queda exento de cursar el de Horas de Libre Configuración.</p>

      </div>
    </>
  );
}
