<template>
  <div class="notes">
    <div class="note-block" v-for="(note, index) in notes" :key="index" :ref="'note' + index">
      <note :note="note" :notes="notes" :updateNote="updateNote(index)"></note>
    </div>
  </div>
</template>

<script>
import Note from "./Note.vue";
export default {
  name: "Notes",
  components: {
    Note
  },
  props: ["notes"],
  methods: {
    updateNote: function(index) {
      return function(text) {
        if (text != 0) {
          this.notes[index].content.push({
            label: text,
            checked: false
          });
        }
      };
    }
  }
};
</script>