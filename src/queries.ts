import { gql } from "@apollo/client";

const getAllCharacters = gql`
  query Character($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        image
        species
        gender
      }
    }
  }
`;

export { getAllCharacters };
