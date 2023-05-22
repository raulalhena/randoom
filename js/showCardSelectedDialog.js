import { closeOneDialog } from "./closeDialog.js";
import { adventures } from "./data.js";
import { selectedCardsArray } from "./selectedCard.js";
// Muestra la carta seleccionada con la información
export const showCardSelectedDialog = (adventure) => {
  const cardSelectedDialog = document.getElementById("card-selected");

  cardSelectedDialog.innerHTML = `<button class="close-btn" id="card-selected-close-btn">&times;</button>
    <section>
      <div>
        <h2>${adventure.name}</h2>
        <p>
          ${adventure.description}
        </p>
      </div>
      <div class="social-media">
        <h3>Comparte tu aventura</h3>
        <div class="social-media-btns">
          <a href="https://api.whatsapp.com/send?text=¡Ooohh! Esta genial aventura ${adventure.name} me ha propuesto RANDVENTURE ¿Me acompañas? :)" target="_blank"><img src="/img/whatsapp.png" alt="whatsapp" /></a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=" target="_blank"><img src="/img/facebook.png"
              alt="Facebook" /></a>
          <a href="https://twitter.com/intent/tweet?text=¡Ooohh! Esta genial aventura ${adventure.name} me ha propuesto RANDVENTURE ¿Me acompañas? :)&url=RANDVENTURE&hashtags=aventuras,bucketlist,cosasquehacerantesdemorir,diversion" target="_blank"><img
              src="/img/twitter.png" alt="Twitter" /></a>
        </div>
      </div>
      <a class="calendar-btn" href="https://www.google.com/calendar/render?action=TEMPLATE&text=${adventure.name}&dates=20230525T090000Z/20230524T100000Z">
    Agenda tu aventura <img src="/img/calendar.png" alt="Añadir aventura a tu calendario" />
</a>

      </button>
    </section>`;

  // AÑADIR CARTA A LA SECCION DE AVENTURAS SELECCIONADAS
  const selectedCard = document.querySelector(".checked-adventure");
  selectedCard.innerHTML += `
    <label>
      <input type="checkbox" id="cbox1" value="basura"> ${adventure.name}
    </label><br>
  `;
  // QUITAR ADVENTURE DEL ARRAY ADVENTURES
  const index = adventures.indexOf(adventure);
  adventures.splice(index, 1);
  // AGREGAR ADVENTURE EN ARRAY DE ADVENTURES SELECCIONADAS
  selectedCardsArray.push(adventure);
  ///////////////////////////////////
  const closeBtn = cardSelectedDialog.firstChild;
  closeOneDialog(closeBtn, cardSelectedDialog);
  cardSelectedDialog.showModal();
};
