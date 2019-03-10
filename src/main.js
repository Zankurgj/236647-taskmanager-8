import templateTaskCard from './templateTaskCard.module.js';
import templateFilters from './templateFilters.module.js';

const addScreenElement = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();
  return wrapper;
};

const filterContainer = document.querySelector(`.main__filter`);

filterContainer.appendChild(addScreenElement(templateFilters(`All`, 15, true)));
filterContainer.appendChild(addScreenElement(templateFilters(`Overdue`, 1)));
filterContainer.appendChild(addScreenElement(templateFilters(`Today`, 4)));
filterContainer.appendChild(addScreenElement(templateFilters(`Favorites`, 7)));
filterContainer.appendChild(addScreenElement(templateFilters(`Repeating`, 2)));
filterContainer.appendChild(addScreenElement(templateFilters(`Tags`, 6)));
filterContainer.appendChild(addScreenElement(templateFilters(`Archive`, 115)));

const tasksCardContainer = document.querySelector(`.board__tasks`);

const gererateTasksCard = (cardNumber) => {
  for (let i = 0; i <= cardNumber - 1; i++) {
    tasksCardContainer.appendChild(addScreenElement(templateTaskCard()));
  }
};
const initCardNumber = 4;
gererateTasksCard(initCardNumber);

const randomCardsNumber = () => Math.floor(1 + Math.random() * 10);

filterContainer.addEventListener(`change`, () => {
  tasksCardContainer.innerHTML = ``;
  gererateTasksCard(randomCardsNumber());
});

