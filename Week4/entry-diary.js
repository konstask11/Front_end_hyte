export function showDiary(element) {

  // Uusi funktio hakee dataa JSON-tiedostosta ja päivittää kortin sisällön
  async function updateCardWithJsonData(cardElement, jsonData) {
    try {
      // Valitse elementit kortista
      const dayElement = cardElement.querySelector('.day');
      const descriptionElement = cardElement.querySelector('.description');
      const imgElement = cardElement.querySelector('.card-img img');
  
      // Aseta JSON-tiedoston data kortin elementteihin
      dayElement.textContent = jsonData.day;
      descriptionElement.textContent = jsonData.description;
      imgElement.src = jsonData.address;
    } catch (error) {
      console.error('Virhe JSON-tiedoston käsittelyssä:', error);
    }
  }
  
  // Haetaan kaikki kortit
  const cardElements = document.querySelectorAll('.card-diary');
  
  // Käydään läpi kaikki kortit ja päivitetään ne JSON-tiedostosta haetulla datalla
  async function updateCardsWithJsonData() {
    try {
      // Hae data JSON-tiedostosta
      const response = await fetch('polku/tiedostoon/data.json');
      const jsonDataArray = await response.json();
  
      // Käy läpi jokainen kortti ja päivitä se vastaavalla JSON-datalle
      cardElements.forEach((cardElement, index) => {
        const jsonData = jsonDataArray[index];
        updateCardWithJsonData(cardElement, jsonData);
      });
    } catch (error) {
      console.error('Virhe JSON-tiedoston käsittelyssä:', error);
    }
  }
}
  // Kutsu funktiota päivittääksesi korttien dataa
  updateCardsWithJsonData();
