export const footer = () => {

    const footerView = 
    `<footer>
    <p>
      Belén Osorio y Camila Palma<br>
      <strong>Proyecto Dataverse de Laboratia</strong>
    </p>
  </footer> `;
  const footerComponent = document.createElement('div');
  footerComponent.innerHTML = footerView;
  return footerComponent ;
}