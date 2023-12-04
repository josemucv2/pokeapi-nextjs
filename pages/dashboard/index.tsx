import { Core } from "@/layouts/Core";
import { Card, Pagination } from "@/components";
import { GetServerSideProps } from "next";
import { useState } from "react";
import { getPokemon, getPokemonById } from "@/services/axios";
import { Pokemon } from "@/interfaces/Pokemon";

interface DashboardProps {
  pokemonWithImages: Pokemon[];
}

interface CustomFetchResponse<T> extends Response {
  data: T;
}
const ITEMS_PER_PAGE = 10;

const Dashboard: React.FC<DashboardProps> = ({ pokemonWithImages }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pokemonSelected, setPokemonSelected] = useState<Pokemon>({
    name: "",
    url: "",
    abilities: [],
    sprites: {
      front_default: "",
    },
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    if (currentPage === ITEMS_PER_PAGE) {
      return;
    }
    setCurrentPage(currentPage + 1);
    ITEMS_PER_PAGE * 10;
  };
  const backPage = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage(currentPage - 1);
  };

  const selectedPokemon = (pokemon: Pokemon) => {
    const modal = document.getElementById(
      "my_modal_3"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
      setPokemonSelected(pokemon);
    }
  };

  return (
    <Core>
      <div className="flex flex-wrap justify-between px-16 pb-16">
        {pokemonWithImages.map((element: Pokemon, index: number) => {
          return (
            <div onClick={() => selectedPokemon(element)} key={index}>
              <Card
                name={element.name}
                image={element.sprites?.front_default}
                ability1={
                  element.abilities.length > 0 ? element.abilities[0].name : ""
                }
                ability2={
                  element.abilities.length > 1 ? element.abilities[1].name : ""
                }
              />
            </div>
          );
        })}
      </div>

      <div className="w-full flex justify-center">
        <Pagination
          totalPages={ITEMS_PER_PAGE}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          nextPage={nextPage}
          backPage={backPage}
        />
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">
              ✕
            </button>
          </form>
          <Card
            name={pokemonSelected.name}
            image={pokemonSelected.sprites?.front_default}
            ability1={
              pokemonSelected.abilities[0] && pokemonSelected.abilities[0].name
            }
            ability2={
              pokemonSelected.abilities[1] && pokemonSelected.abilities[1].name
            }
          />
        </div>
      </dialog>
    </Core>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps<
  DashboardProps
> = async () => {
  const data: Pokemon[] = await getPokemon(10, 0);

  const pokemonDetail: Pokemon[] = await Promise.all(
    data.map(async (element: Pokemon) => {
      const pokemonDetail = await getPokemonById(element.url);
      const pokemonAbilities = pokemonDetail.abilities.map((element: any) => {
        return element.ability;
      });

      return {
        name: element.name,
        sprites: pokemonDetail.sprites,
        abilities: pokemonAbilities,
      } as Pokemon;
    })
  );

  return {
    props: {
      pokemonWithImages: pokemonDetail,
    },
  };
};
