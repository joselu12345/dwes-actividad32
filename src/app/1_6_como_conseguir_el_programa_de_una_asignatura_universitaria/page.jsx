import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import ItemLista from "@/components/item-lista";


export const metadata = {
  title: "1.6.- ¿Cómo conseguir el programa de una asignatura universitaria?"
};

export default function Home() {
  return (
    <>
      <Titulo>  {metadata.title} </Titulo>
      <Nav pos={16} />

      <div className="flex flex-col gap-4">

        <p>Las convalidaciones <span className="font-bold">basadas en una o varias asignaturas universitarias no se resuelven en el centro, solo se reciben y envían al Ministerio para su resolución</span>. La experiencia nos dice que debes respetar los requisitos establecidos por el Ministerio.</p>
        <p>Además de la certificación académica oficial, el <span className="font-bold">Ministerio exige que presentes los programas de las asignaturas sellados originalmente por la universidad. Este último requisito es indispensable. En caso de que no se envíen los programas sellados, no se podrá enviar la solicitud de convalidación. No importa si presentas el título universitario y el certificado:</span> sin programas sellados no hay convalidación.</p>
        <p>¿Cómo conseguir los programas sellados? Es posible que hayas perdido los programas de cuando estudiaste en la Universidad, o si los tienes que no estén sellados, o en el peor de los casos, que ya no vivas ni siquiera donde estudiaste y no puedas desplazarte. Por eso no hay problema, siempre que tengas un poco de paciencia y quieras hacer lo que te proponemos, es muy probable que los consigas y puedas presentar tu solicitud de convalidación acompañada de los programas.</p>
        <p>Para ello, sigue los siguientes pasos:</p>
        <div>
          <ItemLista>Haz una lista de las asignaturas relacionadas con el módulo que quieres convalidar.</ItemLista>
          <ItemLista>Selecciona los departamentos responsables de esas asignaturas.</ItemLista>
          <ItemLista>Entra en la web de la Universidad en la que estudiaste y busca los departamentos del apartado anterior. Localiza el teléfono del jefe/director del departamento y la dirección de correo.</ItemLista>
          <ItemLista>Contacta por teléfono con el departamento y/o envía un correo con la siguiente información:</ItemLista>
        </div>
        <p>Buenos días.</p>
        <p>Mi nombre es XXXX. Cursé la licenciatura/diplomatura/grado en XXX en la Facultad de XXXX Promoción 20XX-20XX y actualmente curso otros estudios para los que necesito el programa <span className="font-bold">sellado</span> por el centro universitario en cuestión de las siguientes asignaturas:</p>
        <p>XXXXX. curso, 20XX-20XX</p>
        <p>XXXXX. curso, 20XX-20XX</p>
        <p>Les agradecería si me pudiesen decir cómo conseguirlo o si me lo pudiesen enviar a la siguiente dirección: XXXX</p>
        <p>De no ser así, dígame cómo puedo hacerlo.</p>
        <p>De nuevo, gracias por su amabilidad.</p>
        <p>Saludos cordiales.</p>


      </div>
    </>
  );
}
