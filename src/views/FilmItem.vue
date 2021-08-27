<template>
  <b-container class="d-flex justify-content-center">
    <!-- Loading spinner -->
    <LoadingSpinner v-if="loading" />
    <b-row v-else>
      <b-col cols="12">
        <b-card style="border: none" no-body class="overflow-hidden mb-3">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-body class="text-center" :title="film.title">
                <b-card-text class="text-left">
                  <b>Diretor: </b>{{ film.director }}<br />
                  <b>Produtor: </b>{{ film.producer }}<br />
                  <div>
                    <b>Personagens: </b>
                    <a
                      href="#"
                      v-for="(character, index) in characters"
                      :key="index"
                      @click="openCharacterModal(index, $event)"
                    >
                      {{ character.name }},
                    </a>
                  </div>
                  
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <CharacterModal
      ref="characterModal"
      :characterSelected="characterSelected"
    />
    <StarShipModal ref="starShipModal" :starShipSelected="starShipSelected" />
  </b-container>
</template>

<script>
import axios from "axios";
import CharacterModal from "../components/CharacterModal";
import LoadingSpinner from "../components/LoadingSpinner";

export default {
  name: "filmItem",
  components: {
    CharacterModal,
    LoadingSpinner
  },
  data() {
    return {
      film: null,
      characters: [],
      loading: false,
      characterSelected: null
    };
  },
  created() {
    const filmId = this.$route.params.id;
    window.console.log(this.film);
    this.loading = true;
    axios.get( `http://localhost:3000/star-wars/v1/film/film/${filmId}`).then(res => {
      this.film = res.data;
      window.console.log(this.film);
      this.getCharacters();
      this.loading = false;
    });
  },
  methods: {
    getCharacters() {
      this.characters = this.film.characters;
    },
    openCharacterModal(characterIndex, event) {
      event.preventDefault();
      this.characterSelected = this.characters[characterIndex];
      this.$refs.characterModal.showModal();
    },
    openStarShipModal(starShipIndex, event) {
      event.preventDefault();
      this.starShipSelected = this.starShips[starShipIndex];
      this.$refs.starShipModal.showModal();
    }
  }
};
</script>

<style scoped></style>
