import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import Image from "next/image";


export const metadata = {
  title: "1.2.3.- Condiciones para convalidar Inglés"
};

export default function Home() {
  return (
    <>
      <Titulo>  {metadata.title} </Titulo>
      <Nav pos={8} />

      <div className="flex flex-col gap-4">
        <p>La documentación a aportar varía en función del módlo Inglés que se desee convalidar. Siempre deben ser estudios cursados y superados de lengua inglesa.</p>
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
              <th rowSpan="10" className="p-2 bg-blue-200">
                0156 Inglés
              </th>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                Lengua Extranjera LOGSE (duración de 65 horas, según el Real Decreto que establece el título de formación profesional y sus enseñanzas mínimas)
                Cuando la lengua extranjera cursada y superada sea inglés.
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                Lengua Extranjera LOGSE o de la C.A.

                Cuando la lengua extranjera cursada y superada sea inglés
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                Módulos Profesionales de Lengua

                Extranjera LOGSE de ciclos formativos de Grado Superior, en cualquiera de sus denominaciones, siempre que sea la misma que la que se desea convalidar.
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                Certificado del Ciclo Elemental, de Inglés, de la Escuela Oficial de Idiomas.

                (RD 967/1988, de 2 de septiembre).
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                Certificado de Nivel Intermedio (B1), de Inglés, de la Escuela Oficial de Idiomas. (RD 1629/2006, de 29 de diciembre).
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                Certificado de Aptitud de Inglés de la Escuela Oficial de Idiomas.

                (RD 967/1988, de 2 de septiembre).
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                Certificado de Nivel Avanzado (B2), o superior, de Inglés de la Escuela Oficial de Idiomas.

                (RD 1629/2006, de 29 de diciembre).
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                Título de Grado, o equivalente, en Filología Inglesa.
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                Título de Grado, o equivalente, en Traducción e Interpretación (Inglés).
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                0179 Inglés.
              </td>
            </tr>
            <tr>
              <th rowSpan={7} className="p-2 bg-blue-200">
                0179 Inglés
              </th>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                Lengua Extranjera LOGSE (Inglés).
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                Lengua Extranjera (duración de 90 horas, según reales decretos por los que se establecen los títulos de formación profesional y sus enseñanzas mínimas)

                Cuando la lengua extranjera cursada y superada sea inglés
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                Lengua Extranjera en Comercio Internacional.

                Cuando la lengua extranjera cursada y superada sea inglés.
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                Certificado de Aptitud de Inglés de la Escuela Oficial de Idiomas.

                (RD 967/1988, de 2 de septiembre).
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                Certificado de Nivel Avanzado (B2), o superior, de Inglés de la Escuela Oficial de Idiomas.

                (RD 1629/2006, de 29 de diciembre).
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                Título de Grado, o equivalente, en Filología Inglesa
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 text-gray-600">
                Título de Grado, o equivalente, en Traducción e Interpretación (Inglés).
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
