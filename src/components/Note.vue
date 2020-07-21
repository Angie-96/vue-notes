<template>
  <div>
    <div v-if="note.state === false" class="new-item">
      <button class="editbtn" role="button" @click="toggleEdit">
        <unicon name="edit" fill="#7dbf94" style="display:flex"></unicon>
      </button>
    </div>
    <div v-else class="new-item">
      <input type="text" placeholder="Add a new item" ref="newitem" @keyup.enter="addItem" />
      <button role="button" @click="addItem">
        <unicon name="plus" fill="#df815a" style="display:flex"></unicon>
      </button>
      <button role="button" @click="toggleEdit">
        <unicon name="save" fill="#639bb4" style="display:flex"></unicon>
      </button>
    </div>
    <ul>
      <li
        v-for="(item, index) in note.content"
        :key="index"
        v-bind:class="{ checked: item.checked }"
        v-on:click="changeStatus(item)"
      >{{ item.label }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["note", "notes", "updateNote"],
  methods: {
    toggleEdit() {
      this.note.state = !this.note.state;
    },
    addItem() {
      this.updateNote(this.$refs.newitem.value);
      this.$refs.newitem.value = "";
    },
    changeStatus(item) {
      item.checked = !item.checked;
    }
  }
};
</script>