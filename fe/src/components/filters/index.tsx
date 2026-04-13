import { Dropdown, DropdownOption } from '../dropdown';
import { Search } from '../search';

const sortOptions: DropdownOption[] = [
  { name: 'price_desc', title: 'Cena: od najwyżej' },
  { name: 'price_asc', title: 'Cena: od najniżej' },
  { name: 'capacity_desc', title: 'Pojemność: od najwyższej' },
  { name: 'capacity_asc', title: 'Pojemność: od najniższej' },
];

const featuresOptions: DropdownOption[] = [
  { name: 'Panel AI Control' },
  { name: 'Silnik inwerterowy' },
  { name: 'Wyświetlacz elektroniczny' },
];

const energyClassOptions: DropdownOption[] = [{ name: 'A' }, { name: 'B' }, { name: 'C' }];

const capacityOptions: DropdownOption[] = [{ name: 8 }, { name: 9 }, { name: 10.5 }];

export const Filters = () => {
  return (
    <div>
      <div className="mb-8 pt-6 flex max-w-xs mx-auto">
        <Search />
      </div>
      <div className="grid grid-cols-4 gap-x-3 mb-4">
        <div>
          <div className="block text-sm font-bold text-black text-lg mb-2">Sortuj</div>
          <Dropdown options={sortOptions} filter={'sort'} />
        </div>
        <div>
          <div className="block text-sm font-bold text-black text-lg mb-2">Funkcje</div>
          <Dropdown options={featuresOptions} filter={'feature'} />
        </div>
        <div>
          <div className="block text-sm font-bold text-black text-lg mb-2">Klasa energetyczna</div>
          <Dropdown options={energyClassOptions} filter={'energyClass'} />
        </div>
        <div>
          <div className="block text-sm font-bold text-black text-lg mb-2">Pojemność</div>
          <Dropdown options={capacityOptions} filter={'capacity'} />
        </div>
      </div>
    </div>
  );
};
