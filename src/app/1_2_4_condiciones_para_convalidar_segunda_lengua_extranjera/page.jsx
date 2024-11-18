import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import Image from "next/image";


export const metadata = {
  title: "1.2.4.- Condiciones para convalidar Segunda Lengua Extranjera"
};

export default function Home() {
  return (
    <>
      <Titulo>  {metadata.title} </Titulo>
      <Nav pos={9} />

      <div className="flex flex-col gap-4">

        <p>Para poder convalidar el módulo de Segunda Lengua Extranjera debe aportarse siempre estudios cursados y superados en la misma lengua que se desee convalidar. Es necesario acreditar alguna de las siguientes condiciones:</p>
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
                2ª Lengua Extranjera LOGSE
              </th>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                MP Segunda Lengua Extranjera LOGSE, siempre que sea la misma que la que se desea convalidar.
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                Certificado de Nivel Intermedio (B1), equivalente o superior, de la Escuela Oficial de Idiomas (RD 1629/2006, de 29 de diciembre) siempre que sea de la misma lengua extranjera que la que se desea convalidar.
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                Título de Grado en Filología o equivalente, de la misma especialidad que la lengua extranjera que se desea convalidar.
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                Título de Grado Traducción e Interpretación, o equivalente, de la misma especialidad que la lengua extranjera que se desea convalidar.
              </td>
            </tr>


            <tr>
              <th rowSpan="4" className="p-2 bg-blue-200">
                0180 2ª Lengua Extranjera.
              </th>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                Segunda Lengua Extranjera LOGSE.
                Cuando la lengua extranjera cursada y superada sea la misma que se desea convalidar.
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                Certificado del Ciclo Elemental o de Aptitud, de la Escuela Oficial de Idiomas.
                (RD 967/1988, de 2 de septiembre).
                (De la misma lengua extranjera que se desea convalidar).
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                Certificado de Nivel Intermedio (B1), o superior, de la Escuela Oficial de Idiomas. (RD 1629/2006, de 29 de diciembre).
                (De la misma lengua extranjera que se desea convalidar).
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                Título de Grado, o equivalente, en Filología o en Traducción e Interpretación.
                (De la misma especialidad que la lengua extranjera que se desea convalidar).
              </td>
            </tr>
          </tbody>
        </table>


        <div className="flex flex-col gap-4 bg-[#FBFCD7] p-10 rounded-3xl border-2 border-[#66521D] shadow-[0_4px_6px-rgba(0,0,0,0.2)]">
          <div className="flex gap-2 items-center">
            <Image
            src="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/icon_parasabermasfpd.png"
            alt=""
            width={60}
            height={60}
            />
            <h2 className="text-[#66521D] text-3xl font-bold0">Para saber más</h2>
          </div>
          <p className="text-[#66521D]">Por tanto, no es posible, <span className="font-bold underline bg-yellow-300">EN NINGÚN CASO</span>, convalidar este módulo por haber cursado una asignatura universitaria relativa a este idioma.</p>
        </div>

      </div>
    </>
  );
}
