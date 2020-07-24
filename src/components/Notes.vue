<template>
  <masonry class="notes" :cols="{ default: 3, 992: 2, 700: 1 }" :gutter="20">
    <div class="note-block" v-for="(note, index) in notes" :key="index" :ref="'note' + index">
      <note
        :note="note"
        :notes="notes"
        :updateNote="updateNote(index)"
        @deleteNote="notes.splice([index], 1)"
      ></note>
    </div>
  </masonry>
</template>

<script>
import Note from "./Note.vue";
export default {
  name: "Notes",
  components: {
    Note,
  },
  props: ["notes"],
  methods: {
    updateNote: function (index) {
      return function (text) {
        if (text != 0) {
          this.notes[index].content.push({
            label: text,
            checked: false,
          });
        }
      };
    },
  },
};
</script>

<style>
.notes {
  display: grid;
  grid-auto-rows: auto;
  margin-top: 20px;
}

.note-block {
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 6px 6px 16px 0 rgba(217, 210, 200, 0.51),
    -6px -6px 16px 0 rgba(255, 255, 255, 0.76);
  height: max-content;
}

@media (min-width: 992px) {
  .notes {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
}
</style>
