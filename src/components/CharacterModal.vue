<template>
  <b-modal
    ref="my-modal"
    header-bg-variant="dark"
    header-text-variant="white"
    hide-footer
    title="Personagem"
  >
    <div class="d-block text-left" v-if="characterSelected">
      <h3 class="text-center">{{ characterSelected.name }}</h3>
      <p><b>Sexo: </b>{{ characterSelected.gender }}</p>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "characterModal",
  props: ["characterSelected"],
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    }
  }
};
</script>
