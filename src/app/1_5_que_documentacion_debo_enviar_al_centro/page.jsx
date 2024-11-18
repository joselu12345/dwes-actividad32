import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import Link from "next/link";
import ItemLista from "@/components/item-lista";


export const metadata = {
  title: "1.5.- ¿Qué documentación debo enviar al centro?"
};

export default function Home() {
  return (
    <>
      <Titulo>  {metadata.title} </Titulo>
      <Nav pos={15} />

      <div className="flex flex-col gap-4">

        <p>Debes presentar la solicitud de convalidación de módulos profesionales, acompañada de la documentación establecida correspondiente, en el centro. <span className="font-bold">En ningún caso puedes enviar por tu cuenta la solicitud al Ministerio.</span></p>
        <div>
          <ItemLista><span className="font-bold">Solicitud de convalidación</span> que encuentras en <Link className='text-blue-600' href="https://www.juntadeandalucia.es/educacion/portals/web/formacion-profesional-andaluza/estudiante/posibilidades-tras-formarme/convalidaciones-modulos">este enlace (ver "Impreso solicitud convalidación módulos profesionales")</Link>. En ese documento es imprescindible que cumplimentes todos los apartados. En este <Link className='text-blue-600' href="https://www.juntadeandalucia.es/educacion/secretariavirtual/consultas/#FORM_PROF">enlace </Link>puedes consultar los módulos de cada ciclo impartido con <span className="font-bold">su nombre y el código exacto. Para ello, debes desplegar dentro de cada centro, el apartado "Módulos ofertados de este ciclo". Recuerda que el plazo para enviar la solicitud de convalidación concluye a finales de octubre</span>.</ItemLista>
          <ItemLista><span className="font-bold">Fotocopia del Documento Nacional de Identidad </span>(DNI) o fotocopia del Pasaporte o de la Tarjeta de Extranjero/a o del Permiso de Residencia (temporal o definitivo) o del Visado de Estudios</ItemLista>
          <ItemLista>Además, debe incluirse la siguiente documentación, <span className="font-bold">ya sea original o fotocopia compulsada </span>(recuerda que puedes compulsar un documento en cualquier Administración Pública que cuente con registro simplemente presentando la copia y enseñando el original):</ItemLista>
          <ItemLista interior={true}><span className="font-bold">Certificación académica oficial expedida por el centro docente donde has cursado los estudios que alegas</span>. En el caso de estudios universitarios, es obligatorio presentar original o fotocopia compulsada de la certificación académica oficial, con indicación de las horas o créditos de cada materia superada.</ItemLista>
          <ItemLista interior={true}><span className="font-bold">En el caso de alegar un título que acredite la formación previa alegada, debes presentar el título oficial o resguardo de haberlo solicitado</span>. En el caso de que desees convalidar alegando haber cursado otro ciclo formativo, es suficiente con el certificado académico de notas y no es necesario que adjuntes también la copia del título o el resguardo de haberlo solicitado.</ItemLista>
          <ItemLista interior={true}><span className="font-bold">En el caso de alegar enseñanzas universitarias, además de la certificación académica oficial con indicación de las horas o créditos de cada materia superada, deberás presentar los programas de las asignaturas que haya cursado sellados</span> (el sello debe ser original y no vale una fotocopia del programa en el que el sello no sea original) por el centro universitario. <span className="font-bold">Estos programas deben recoger la duración y contenidos teóricos y prácticos estudiados</span>.</ItemLista>
          <ItemLista interior={true}><span className="font-bold">En el caso de alegar unidades de competencia oficialmente acreditadas, certificación oficial de la acreditación de la Unidad de Competencia o Certificado de profesionalidad expedido por la Administración Laboral competente, obtenido de acuerdo con lo establecido en el RD 34/2008, de 18 de enero.</span></ItemLista>
        </div>
        <p><span className="font-bold">Aunque ya se ha dicho anteriormente, se recuerda que todos los documentos (excepto el DNI y el documento de la solicitud de convalidación) tienen que ser original o copia compulsada. También se recuerda que el centro no puede tramitar ante el Ministerio de Educación ninguna solicitud que no venga acompañada de la documentación establecida.</span></p>
        <p><span className="font-bold">El solicitante deberá estar matriculado en los módulos profesionales que solicita convalidar y haber satisfecho los derechos de matrícula en las enseñanzas para las cuales solicita la convalidación.</span></p>
        <p><span className="font-bold">Las convalidaciones entre estudios universitarios y de Formación Profesional se podrán solicitar cuando estos últimos pertenezcan al espacio de la educación superior</span>. Además, el número de módulos profesionales de los ciclos de grado superior convalidados <span className="font-bold">no podrá superar el 60% de la totalidad de créditos ECTS</span> establecidos en el real decreto por el que se establece el título Técnico Superior y se fijan los aspectos básicos del currículo, siempre que se <span className="font-bold">aporten enseñanzas universitarias que estén relacionadas con el campo de conocimiento y exista similitud entre las competencias, conocimientos y resultados de aprendizaje.</span></p>


      </div>
    </>
  );
}
