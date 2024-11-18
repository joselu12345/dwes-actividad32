import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import ItemLista from "@/components/item-lista";


export const metadata = {
  title: "1.2.1.- Condiciones para convalidar FOL"
};

export default function Home() {
  return (
    <>
      <Titulo>  {metadata.title} </Titulo>
      <Nav pos={6} />

      <div className="flex flex-col gap-4">

        <p>Para poder convalidar el módulo de FOL (Formación y Orientación Laboral) es necesario acreditar alguna de las siguientes condiciones:</p>
        <div>
          <ItemLista>Si el módulo a convalidar pertenece a un ciclo LOE (Ley Orgánica 2/2006, de 3 de mayo). <span className="font-bold">Para esta convalidación es indiferente que los módulos que se aporten sean de grado medio o superior.</span> </ItemLista>
          <ItemLista interior={true}><span className="font-bold">Tener aprobado el módulo de FOL en cualquier otro Ciclo LOE y acreditarlo documentalmente.</span></ItemLista>
          <ItemLista interior={true}><span className="font-bold">Tener aprobado el módulo de FOL en un Ciclo LOGSE (Ley Orgánica 1/1990, de 3 de octubre) y poseer un certificado que acredite que se posee la formación establecida para el desempeño de las funciones de nivel básico de la actividad preventiva</span>(PRL). Sirve cualquier curso de PRL impartido por alguna entidad legalmente constituida, de una duración no inferior a 30 horas y cuyos contenidos incluyan los que indica el anexo IV del Real Decreto 39/1997, de 17 de enero (BOE de 31 de enero de 1997), por el que se aprueba el Reglamento de los Servicios de Prevención. <span className="font-bold"> El certificado del curso de PRL deberá hacer constar específicamente tanto la duración como los contenidos impartidos.</span> </ItemLista>
          <ItemLista interior={true}><span className="font-bold">Poseer el título de Técnico Superior en Prevención de Riesgos Profesionales derivado de la Ley Orgánica 1/1990, de 3 de octubre.</span></ItemLista>
        </div>
        <div>
          <ItemLista>Si el módulo a convalidar pertenece a un ciclo LOGSE de grado medio (Ley Orgánica 1/1990, de 3 de octubre):</ItemLista>
          <ItemLista interior={true}><span className="font-bold">Tener aprobado el módulo de FOL en un Ciclo LOGSE (Ley Orgánica 1/1990, de 3 de octubre).</span></ItemLista>
          <ItemLista interior={true}><span className="font-bold">Tener aprobado el módulo de FOL en cualquier otro Ciclo LOE y acreditarlo documentalmente.</span></ItemLista>
        </div>
        <div>
          <ItemLista>Si el módulo a convalidar pertenece a un ciclo LOGSE de grado superior (Ley Orgánica 1/1990, de 3 de octubre):</ItemLista>
          <ItemLista interior={true}><span className="font-bold">Tener aprobado el módulo de FOL en un Ciclo LOGSE de Grado Superior (Ley Orgánica 1/1990, de 3 de octubre).</span></ItemLista>
        </div>

        <table className="mx-[10%] w-[80%] border-separate">
          <thead>
            <tr>
              <th className="p-2 bg-blue-200">
                Modulo a convalidar
              </th>
              <th className="p-2 w-[60%] bg-blue-200">
                Formación a aportar
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan="4" className="p-2 bg-blue-200">
                FOL GM (LOGSE Ley Orgánica 1/1990, de 3 de octubre)
              </th>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                FOL GM LOGSE
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                FOL GS LOGSE
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                FOL GM LOE
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                FOL GS LOE
              </td>
            </tr>

            <tr>
              <th className="p-2 bg-blue-200">
                FOL GS (LOGSE Ley Orgánica 1/1990, de 3 de octubre)
              </th>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                FOL GS LOGSE
              </td>
            </tr>

            <tr>
              <th rowSpan="5" className="p-2 bg-blue-200">
                FOL GM (LOE Ley Orgánica 2/2006, de 3 de mayo)
              </th>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                FOL GM LOE
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                FOL GS LOE
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                FOL GM LOGSE + Certificado nivel básico actividad preventiva
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                FOL GS LOGSE + Certificado nivel básico actividad preventiva
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                Título Técnico Superior en Prevención de Riesgos Profesionales
              </td>
            </tr>

            <tr>
              <th rowSpan="5" className="p-2 bg-blue-200">
                FOL GS (LOE Ley Orgánica 2/2006, de 3 de mayo)
              </th>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                FOL GM LOE
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                FOL GS LOE
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                FOL GM LOGSE + Certificado nivel básico actividad preventiva
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                FOL GS LOGSE + Certificado nivel básico actividad preventiva
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                Título Técnico Superior en Prevención de Riesgos Profesionales
              </td>
            </tr>


          </tbody>
        </table>

      </div>
    </>
  );
}
