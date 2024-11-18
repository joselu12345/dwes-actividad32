import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import ItemLista from "@/components/item-lista";
import Link from "next/link";


export const metadata = {
  title: "1.2.7.- Exención de la FCT"
};

export default function Home() {
  return (
    <>
      <Titulo>  { metadata.title } </Titulo>
      <Nav pos={12} />

      <div className="flex flex-col gap-4">

        <p>El módulo profesional de Formación en Centros de Trabajo nunca será susceptible de convalidación, sino de exención total o parcial. Se podrá calificar como exento por correspondencia total o parcial con la experiencia laboral demostrable relacionada con los estudios profesionales respectivos. Para ello se requiere la matriculación previa del alumno en el módulo.</p>
        <p>Se debe acreditar, tanto para la exención total como para la parcial, una experiencia laboral equivalente al trabajo a tiempo completo de, al menos, un año, que permita demostrar que la persona solicitante tiene adquiridos los resultados de aprendizaje del módulo profesional de formación en centros de trabajo. En el caso de contratos a tiempo parcial, los días de cotización deberán ser equivalentes a un año a tiempo completo.</p>
        <p>Para solicitar la exención de la FCT <span className="font-bold">deberás enviar por correo certificado, y preferiblemente con acuse de recibo, a la atención de la Dirección de tu centro</span> lo siguiente:</p>

        <div>
          <ItemLista><span className="font-bold">Anexo I </span>(solicitud de exención) de la Orden de 28 de septiembre de 2011, por la que se regulan los módulos profesionales de formación en centros de trabajo y de proyecto para el alumnado matriculado en centros docentes de la Comunidad Autónoma de Andalucía. <Link className='text-blue-600' href="https://www.juntadeandalucia.es/educacion/portals/web/formacion-profesional-andaluza/estudiante/posibilidades-tras-formarme/convalidaciones-modulos">Puedes obtener aquí el impreso solicitud exención FCT</Link>.</ItemLista>
          <ItemLista><span className="font-bold">Documentación acreditativa </span>que justifique la experiencia laboral.</ItemLista>
        </div>

        <div className="flex flex-col gap-4 bg-blue-200 p-10 rounded-3xl shadow-lg shadow-slate-300">
        <p><span className="font-bold">Información sobre la exención de la FCT:</span></p>
        <ItemLista>Apartado &quot;¿Cómo se solicita la exención del módulo profesional de Formación en Centros de Trabajo (FCT)?&quot;, en el siguiente enlace:</ItemLista>
        <p><Link className='text-blue-600' href="https://www.juntadeandalucia.es/educacion/portals/web/formacion-profesional-andaluza/estudiante/posibilidades-tras-formarme/convalidaciones-modulos">Convalidaciones entre módulos profesionales</Link></p>
      </div>



      </div>
    </>
  );
}
